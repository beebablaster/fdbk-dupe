import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { orgAPI } from "@/services/organization";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddCategoryMutation = (
  setError: React.Dispatch<React.SetStateAction<string>>,
  onSuccess?: () => void
) => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const translate = useLanguage();
  const mutation = useMutation({
    mutationKey: ["organization", "category", "add"],
    mutationFn: orgAPI.addCategory,
    onSuccess: () => {
      toast({
        title: translate('Category added'),
        variant: "success",
      });
      setError('');

      queryClient.invalidateQueries({
        queryKey: ["organization", "categories"]
      });

      if(onSuccess) onSuccess();
    },
    onError: (error) => {
      setError(error.message);
    }
  });
  return { mutation };
}