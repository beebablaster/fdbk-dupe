import React from 'react'
import { TableHeader, TableRow, TableHead, TableBody, TableCell, Table } from '../../ui/table'
import { Skeleton } from '../../ui/skeleton'

type Props = {
  rows?: number;
}

const PLACEHOLDER_VALUE = 0;

export const SkeletonTable: React.FC<Props> = ({ rows = 4 }) => {
  const placeholder = new Array(rows).fill(PLACEHOLDER_VALUE);
  return (
    <Table>
      <TableHeader>
        <TableRow >
          <TableHead className="text-center flex justify-between items-center">
            <Skeleton className='w-6 h-2' />
            <Skeleton className='w-4/12 h-2' />
            <Skeleton className='w-2/12 h-2' />
            <Skeleton className='w-2/12 h-2' />
            <Skeleton className='w-2/12 h-2' />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {placeholder.map((_, index) => (
          <TableRow key={index} className="text-center">
            <TableCell className='flex items-center justify-between'>
            <Skeleton className='w-6 h-2' />
            <Skeleton className='w-4/12 h-2' />
            <Skeleton className='w-2/12 h-2' />
            <Skeleton className='w-2/12 h-2' />
            <Skeleton className='w-2/12 h-2' />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
