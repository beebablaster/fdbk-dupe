import React from "react";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from 'react-hook-form';
import { useLanguage } from "@/locales/useLanguage";
import { useGetEmailFromURL } from "../../useGetEmailFromURL.hook";
import { useChangeEmailMutation } from "./useChangeEmailMutation.hook";
import { changeEmailSchema } from "./changeEmailSchema";
import { authFields } from "../../authFields";

export const useChangeEmailForm = (closeDialog?: () => void) => {
  const [error, setError] = React.useState("");
  const mailFromURL = useGetEmailFromURL();
  const { mutation } = useChangeEmailMutation(setError, closeDialog);
  const status = mutation.status;
  
  const form = useForm<z.infer<typeof changeEmailSchema>>({
    resolver: zodResolver(changeEmailSchema),
    mode: 'onChange',
    defaultValues: {
      oldEmail: mailFromURL,
      newEmail: "",
    },
  });

  const fields = [
    { ...authFields.oldEmail, disabled: true },
    { ...authFields.newEmail, autoFocus: true },
    { ...authFields.password },
  ]

  const { password } = form.watch();

  React.useEffect(() => {
    setError("");
  }, [password]);

  function onSubmit(values: z.infer<typeof changeEmailSchema>) {
    if(form.formState.isValid && !error) {
      mutation.mutate({
        old_email: values.oldEmail,
        new_email: values.newEmail,
        password: values.password,
      });
    }
  }

  return { form, status, onSubmit, fields, error };
}