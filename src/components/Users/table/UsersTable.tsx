import React from "react";
import { DataTable } from "@/components/common/table/DataTable";
import { ColumnDef } from "@tanstack/react-table";
import { TGetUsersProps, TGetUsersResponse, TRole, TUser } from "@/models/User";
import AlertDialog from "@/components/common/AlertDialog";
import { UseQueryResult, useQueryClient } from "@tanstack/react-query";
import { useUsersTableColumns } from "./useUsersTableColumns.hook";
import { UsersTableDialog } from "./dialog/UsersTableDialog";
import { useDeleteUserMutation } from "../api/useDeleteUserMutation.hook";
import { useUsersTableStore } from "./useUsersTableStore.hook";
import { generatePassword } from "@/utils/generatePassword";

interface IProps {
  props: TGetUsersProps;
  columns: ColumnDef<TUser>[];
  query: UseQueryResult<TGetUsersResponse, Error>;
  role?: TRole["name"];
}

export const UserTable: React.FC<IProps> = ({ props, columns, query, role }) => {
  const queryClient = useQueryClient();
  const { 
    setError,
    selectedUser, 
    alertOpen,
    setAlertOpen,
    openAlert,
    openDailog,
    setPassword,
    setPasswordConfirm,
  } = useUsersTableStore();

  const allColumns = useUsersTableColumns(columns, openDailog, openAlert);

  const { data: users, status, isRefetching } = query;

  const { mutation: deleteMutation } = useDeleteUserMutation(setError, () => setAlertOpen(false));
  return (
    <>
      <DataTable  
        columns={allColumns} 
        data={users?.data!} 
        state={status} 
        canSearch
        canAdd
        onAdd={() => {
          const pass = generatePassword(12);
          setPassword(pass);
          setPasswordConfirm(pass);
          openDailog({} as TUser, "add");
        }}
        canRefresh
        isRefreshing={isRefetching}
        onRefresh={() => {
          queryClient.invalidateQueries({
            queryKey: ["users", props]
          })
        }}
      />

      <UsersTableDialog parentOrgId={props.organization_id} />

      <AlertDialog 
        isOpen={alertOpen} 
        onOpenChange={setAlertOpen} 
        action={() => deleteMutation.mutate(selectedUser?.id!)} 
        title="Удалить администратора?" 
        description="Это действие удалит этого администратора"
      />
    </>
  )
}
