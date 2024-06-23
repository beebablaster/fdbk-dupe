import React from 'react'
import { 
  AlertDialog as AlertDialogWrapper, 
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogFooter, 
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from '../ui/alert-dialog';

type IProps = {
  isOpen: boolean;
  onOpenChange(open: boolean): void;
  action: () => void;
  title: React.ReactNode;
  description: React.ReactNode;
  cancel?: string;
  actionText?: string;
}

const AlertDialog: React.FC<IProps> = ({ isOpen, onOpenChange, action, title, description, cancel, actionText }) => {
  const cancelText = cancel ?? "Отменить";
  const actionTextShow = actionText ?? "Удалить";
  return (
    <AlertDialogWrapper open={isOpen} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel variant="secondary">{cancelText}</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={action}>{actionTextShow}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogWrapper>
  )
}

export default AlertDialog