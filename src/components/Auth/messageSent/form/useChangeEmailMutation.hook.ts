import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { authAPI } from "@/services/auth";
import { Routes } from "@/components/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

export const useChangeEmailMutation = (setError: React.Dispatch<React.SetStateAction<string>>, closeDialog?: () => void) => {
  const translate = useLanguage();
  const { push } = useRouter();
  const { toast } = useToast();

  const mutation = useMutation({
    mutationKey: ["auth", "changeEmail"],
    mutationFn: authAPI.changeEmail,
    onSuccess: (_, variables) => {
      setError("");
      const mail = Buffer.from(variables.new_email).toString('base64');
      push({
        pathname: Routes.auth.messageSent,
        query: { email: mail }
      });

      toast({
        title: translate("Email changed"),
        description: translate("We have sent verification email to ") + variables.new_email,
        variant: "success",
      })

      if(closeDialog) closeDialog();
    },
    onError: (error) => {
      setError(error.message);
    }
  });

  return { mutation };
}
