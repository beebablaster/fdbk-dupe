import React from "react";
import { UserTable } from "./table/UsersTable";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { TUser } from "@/models/User";

export const UsersPage = () => {
  const columns: ColumnDef<TUser>[] = []

  return (
    <>
      <div className="w-full h-40 relative mb-2">
        <Image fill className="object-cover rounded-md" src="/organizations/img1.jpg" alt="Пользователи" />
      </div>
      <h1 className="text-4xl mb-4">Пользователи</h1>
      {/* <UserTable columns={columns} role= /> */}
    </>
  )
}
