import React from "react";
import { AuthLayout } from "@/components/Layout/AuthLayout";
import { LoginForm } from "@/components/Auth/login/LoginForm";
import { LoginHead } from "@/components/Auth/login/LoginHead";
import { LanguageTabs } from "@/components/Auth/LanguageTabs";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "@/components/error/Error.fallback";


export default function Login() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <LoginHead />
      <AuthLayout image="signin">
        <div className="mt-auto" />
        <LoginForm />
        <div className="mb-4" />
        <div className="mt-auto flex items-center justify-center">
          <LanguageTabs />
        </div>
      </AuthLayout>
    </ErrorBoundary>
  )
}