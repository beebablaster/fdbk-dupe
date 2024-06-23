import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error/Error.fallback";
import { MessageSentPage } from "@/components/Auth/messageSent/MessageSentPage";
import { MessageSentHead } from "@/components/Auth/messageSent/MessageSentHead";
import { AuthLayout } from "@/components/Layout/AuthLayout";
import { LanguageTabs } from "@/components/Auth/LanguageTabs";

export default function MessageSent() {
  return(
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <MessageSentHead />
      <AuthLayout image="messageSent">
        <div className="mt-auto" />
        <MessageSentPage />
        <div className="mb-4" />
        <div className="mt-auto flex items-center justify-center">
          <LanguageTabs />
        </div>
      </AuthLayout>
    </ErrorBoundary>
  )
}