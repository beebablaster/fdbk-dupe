import React from "react";
import { DashboardHead } from "@/components/heads/dashboardHead";
import {DashboardDemo} from "@/components/manager/Dashboard/DashboardDemo";

export default function DashboardMainPage() {
  return (
    <section className="px-1 w-full min-h-screen">
      <DashboardHead />
      <DashboardDemo />
    </section>
  )
}
