import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { orgAPI } from "@/services/organization";
import { useMutation } from "@tanstack/react-query";

export const useEditCategoryMutation = (
  setError: React.Dispatch<React.SetStateAction<string>>,
  onSuccess?: () => void
) => {
  const { toast } = useToast();
  const translate = useLanguage();
  const mutation = useMutation({
    mutationKey: ["organization", "category", "edit"],
    mutationFn: orgAPI.editCategory,
    onSuccess: () => {
      toast({
        title: translate('Category edited'),
        variant: "success",
      });
      setError('');
      if(onSuccess) onSuccess();
    },
    onError: (error) => {
      setError(error.message);
    }
  });
  return { mutation };
}