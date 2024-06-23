import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useSignupMutation } from "./useSignupMutation.hook";
import { signupSchema } from "./signupSchema";
import { authFields } from "../authFields";

export const useSignupForm = () => {
  const [error, setError] = React.useState("");
  const { mutation } = useSignupMutation(setError);
  const status = mutation.status;

  const form = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
    mode: 'onChange',
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
    },
  });

  const fields = [
    { ...authFields.name },
    { ...authFields.email, placeholder: 'a_zhetpisbaev@kbtu.kz' },
    { ...authFields.passwordNew },
    { ...authFields.confirm }
  ]
 
  const { email, password, confirm } = form.watch();

  React.useEffect(() => {
    setError("");
    if(password) form.trigger('password')
    if(confirm) form.trigger('confirm')
  }, [email, password, confirm, form])
 
  function onSubmit(values: z.infer<typeof signupSchema>) {
    if(form.formState.isValid && !error) {
      const [name, surname] = values.name.split(" ");
      mutation.mutate({
        role_id: 1,
        name: name,
        surname: surname,
        password: values.password,
        password_confirm: values.confirm,
        email: values.email,
        organizations: [],
      });
    }
  }

  return { form, fields, onSubmit, error, status }
}