import { Routes } from "@/components/constants/routes";
import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { useRouter } from "next/router";
import React from "react";
import { useGetEmailFromURL } from "../useGetEmailFromURL.hook";
import { useResendVerificationMutation } from "./useResendVerificationMutation.hook";
import { useWinReady } from "@/hooks/useWinReady";

const WAIT_TIME = 120; // In seconds

export const useMessageSent = () => {
  const translate = useLanguage();
  const { push } = useRouter();
  const { toast } = useToast();
  const [error, setError] = React.useState("");
  const email = useGetEmailFromURL();

  const now = new Date();
  now.setSeconds(now.getSeconds() - 1);
  const [targetDate, setTargetDate] = React.useState(now);
  const startTimer = () => {
    setTargetDate(new Date(new Date().getTime() + WAIT_TIME * 1000));
  };

  React.useEffect(() => {
    startTimer();
  }, []);

  const { winReady } = useWinReady();
  React.useEffect(() => {
    if (winReady && !email) {
      push(Routes.auth.login);
      toast({
        title: translate("Email not found"),
        description: translate("You will be redirected to the login page"),
        variant: "destructive",
      });
    }
  }, [email, push, toast, translate]);

  const { mutation } = useResendVerificationMutation(setError, startTimer);
  const status = mutation.status;

  const handleResendEmail = () => {
    mutation.mutate({ email });
  };

  return { error, email, status, handleResendEmail, targetDate };
};
