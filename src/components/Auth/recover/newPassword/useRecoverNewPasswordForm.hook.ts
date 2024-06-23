import React from "react";
import { toast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useGetURLQuery } from "@/hooks/useGetURLQuery";
import { recoverNewPasswordSchema } from "./recoverNewPasswordSchema";
import { authFields } from "../../authFields";
import { useRecoverNewPasswordFormMutation } from "./useRecoverNewPasswordFormMutation.hook";

export const useRecoverNewPasswordForm = () => {
  const token = useGetURLQuery("token", { decode: true, base: 'base64' });
  const [error, setError] = React.useState("");
  const { mutation } = useRecoverNewPasswordFormMutation(setError);
  const status = mutation.status;
  
  const form = useForm<z.infer<typeof recoverNewPasswordSchema>>({
    resolver: zodResolver(recoverNewPasswordSchema),
    mode: 'onChange',
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  const fields = [
    { ...authFields.passwordNew }, 
    { ...authFields.confirm },
  ];
 
  const { password, confirm } = form.watch();

  React.useEffect(() => {
    setError("");
    if(password) form.trigger('password')
    if(confirm) form.trigger('confirm')
  }, [password, confirm, form])
 
  function onSubmit(values: z.infer<typeof recoverNewPasswordSchema>) {
    mutation.mutate({ 
      token, 
      password: values.password, 
      password_confirm: values.confirm 
    });
  }

  return { form, onSubmit, fields, error, status }
}