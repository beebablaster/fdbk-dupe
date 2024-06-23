import React from "react";
import { StatusEnum } from "@/models/Status";
import { SkeletonTable } from "./SkeletonTable";
import { useLanguage } from "@/locales/useLanguage";
import { Input } from "../../ui/input";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../../ui/button";
import { PlusIcon, RefreshCwIcon, Settings2Icon } from "lucide-react";
import { DataTableContent } from "./DataTableContent";
import { DataTableProps } from "./types";
import { useDataTable } from "./useDataTable.hook";


export function DataTable<TData, TValue> (props: DataTableProps<TData, TValue>) {
  const translate = useLanguage();
  const { columns, data, state, canAdd, canSearch, canRefresh } = props;
  const { table, globalFilter, setGlobalFilter } = useDataTable(data, columns);

  return (
    <div>
      <div className="flex items-center flex-wrap py-4 gap-2">
        {canAdd && (
          <Button onClick={props.onAdd} size="icon" variant="outlineAccent">
            <PlusIcon size={18} />
          </Button>
        )}
        {canRefresh && (
          <Button onClick={props.onRefresh} size="icon" variant="outlineAccent">
            <RefreshCwIcon size={14} className={props.isRefreshing ? "animate-spin" : ""} />
          </Button>
        )}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outlineAccent" className="text-base ml-auto capitalize xs:order-1">
              <Settings2Icon size={16} />
              {translate("columns")}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {translate(column.id)}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
        {canSearch && (
          <Input
            placeholder="Search"
            value={globalFilter}
            onChange={(e) => setGlobalFilter(e.target.value)}
            className="w-full xs:w-1/2"
          />
        )}
      </div>
      <div className="rounded-md border">
        {state === StatusEnum.PENDING ? (
          <SkeletonTable />
        ) : (
          <DataTableContent table={table} state={state} columns={columns} />
        )}
      </div>
    </div>
  )
}
