import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { authAPI } from "@/services/auth";
import { userAPI } from "@/services/users";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useAddReceiverMutation = (
  setError: (error: string) => void,
  onSuccess?: () => void,
) => {
  // TRANSLATE
  const { toast } = useToast();
  const translate = useLanguage();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["user", "addReceiver"],
    mutationFn: authAPI.createReceiver,
    onSuccess: () => {
      toast({
        title: translate('Teacher added'),
        variant: "success",
      });
      setError('');
      queryClient.invalidateQueries({
        queryKey: ["users"]
      });
      if (onSuccess) onSuccess();
    },
    onError: (error) => {
      setError(error.message);
    }
  });
  return { mutation };
}