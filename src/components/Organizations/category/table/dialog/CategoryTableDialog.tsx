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
import { TCategory, TCategoryInput } from '@/models/Organization'
import { categoryTableDialogInputs } from './inputs'
import { ErrorMessage } from '@/components/common/message/ErrorMessage'
import { TableDialogMode } from '@/models/Table'
import { useEditCategoryMutation } from '@/components/Organizations/category/useEditCategoryMutation'
import { useAddCategoryMutation } from '@/components/Organizations/category/useAddCategoryMutation'
import { useLanguage } from '@/locales/useLanguage'

type Props = {
  dialogOpen: boolean;
  setDialogOpen: (open: boolean) => void;
  dialogMode: TableDialogMode;
  selectedCategory: TCategory;
  setSelectedCategory: (value: React.SetStateAction<TCategory | undefined>) => void;
  parentOrgId?: number;
}

export const CategoryTableDialog: React.FC<Props> = ({ 
  dialogMode, 
  dialogOpen, 
  setDialogOpen, 
  selectedCategory, 
  setSelectedCategory, 
}) => {
  const translate = useLanguage();
  const [error, setError] = React.useState("");

  const closeDialog = () => {
    setSelectedCategory(undefined);
    setDialogOpen(false);
    setError("");
  }

  // TODO: Make some abstraction over mutations, because they are almost the same
  const { mutation: editMutation } = useEditCategoryMutation(setError, closeDialog)
  const { mutation: addMutation } = useAddCategoryMutation(setError, closeDialog) 

  const dialogActionHandle = () => { 
    const params = {
      name: selectedCategory?.name!,
      field: selectedCategory?.field!,
    } as TCategoryInput;
    if(dialogMode === "edit") {
      editMutation.mutate({ id: selectedCategory.ID, params })
    } else {
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
          {categoryTableDialogInputs.map(({ id, label }) => (
            <div key={id} className="grid items-center gap-2">
              <Label htmlFor={id} className="text-left">
                {label}
              </Label>
              <Input 
                id="name" 
                value={selectedCategory ? selectedCategory[id] : ''}
                onChange={(e) => {
                  setSelectedCategory({...selectedCategory, [id]: e.target.value})
                }} 
                className="col-span-3" 
              />
            </div>
          ))}
        </div>
        <ErrorMessage message={translate(error, { capitalize: true, isError: true })} />
        <DialogFooter>
          <Button 
            onClick={() => dialogActionHandle()}
            state={dialogMode === "add" ? addMutation.status : editMutation.status}
            disabled={!selectedCategory?.name || !selectedCategory?.field} 
            type="submit"
          >
            {actionDisplay}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
