import React from "react";
import { DataTable } from "@/components/common/table/DataTable";
import { TOrganization, TOrganizationsResponse } from "@/models/Organization";
import { ColumnDef } from "@tanstack/react-table";
import AlertDialog from "@/components/common/AlertDialog";
import { UseQueryResult, useQueryClient } from "@tanstack/react-query";
import { useOrganizationsTableColumns } from "./useOrganizationsTableColumns.hook";
import { useOrganizationsTableState } from "./useOrganizationsTableState.hook";
import { OrganizationsTableDialog } from "./dialog/OrganizationsTableDialog";
import { useDeleteOrganizationMutation } from "@/components/Organizations/api/useDeleteOrganizationMutation";
import { useLanguage } from '@/locales/useLanguage';

interface IProps {
  parentOrgId?: TOrganization["id"];
  columns: ColumnDef<TOrganization>[];
  query: UseQueryResult<TOrganizationsResponse, Error>;
}

export const OrganizationsTable: React.FC<IProps> = ({ columns, parentOrgId, query }) => {
  const queryClient = useQueryClient();
  const translate = useLanguage();
  
  const { 
    dialogOpen, 
    setDialogOpen,
    dialogMode, 
    selectedOrganization, 
    setSelectedOrganization,
    alertOpen,
    setAlertOpen,
    openAlert,
    openDailog,
  } = useOrganizationsTableState();
  const allColumns = useOrganizationsTableColumns(columns, openDailog, openAlert);

  const { data: organizations, status, isRefetching } = query;

  const { mutation: deleteMutation } = useDeleteOrganizationMutation()

  return (
    <>
      <DataTable 
        columns={allColumns} 
        data={organizations?.data! || []} 
        state={status} 
        canSearch
        canAdd
        onAdd={() => openDailog({} as TOrganization, "add")}
        canRefresh
        isRefreshing={isRefetching}
        onRefresh={() => {
          queryClient.invalidateQueries({
            queryKey: parentOrgId ? ["organization", parentOrgId] : ["organizations"]
          })
          queryClient.invalidateQueries({
            queryKey: ["organization", "categories"]
          });
        }}
      />
      <OrganizationsTableDialog
        dialogMode={dialogMode}
        dialogOpen={dialogOpen}
        setDialogOpen={setDialogOpen}
        selectedOrganization={selectedOrganization!}
        setSelectedOrganization={setSelectedOrganization}
        parentOrgId={parentOrgId}
      />
      <AlertDialog 
        isOpen={alertOpen}
        onOpenChange={setAlertOpen}
        action={() => deleteMutation.mutate(selectedOrganization?.id!)}
        title={translate("Delete an organization") + "?"}
        description=<>
          {translate("This action will delete this organization and ")} <span className="underline">{translate("all its sub-organizations")}</span>
        </>
      />
    </>
  )
}
