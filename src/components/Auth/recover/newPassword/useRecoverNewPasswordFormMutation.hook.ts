import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { authAPI } from "@/services/auth";
import { Routes } from "@/components/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useRecoverNewPasswordFormMutation = (setError: React.Dispatch<React.SetStateAction<string>>) => {
  const { toast } = useToast();
  const { push } = useRouter();
  const translate = useLanguage();

  const mutation = useMutation({
    mutationKey: ["auth", "resetPassword"],
    mutationFn: authAPI.resetPassword,
    onSuccess: () => {
      toast({
        title: translate('Password changed'),
        description: translate("Please, log back in"),
        variant: "success",
      })
      setError('');
      push(Routes.auth.login);
    },
    onError: (error) => {
      setError(error.message);
    }
  });

  return { mutation };
}