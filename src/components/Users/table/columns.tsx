import { DataTableColumnHeader } from "@/components/common/table/DataTableColumnHeader"
import { Routes } from "@/components/constants/routes"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useLanguage } from "@/locales/useLanguage"
import { TUser } from "@/models/User"
import { ColumnDef } from "@tanstack/react-table"
import { CopyIcon } from "lucide-react"
import Link from "next/link"

export const userColumns: ColumnDef<TUser>[] = [
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
    cell: ({ row }) => { 
      return (
        <Link 
          className="hover:underline text-link" 
          href={`${Routes.user._user}/${row.original.id}`}
        >
          {row.original.name} {row.original.surname}
        </Link>)
    },
    enableHiding: false,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Почта" />
      )
    },
    cell: ({ row }) => { 
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="hover:bg-secondary">
                {row.original.email}
                <CopyIcon size={14} className="ml-2" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Copy
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
  },
  {
    accessorKey: "Специальность",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Специальность" />
      )
    },
    cell: ({ row }) => { 
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" className="hover:bg-secondary">
                {row.original.organizations ? (
                  row.original.organizations[0].name
                ) : "Organization is not specified"}
                <CopyIcon size={14} className="ml-2" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              Copy
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )
    },
  },
  {
    id: "role",
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <DataTableColumnHeader column={column} title="Role" />
      )
    },
    cell: ({ row }) => {
      return <span>{row.original.role.name}</span>
    }
  },
]
