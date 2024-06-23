import React from "react";
import { OrganizationHead } from "@/components/heads/organizationHead";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error/Error.fallback";
import { OrganizationDemo } from "../../components/Organizations/organizationDemo";

export default function Organizations() {
  return(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <OrganizationHead />
      <OrganizationDemo />
    </ErrorBoundary>
  )
}