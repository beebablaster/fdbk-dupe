import React from 'react'
import { useToast } from "@/hooks/useToast";
import { useRouter } from "next/router";
import { StatusEnum } from "@/models/Status";
import { Routes } from "@/components/constants/routes";
import { useVerifyQuery } from "@/components/Auth/verify/useVerifyQuery.hook";
import { useLanguage } from "@/locales/useLanguage";
import { useDecode } from '@/hooks/useDecode';
import Cookies from 'universal-cookie';

export const useVerify = () => {
  const translate = useLanguage();
  const { push, query } = useRouter();
  const encodedCode = query.code as string;
  const code = useDecode(encodedCode);
  const { data: response, status, error } = useVerifyQuery(code);
  const { toast } = useToast();
  
  React.useEffect(() => {
    if(status === StatusEnum.ERROR) {
      toast({
        variant: "destructive",
        title: translate(error?.message),
        description: translate("You will be redirected to the authorization page"),
        onDismiss: () => push(Routes.auth.login),
      })
    } else if(status === StatusEnum.SUCCESS) {
      toast({
        variant: "success",
        title: translate("Registration has been completed successfully") + "!", 
      })

      const data = response?.data;
      const cookie = new Cookies();
      cookie.set("access_token", data?.access_token, { maxAge: data?.access_token_age, path: "/" });
      cookie.set("refresh_token", data?.refresh_token, { maxAge: data?.refresh_token_age, path: "/" });
      
      push(Routes.base)
    }
  }, [status, push, translate, code, toast, error?.message, response?.data]);

  return { status, error }
}

