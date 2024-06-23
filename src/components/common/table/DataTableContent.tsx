import { Table as TableWrapper, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { useLanguage } from '@/locales/useLanguage';
import { Status, StatusEnum } from '@/models/Status';
import { ColumnDef, Table, flexRender } from '@tanstack/react-table';
import React from 'react'

type Props<TData, TValue> = {
  table: Table<TData>;
  state: Status;
  columns: ColumnDef<TData, TValue>[];
}

export function DataTableContent<TData, TValue>({ table, state, columns }: Props<TData, TValue>) {
  const translate = useLanguage();
  return (
    <TableWrapper>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              return (
                <TableHead key={header.id} className="text-center">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                </TableHead>
              )
            })}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {state === StatusEnum.SUCCESS && table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
              className="text-center"
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-40 text-center">
              {translate("No results")}
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </TableWrapper>
  )
}

