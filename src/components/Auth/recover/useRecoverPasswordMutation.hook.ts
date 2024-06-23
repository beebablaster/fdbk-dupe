import { useStepperContext } from "@/components/Stepper/StepperProvider";
import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { authAPI } from "@/services/auth";
import { Routes } from "@/components/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface IRecoverPasswordSendProps {
  action: 'send'
}

interface IRecoverPasswordResendProps {
  action: 'resend',
  startTimer: () => void,
}

type TRecoverPasswordOptions = IRecoverPasswordSendProps | IRecoverPasswordResendProps;

export const useRecoverPasswordMutation = (
  setError: React.Dispatch<React.SetStateAction<string>>, 
  options: TRecoverPasswordOptions = { action: 'send' }
) => {
  const { push } = useRouter();
  const { nextStep } = useStepperContext();
  const { toast } = useToast();
  const translate = useLanguage();

  const mutation = useMutation({
    mutationKey: ["auth", "forgotPassword"],
    mutationFn: authAPI.forgotPassword,
    onSuccess: (_, variables) => {
      if(options.action === 'send') {
        const email = Buffer.from(variables.email).toString('base64');
        nextStep({ email });
      } else {
        options.startTimer();
      }

      toast({
        title: translate("Email sent"),
        description: translate("We have sent recovery email to ") + variables.email,
        variant: "success",
      });
    },
    onError: (error, variables) => {
      if(error.message === "account not verified") {
        const mail = Buffer.from(variables.email).toString('base64');
        push({
          pathname: Routes.auth.messageSent,
          query: { email: mail }
        });
      }
      setError(error.message);
    }
  });

  return { mutation };
}
