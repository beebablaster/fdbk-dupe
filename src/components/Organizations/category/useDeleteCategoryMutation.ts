import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { orgAPI } from "@/services/organization";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useDeleteCategoryMutation = (onSuccess?: () => void) => {
  const translate = useLanguage();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const mutation = useMutation({
    mutationKey: ["organization", "category", "delete"],
    mutationFn: orgAPI.deleteCategory,
    onSuccess: () => {
      toast({
        title: translate('Category deleted'),
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["organization", "categories"]
      });

      if(onSuccess) onSuccess();
    },
    onError: (error) => {
      toast({
        title: translate(error.message),
        variant: "destructive",
      });
    }
  });
  return { mutation };
}