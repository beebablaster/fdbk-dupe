import React from 'react'
import { 
  Dialog, 
  DialogContent, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { TOrganization } from '@/models/Organization'
import { usersTableDialogInputs } from './inputs'
import { ErrorMessage } from '@/components/common/message/ErrorMessage'
import { useUsersTableStore } from '../useUsersTableStore.hook'
import { TRegisterProps } from '@/models/Register'
import { useEditUserMutation } from '../../api/useEditUserMutation.hook'
import { useLanguage } from '@/locales/useLanguage'
import { Roles } from '@/components/constants/roles'
import { useAddReceiverMutation } from '../../api/useAddReceiverMutation.hook'
import { useAddManagerMutation } from '../../api/useAddManagerMutation.hook'
import { UsersTableAddProps } from './UsersTableAddProps'

type Props = {
  parentOrgId?: TOrganization["id"];
}

export const UsersTableDialog: React.FC<Props> = ({ 
  parentOrgId 
}) => {
  const translate = useLanguage();

  const {
    dialogOpen,
    setDialogOpen,
    closeDialog,
    selectedUser,
    setSelectedUser,
    dialogMode,
    error,
    setError,
    password,
    passwordConfirm,
    role
  } = useUsersTableStore();

  const { mutation: editMutation } = useEditUserMutation(setError, closeDialog)
  const { mutation: addReceiverMutation } = useAddReceiverMutation(setError, closeDialog)
  const { mutation: addManagerMutation } = useAddManagerMutation(setError, closeDialog)

  const [name, surname] = selectedUser?.name?.split(" ") ?? ["", ""];

  const dialogActionHandle = () => { 
    const params = {
      name: name,
      surname: surname,
      photo: '',
      email: selectedUser?.email,
      password: password,
      password_confirm: passwordConfirm,
      role_id: Roles[role],
      organizations: [parentOrgId!]
    } as TRegisterProps;

    if(Roles[role] === Roles.receiver) {
      addReceiverMutation.mutate(params);
    } else if (Roles[role] === Roles.manager) {
      addManagerMutation.mutate(params);
    } else if(Roles[role] === Roles.sender) {

    }
  }
  // translate
  const actionDisplay = dialogMode === "add" ? "Add" : "Edit";

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{actionDisplay} пользователя</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {usersTableDialogInputs.map(({ id, label }) => (
            <div key={id} className="grid items-center gap-2">
              <Label htmlFor={id} className="text-left">
                {translate(label)}
              </Label>
              <Input 
                id="name" 
                value={selectedUser ? selectedUser[id] : ''}
                onChange={(e) => setSelectedUser({...selectedUser, [id]: e.target.value})} 
                className="col-span-3" 
              />
            </div>
          ))}
          {dialogMode === "add" && (<UsersTableAddProps />)}
        </div>
        <ErrorMessage message={translate(error, { capitalize: true, isError: true })} />
        <DialogFooter>
          <Button 
            onClick={() => dialogActionHandle()}
            state={
              dialogMode === "add" ? 
              addReceiverMutation.status : 
              editMutation.status
            }
            disabled={
              !name ||
              !surname || 
              !selectedUser?.email || 
              !password ||
              password !== passwordConfirm
            } 
            type="submit"
          >
            {actionDisplay}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
