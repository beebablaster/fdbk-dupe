import React from "react"
import { TOrganization } from "@/models/Organization"
import { TableDialogMode } from "@/models/Table";

export const useOrganizationsTableState = () => {
  const [dialogMode, setDialogMode] = React.useState<TableDialogMode>("add");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [selectedOrganization, setSelectedOrganization] = React.useState<TOrganization>();

  const openDailog = (org: TOrganization, mode: TableDialogMode = "edit") => {
    setDialogMode(mode);
    setDialogOpen(true);
    setSelectedOrganization(org);
  }
  const openAlert = (org: TOrganization) => {
    setAlertOpen(true);
    setSelectedOrganization(org);
  }
  
  return { 
    dialogMode, 
    dialogOpen, 
    setDialogOpen,
    alertOpen, 
    setAlertOpen,
    selectedOrganization, 
    setSelectedOrganization, 
    openDailog, 
    openAlert
  }
}