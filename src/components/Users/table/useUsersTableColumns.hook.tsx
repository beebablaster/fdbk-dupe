import { ColumnDef } from "@tanstack/react-table"
import { PencilIcon, Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { TUser } from "@/models/User"
import { TableDialogMode } from "@/models/Table"

export const useUsersTableColumns = (
  columns: ColumnDef<TUser>[],
  openDailog: (user: TUser, mode: TableDialogMode) => void,
  openAlert: (user: TUser) => void,
): ColumnDef<TUser>[] => {
  const allColumns: ColumnDef<TUser>[] = [
    ...columns,
    {
      accessorKey: "actions",
      header: "Действия",
      cell: ({ row }) => {
        return (
          <div className="flex justify-around gap-2">
            <Button onClick={() => openDailog(row.original, "edit")} variant="ghost" size="icon" className="py-0 hover:bg-secondary">
                <PencilIcon size={16} />
            </Button>
            <Button onClick={() => openAlert(row.original)} variant="ghost" size="icon" className="py-0 hover:bg-destructive hover:text-destructive-foreground">
              <Trash2Icon size={16} />
            </Button>
          </div>
        )
      },
      enableHiding: false,
    }
  ]

  return allColumns
}