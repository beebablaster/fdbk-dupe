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
import { CategoryCombobox } from './CategoryCombobox'
import { TCategory, TOrganization, TOrganizationProps } from '@/models/Organization'
import { organizationsTableDialogInputs } from './inputs'
import { useGetCategoriesQuery } from './useGetCategoriesQuery.hook'
import { useEditOrganizationMutation } from '@/components/Organizations/api/useEditOrganizationMutation'
import { ErrorMessage } from '@/components/common/message/ErrorMessage'
import { useAddOrganizationMutation } from '@/components/Organizations/api/useAddOrganizationMutation'
import { TableDialogMode } from '@/models/Table'
import { generateRandomNumber } from '@/utils/randomNumber'
import { useLanguage } from '@/locales/useLanguage'

type Props = {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  dialogMode: TableDialogMode;
  selectedOrganization: TOrganization;
  setSelectedOrganization: (value: React.SetStateAction<TOrganization | undefined>) => void;
  parentOrgId?: TOrganization["id"];
}

export const OrganizationsTableDialog: React.FC<Props> = ({ 
  dialogMode, 
  dialogOpen, 
  setDialogOpen, 
  selectedOrganization, 
  setSelectedOrganization, 
  parentOrgId 
}) => {
  const translate = useLanguage();
  const [error, setError] = React.useState("");
  const [categoryComboboxOpen, setcategoryComboboxOpen] = React.useState(false);
  const categoriesQuery = useGetCategoriesQuery();

  const setSelectedCategory = (category: TCategory) => {
    setSelectedOrganization({...selectedOrganization, category});
  }

  const closeDialog = () => {
    setSelectedOrganization(undefined);
    setDialogOpen(false);
    setError("");
  }

  // TODO: Make some abstraction over mutations, because they are almost the same
  const { mutation: editMutation } = useEditOrganizationMutation(setError, closeDialog)
  const { mutation: addMutation } = useAddOrganizationMutation(setError, closeDialog) 

  const dialogActionHandle = () => { 
    const params = {
      name: selectedOrganization?.name!,
      shortName: selectedOrganization?.shortName!,
      category_id: selectedOrganization.category.ID,
      parent_id: parentOrgId,
      email: selectedOrganization?.email,
    } as TOrganizationProps;
    if(dialogMode === "edit") {
      editMutation.mutate({ id: selectedOrganization.id, params })
    } else {
      params.photo = "img" + generateRandomNumber(1, 26) + ".jpg"
      addMutation.mutate(params)
    }
  }

  const actionDisplay = dialogMode === "add" ? "Добавить" : "Редактировать";

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{actionDisplay} организацию</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          {organizationsTableDialogInputs.map(({ id, label }) => (
            <div key={id} className="grid items-center gap-2">
              <Label htmlFor={id} className="text-left">
                {label}
              </Label>
              <Input 
                id="name" 
                value={
                  selectedOrganization ? 
                  selectedOrganization[id] : 
                  ''
                }
                onChange={(e) => {
                  setSelectedOrganization({...selectedOrganization, [id]: e.target.value})
                }} 
                className="col-span-3" 
              />
            </div>
          ))}
          <div className="grid items-center gap-2">
            <Label htmlFor="email" className="text-left">
              Категория
            </Label>
            <CategoryCombobox 
              query={categoriesQuery} 
              open={categoryComboboxOpen}
              setOpen={setcategoryComboboxOpen}
              selectedCategory={selectedOrganization?.category}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        <ErrorMessage message={translate(error, { capitalize: true, isError: true })} />
        <DialogFooter>
          <Button 
            onClick={() => dialogActionHandle()}
            state={
              dialogMode === "add" ? 
              addMutation.status : 
              editMutation.status
            }
            disabled={
              !selectedOrganization?.name || 
              !selectedOrganization?.shortName || !selectedOrganization?.category
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
