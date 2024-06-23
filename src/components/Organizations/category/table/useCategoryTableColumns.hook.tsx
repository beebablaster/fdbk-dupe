import { TCategory, TOrganization } from "@/models/Organization"
import { ColumnDef } from "@tanstack/react-table"
import { PencilIcon, Trash2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

export const useCategoryTableColumns = (
  columns: ColumnDef<TCategory>[],
  openDailog: (organization: TCategory) => void,
  openAlert: (organization: TCategory) => void,
): ColumnDef<TCategory>[] => {
  const allColumns: ColumnDef<TCategory>[] = [
    ...columns,
    {
      accessorKey: "actions",
      header: "Действия",
      cell: ({ row }) => {
        return (
          <div className="flex justify-around gap-2">
            <Button onClick={() => openDailog(row.original)} variant="ghost" size="icon" className="py-0 hover:bg-secondary">
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