import React from "react";
import { OrganizationPage } from "@/components/Organizations/organization/OrganizationPage";
import { OrganizationHead } from "@/components/heads/organizationHead";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error/Error.fallback";

export default function Organization() {
  return(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <OrganizationHead />
      <OrganizationPage />
    </ErrorBoundary>
  )
}