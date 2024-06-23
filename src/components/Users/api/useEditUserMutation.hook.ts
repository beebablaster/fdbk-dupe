import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { userAPI } from "@/services/users";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useEditUserMutation = (
  setError: (error: string) => void,
  onSuccess?: () => void,
) => {
  // TRANSLATE
  const { toast } = useToast();
  const translate = useLanguage();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["user", "edit"],
    mutationFn: userAPI.editUser,
    onSuccess: () => {
      toast({
        title: translate('User updated'),
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