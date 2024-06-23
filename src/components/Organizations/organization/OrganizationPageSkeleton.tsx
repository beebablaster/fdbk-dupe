import { ShellLayout } from '@/components/Layout/ShellLayout'
import { Separator } from '@radix-ui/react-dropdown-menu'
import React from 'react'
import { SkeletonTable } from '@/components/common/table/SkeletonTable'
import { Skeleton } from '@/components/ui/skeleton'

export const OrganizationPageSkeleton = () => {
  return (
    <ShellLayout>
      <Skeleton className="w-full h-40 rounded-md" />
      <div className="mt-2 mb-4">
        <Skeleton className="w-28 h-3 rounded-md inline-block" />
        /
        <Skeleton className="w-28 h-3 rounded-md inline-block" />
        /
        <Skeleton className="w-28 h-3 rounded-md inline-block" />
      </div>
      <Skeleton className="w-2/5 h-10 my-2 rounded-md" />
      <span className="text-lg mb-1 mr-2">
        <Skeleton className="w-28 h-3 rounded-md inline-block" />
        ,
        <Skeleton className="w-28 h-3 rounded-md inline-block" />
      </span>
      {/* <Rating rating={organization?.rating!} showNumber readonly /> */}

      <Separator className="mt-4" />

      <h1 className="text-2xl mt-4">Суборганизации</h1>
      <div className="rounded-md border">
        <SkeletonTable />
      </div>
      {/* <h1 className="text-2xl mb-4 mt-8">Менеджеры</h1>
      <UserTable role={roles.manager} org={organization?.ID} />
      <h1 className="text-2xl mb-4 mt-8">Учителя</h1>
      <UserTable role={roles.receiver} org={organization?.ID} /> */}
    </ShellLayout>
  )
}
