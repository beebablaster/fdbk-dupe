import React from "react";
import { QrGeneratePage } from "@/components/manager/Qr/QrGeneratePage";
import { QrHead } from "@/components/heads/qrHead";

export default function ManagerQrPage() {
  return (
    <>
      <QrHead />
      <QrGeneratePage />
    </>
  )
}
