import React from "react";
import { AuthLayout } from "@/components/Layout/AuthLayout";
import {  StepperProvider } from "@/components/Stepper/StepperProvider";
import { RecoverStepper } from "./RecoverStepper";
import { RecoverEmailForm } from "./password/RecoverPasswordForm";
import { ISteps } from "@/context/StepperContext";
import { RecoverNewPassForm } from "./newPassword/RecoverNewPasswordForm";
import { MessageSentStep } from "./messageSent/MessageSentStep";
import { MailCirle } from "../MailCirle";
import { LockCircle } from "./newPassword/LockCircle";
import { useRouter } from "next/router";
import { useGetEmailFromURL } from "../useGetEmailFromURL.hook";
import { useGetURLQuery } from "@/hooks/useGetURLQuery";
import { LanguageTabs } from "../LanguageTabs";

export const RecoverPage = () => {  
  const { push } = useRouter();
  const email = useGetEmailFromURL();
  const token = useGetURLQuery('token', { decode: true, base: "base64" });
  const steps: ISteps[] = [
    {
      component: <RecoverEmailForm />,
      title: "Введите эл. почту",
      progressBarCircle: <MailCirle size="sm" />
    },
    {
      component: <MessageSentStep />,
      title: "Подтвердите код",
      progressBarCircle: <MailCirle size="sm" isOpen />,
      onMount: () => {
        if (!email) push({ });
      }
    },
    {
      component: <RecoverNewPassForm />,
      title: "Придумайте новый пароль",
      progressBarCircle: <LockCircle size="sm" />,
      onMount: () => {
        if (!token) push({ });
      }
    },
  ];
  return (
    <AuthLayout image="recover">
      <div className="mt-auto" />
      <StepperProvider steps={steps}>
        <RecoverStepper />
      </StepperProvider>
      <div className="mb-4" />
      <div className="mt-auto flex items-center justify-center">
        <LanguageTabs />
      </div>
    </AuthLayout>
  )
}