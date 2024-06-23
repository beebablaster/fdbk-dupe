import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRecoverPasswordMutation } from "../useRecoverPasswordMutation.hook";
import { recoverPasswordSchema } from "./recoverPasswordSchema";
import { authFields } from "../../authFields";
import { useGetEmailFromURL } from "../../useGetEmailFromURL.hook";

export const useRecoverPasswordForm  = () => {
  const emailFromURL = useGetEmailFromURL() || "";
  const [error, setError] = React.useState("");
  const { mutation } = useRecoverPasswordMutation(setError);
  const status = mutation.status;

  const form = useForm<z.infer<typeof recoverPasswordSchema>>({
    resolver: zodResolver(recoverPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      email: emailFromURL,
    },
  });

  const fields = [
    { ...authFields.email, autoFocus: true },
  ]

  const { email } = form.watch();

  React.useEffect(() => {
    setError("");
  }, [email]);

  React.useEffect(() => {
    if(emailFromURL && form.getFieldState('email').isTouched === false) {
      form.setValue('email', emailFromURL, { shouldValidate: true, shouldTouch: true });
    } 
  }, [email, emailFromURL, form]);
 
  function onSubmit(values: z.infer<typeof recoverPasswordSchema>) {
    mutation.mutate(values);
  }

  return { form, status, onSubmit, fields, error }
}