import { useToast } from "@/hooks/useToast";
import { useLanguage } from "@/locales/useLanguage";
import { orgAPI } from "@/services/organization";
import { useQueryClient, useMutation } from "@tanstack/react-query";

export const useDeleteOrganizationMutation = (onSuccess?: () => void) => {
  const translate = useLanguage();
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const mutation = useMutation({
    mutationKey: ["organization", "delete"],
    mutationFn: orgAPI.deleteOrganization,
    onSuccess: () => {
      toast({
        title: translate('Organization deleted'),
        variant: "success",
      });
      queryClient.invalidateQueries({
        queryKey: ["organizations"]
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