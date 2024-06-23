import React from "react";
import { VerifyPage } from "@/components/Auth/verify/VerifyPage";
import { VerifyHead } from "@/components/Auth/verify/VerifyHead";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error/Error.fallback";

export default function Verify() {
  return(
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <VerifyHead />
        <VerifyPage />
      </ErrorBoundary>
  )
}