import React from "react";
import { DataTable } from "@/components/common/table/DataTable";
import { TCategoriesResponse, TCategory, TOrganization, TOrganizationsResponse } from "@/models/Organization";
import { ColumnDef } from "@tanstack/react-table";
import AlertDialog from "@/components/common/AlertDialog";
import { UseQueryResult, useQueryClient } from "@tanstack/react-query";
import { useCategoryTableState } from "./useCategoryTableState.hook";
import { useCategoryTableColumns } from "./useCategoryTableColumns.hook";
import { CategoryTableDialog } from "./dialog/CategoryTableDialog";
import { useDeleteCategoryMutation } from "@/components/Organizations/category/useDeleteCategoryMutation";
import { useLanguage } from '../../../../locales/useLanguage';

interface IProps {
  columns: ColumnDef<TCategory>[];
  query: UseQueryResult<TCategoriesResponse, Error>;
}

export const CategoryTable: React.FC<IProps> = ({ columns, query }) => {
  const queryClient = useQueryClient();
  const translate = useLanguage()

  const { 
    dialogOpen, 
    setDialogOpen,
    dialogMode, 
    selectedCategory, 
    setSelectedCategory,
    alertOpen,
    setAlertOpen,
    openAlert,
    openDailog,
  } = useCategoryTableState();
  const allColumns = useCategoryTableColumns(columns, openDailog, openAlert);

  const { data: categories, status, isRefetching } = query;

  const { mutation: deleteMutation } = useDeleteCategoryMutation()

  return (
    <>
      <DataTable 
        columns={allColumns} 
        data={categories?.data?.generalCategories || []} 
        state={status} 
        canSearch
        canAdd
        onAdd={() => openDailog({} as TCategory, "add")}
        canRefresh
        isRefreshing={isRefetching}
        onRefresh={() => {
          queryClient.invalidateQueries({
            queryKey: ["organization", "categories"]
          })
        }}
      />
      <CategoryTableDialog
        dialogMode={dialogMode}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedCategory={selectedCategory!}
        setSelectedCategory={setSelectedCategory}
      />
      <AlertDialog 
        isOpen={alertOpen}
        onOpenChange={setAlertOpen}
        action={() => deleteMutation.mutate(selectedCategory?.ID!)}
        title={translate("Delete an organization") + "?"}
        description=<>
        {translate("This action will delete this organization and ")} <span className="underline">{translate("all its sub-organizations")}</span>
        </>
      />
    </>
  )
}
