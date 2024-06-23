import { DataTableColumnHeader } from "@/components/common/table/DataTableColumnHeader"
import { TCategory } from "@/models/Organization"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

export const categoryColumns: ColumnDef<TCategory>[] = [
  {
    accessorKey: "number",
    header: "№",
    cell: ({ row }) => { 
      return <div>{row.index + 1}</div>
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Title" /> 
      )
    },
    enableHiding: false,
  },
  {
    id: "field",
    accessorKey: "field",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Sphere" />
      )
    },
  },
]
