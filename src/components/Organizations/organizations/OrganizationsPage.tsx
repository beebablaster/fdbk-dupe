import React from "react";
import { OrganizationsTable } from "./table/OrganizationsTable";
import Image from "next/image";
import { rootOrganizationsColumns } from "./table/columns";
import { useGetOrganizationsQuery } from "../api/useGetOrganizationsQuery.hook";
import { ShellLayout } from "@/components/Layout/ShellLayout";
import { CategoryTable } from "../category/table/CategoryTable";
import { categoryColumns } from "../category/table/columns";
import { useGetCategoriesQuery } from "./table/dialog/useGetCategoriesQuery.hook";
import { useLanguage } from '../../../locales/useLanguage';

export const OrganizationsPage = () => {
  const orgQuery = useGetOrganizationsQuery();
  const categoryQuery = useGetCategoriesQuery();
  const translate = useLanguage();
  
  return (
    <ShellLayout>
      <div className="w-full h-40 relative mb-2">
        <Image 
          fill 
          className="object-cover rounded-md" 
          src="/organizations/img1.jpg" 
          alt="Организации" 
          priority
        />
      </div>
      <h1 className="text-4xl mt-4">{translate("Organizations")}</h1>
      <OrganizationsTable query={orgQuery} columns={rootOrganizationsColumns} />
      <h1 className="text-4xl mt-16">{translate("Categories")}</h1>
      <CategoryTable query={categoryQuery} columns={categoryColumns} />
    </ShellLayout>
  )
}
