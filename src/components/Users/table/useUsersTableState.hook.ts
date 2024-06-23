import React from "react"
import { TableDialogMode } from "@/models/Table";
import { TUser } from "@/models/User";

export const useUsersTableState = () => {
  const [dialogMode, setDialogMode] = React.useState<TableDialogMode>("add");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState<TUser>();

  const openDailog = (user: TUser, mode: TableDialogMode = "edit") => {
    setDialogMode(mode);
    setDialogOpen(true);
    setSelectedUser(user);
  }
  const openAlert = (user: TUser) => {
    setAlertOpen(true);
    setSelectedUser(user);
  }
  
  return { 
    dialogMode, 
    dialogOpen, 
    setDialogOpen,
    alertOpen, 
    setAlertOpen,
    selectedUser, 
    setSelectedUser, 
    openDailog, 
    openAlert
  }
}