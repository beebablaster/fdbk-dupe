import React from "react";
import { OrganizationsTable } from "../organizations/table/OrganizationsTable";
import { useRouter } from "next/router";
import { Separator } from "@/components/ui/separator";
import { Breadcrumb, IBreadcrumb } from "@/components/common/Breadcrumb";
import { useAuth } from "@/hooks/useAuth";
import { makeBreadcrumb } from "./makeBreadcrumb.util";
import { useGetOrganizationQuery } from "../api/useGetOrganizationQuery.hook";
import { useGetSubOrganizationsQuery } from "../api/useGetSubOrganizationsQuery.hook";
import { organizationColumns } from "./table/columns";
import { ShellLayout } from "@/components/Layout/ShellLayout";
import { Routes } from "@/components/constants/routes";
import { OrganizationPageSkeleton } from "./OrganizationPageSkeleton";
import { Skeleton } from "@/components/ui/skeleton";
import { ImageLoader } from "@/components/common/ImageLoader";
import { UserTable } from "@/components/Users/table/UsersTable";
import { userColumns } from "@/components/Users/table/columns";
import { useGetUsersQuery } from "@/components/Users/api/useGetUsersQuery.hook";

export const OrganizationPage: React.FC = () => {
  useAuth({ requireAuth: ["admin", "manager"], userId: '' });
  const router = useRouter();
  const id = router.query.id! as string;

  const { data } = useGetOrganizationQuery(id!);
  const organization = data?.data;

  const subOrganizationsQuery = useGetSubOrganizationsQuery(id!);
  const queryProps = { organization_id: id! };
  const getUsersQuery = useGetUsersQuery(queryProps, !!id);
  
  if(!organization) return <OrganizationPageSkeleton />;

  let breadcrumbs: IBreadcrumb[] = [
    {
      link: Routes.org.organizations,
      title: "Организации",
    },
  ]
  
  makeBreadcrumb(organization!, breadcrumbs);
  
  
  return (
    <ShellLayout>
      <div className="w-full h-40 relative">
        <ImageLoader 
          src={
            `/organizations/${organization?.photo ?? "img2.jpg"}`
          } 
          fallback={
            <Skeleton className="w-full h-full rounded-md" />
          }
          alt={organization.shortName} 
          priority
        />
      </div>
      <div className="mt-2 mb-4">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <h1 className="text-4xl mb-4">{organization?.name}</h1>
      <span className="text-lg mb-1 mr-2">
        @{organization?.shortName}, {organization?.category.name}
      </span>
      {/* <Rating rating={organization?.rating!} showNumber readonly /> */}

      <Separator className="mt-4" />

      <h1 className="text-2xl mt-4">Суборганизации</h1>
      <OrganizationsTable 
        query={subOrganizationsQuery} 
        columns={organizationColumns} 
        parentOrgId={id} 
      />
      <h1 className="text-2xl mt-8">Пользователи</h1>
      <UserTable 
        props={queryProps}
        columns={userColumns} 
        query={getUsersQuery} 
      /> 
      {/* <h1 className="text-2xl mb-4 mt-8">Учителя</h1>
      <UserTable role={roles.receiver} org={organization?.ID} /> */}
    </ShellLayout>
  )
}
