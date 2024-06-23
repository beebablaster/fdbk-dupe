import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { orgAPI } from "@/services/organization";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddOrganizationMutation = (
  setError: (error: string) => void,
  onSuccess?: () => void,
) => {
  const translate = useLanguage();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const mutation = useMutation({
    mutationKey: ["organization", "add"],
    mutationFn: orgAPI.addOrganization,
    onSuccess: () => {
      toast({
        title: translate('Organization added'),
        variant: "success",
      });
      setError('');
      queryClient.invalidateQueries({
        queryKey: ["organizations"]
      });

      if(onSuccess) onSuccess();
    },
    onError: (error) => {
      setError(error.message);
    }
  });
  return { mutation };
}