import React from "react";
import { OrganizationHead } from "@/components/heads/organizationHead";
import Organization from "@/pages/organization/[id]";

export default function ManagerOrganization() {
  return(
    <div className="w-full p-1">
      <OrganizationHead />
      {/* <Organization base="manager" /> */}
    </div>
  )
}