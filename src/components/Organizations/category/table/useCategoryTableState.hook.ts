import React from "react"
import { TCategory } from "@/models/Organization"
import { TableDialogMode } from "@/models/Table";

export const useCategoryTableState = () => {
  const [dialogMode, setDialogMode] = React.useState<TableDialogMode>("add");
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [alertOpen, setAlertOpen] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState<TCategory>();

  const openDailog = (category: TCategory, mode: TableDialogMode = "edit") => {
    setDialogMode(mode);
    setDialogOpen(true);
    setSelectedCategory(category);
  }
  const openAlert = (category: TCategory) => {
    setAlertOpen(true);
    setSelectedCategory(category);
  }
  
  return { 
    dialogMode, 
    dialogOpen, 
    setDialogOpen,
    alertOpen, 
    setAlertOpen,
    selectedCategory,
    setSelectedCategory,
    openDailog, 
    openAlert
  }
}