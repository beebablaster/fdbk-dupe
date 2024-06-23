import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { authAPI } from "@/services/auth";
import { useMutation } from "@tanstack/react-query";

export const useResendVerificationMutation = (setError: React.Dispatch<React.SetStateAction<string>>, startTimer: () => void) => {
  const { toast } = useToast();
  const translate = useLanguage();

  const mutation = useMutation({
    mutationKey: ["auth", "resendVerification"],
    mutationFn: authAPI.resendVerificationCode,
    onSuccess: (_, variables) => {
      toast({
        title: translate('Email sent'),
        description: translate("We have sent verification email to ") + variables.email,
        variant: "success",
      })
      setError('');
      startTimer();
    },
    onError: (error) => {
      setError(error.message);
    }
  });

  return { mutation };
}
