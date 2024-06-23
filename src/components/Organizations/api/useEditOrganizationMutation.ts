import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { orgAPI } from "@/services/organization";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useEditOrganizationMutation = (
  setError:  React.Dispatch<React.SetStateAction<string>>,
  onSuccess?: () => void,
) => {
  const { toast } = useToast();
  const translate = useLanguage();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["organization", "edit"],
    mutationFn: orgAPI.editOrganization,
    onSuccess: () => {
      toast({
        title: translate('Organization updated'),
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