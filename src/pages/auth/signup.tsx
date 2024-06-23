import React from "react";
import { AuthLayout } from "@/components/Layout/AuthLayout";
import { SignupForm } from "@/components/Auth/signup/SignupForm";
import { SignupHead } from "@/components/Auth/signup/SignupHead";
import { LanguageTabs } from "@/components/Auth/LanguageTabs";

export default function Signup() {
  return (
    <>
      <SignupHead />
      <AuthLayout image="registration">
        <div className="mt-auto" />
        <SignupForm />
        <div className="mb-4" />
        <div className="mt-auto flex items-center justify-center">
          <LanguageTabs />
        </div>
      </AuthLayout>
    </>
  )
}