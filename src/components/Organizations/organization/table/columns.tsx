import { DataTableColumnHeader } from "@/components/common/table/DataTableColumnHeader"
import { Routes } from "@/components/constants/routes"
import { TOrganization } from "@/models/Organization"
import { ColumnDef } from "@tanstack/react-table"
import Link from "next/link"

export const organizationColumns: ColumnDef<TOrganization>[] = [
  {
    accessorKey: "number",
    header: "№",
    cell: ({ row }) => { 
      return <div>{+row.id + 1}</div>
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Title" /> 
      )
    },
    cell: ({ row }) => { 
      return (
        <Link 
          className="hover:underline text-link" 
          href={`${Routes.org._organization}/${row.original.id}`}
        >
          {row.getValue("name")}
        </Link>
      )
    },
    enableHiding: false,
  },
  {
    id: "short name",
    accessorKey: "shortName",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Short Name" />
      )
    },
  },
  {
    id: "root",
    accessorKey: "root",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Base" />
      )
    },
    cell: ({ row }) => { 
      return (
        <Link 
          className="hover:underline text-link" 
          href={`${Routes.org._organization}/${row.original.root_id}`}
        >
            {row.original.root?.name}
        </Link>
      )
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Category" />
      )
    },
    cell: ({ row }) => { 
      return <span>{row.original.category.name}</span>
    },
  },
]