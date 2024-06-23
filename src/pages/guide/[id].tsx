import { NotFoundPage } from "@/components/Layout/404";
import { GuidePageComponent } from "../../components/GuidePage";
import { useRouter } from "next/router";
import { guides } from "@/mock/guides";
import React from "react";

export default function GuidePage() {
  const id = useRouter().query.id;
  if (typeof id !== "string") return <NotFoundPage />;

  const guide = guides.find((guide) => guide.id === parseInt(id));
  if (!guide) return <NotFoundPage />;

  return <GuidePageComponent guide={guide} />
}