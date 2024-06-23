import React from "react";
import { HomeHead } from "@/components/heads/HomeHead";
import { HomePage } from "@/components/Home/HomePage";
import { ShellLayout } from "@/components/Layout/ShellLayout";

export default function Home() {
  return (
    <ShellLayout>
      <HomeHead />
      <HomePage />
    </ShellLayout>
  )
}
