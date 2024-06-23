import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { authAPI } from "@/services/auth";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useAddManagerMutation = (
  setError: (error: string) => void,
  onSuccess?: () => void,
) => {
  // TRANSLATE
  const { toast } = useToast();
  const translate = useLanguage();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["user", "createManager"],
    mutationFn: authAPI.createManager,
    onSuccess: () => {
      toast({
        title: translate('Manager added'),
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