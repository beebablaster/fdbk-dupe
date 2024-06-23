import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { userAPI } from "@/services/users";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useDeleteUserMutation = (
  setError: (error: string) => void,
  onSuccess?: () => void,
) => {
  // TRANSLATE
  const { toast } = useToast();
  const translate = useLanguage();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["user", "delete"],
    mutationFn: userAPI.deleteUser,
    onSuccess: () => {
      toast({
        title: translate('User deleted'),
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