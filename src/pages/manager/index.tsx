import React from "react";
import { OrganizationHead } from "@/components/heads/organizationHead";

export default function ManagerMain() {
  return(
    <div className="w-full p-1">
      <OrganizationHead />
      {/* <OrganizationPage fromUser={true} base="manager" /> */}
    </div>
  )
}