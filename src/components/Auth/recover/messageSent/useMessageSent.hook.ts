import React from "react";
import { useGetEmailFromURL } from "../../useGetEmailFromURL.hook";
import { useRecoverPasswordMutation } from "../useRecoverPasswordMutation.hook";

const WAIT_TIME = 120; // In seconds

export const useMessageSent = () => {
  const [error, setError] = React.useState('');
  const now = new Date();
  now.setSeconds(now.getSeconds() - 1);
  const [targetDate, setTargetDate] = React.useState(now);
  
  const startTimer = () => {
    setTargetDate(new Date(new Date().getTime() + WAIT_TIME * 1000));
  }

  const email = useGetEmailFromURL();

  const { mutation } = useRecoverPasswordMutation(setError, { action: 'resend', startTimer });
  const status = mutation.status;

  const handleResendEmail = () => {
    mutation.mutate({ email });
  }

  return { error, email, status, handleResendEmail, targetDate, startTimer };
}