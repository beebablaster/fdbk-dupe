import { authAPI } from "@/services/auth";
import { Routes } from "@/components/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/router";

export const useSignupMutation = (setError: React.Dispatch<React.SetStateAction<string>>) => {
  const { push } = useRouter();
  const mutation = useMutation({
    mutationKey: ["auth", "register"],
    mutationFn: authAPI.register,
    onSuccess: (_, variables) => {
      const mail = Buffer.from(variables.email).toString('base64');
      push({
        pathname: Routes.auth.messageSent,
        query: { email: mail }
      });
    },
    onError: (error: AxiosError) => {
      setError(error.message);
    }
  });

  return { mutation };
}