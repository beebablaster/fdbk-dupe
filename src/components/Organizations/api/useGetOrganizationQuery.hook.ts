import { TOrganization } from "@/models/Organization";
import { orgAPI } from "@/services/organization";
import { useQuery } from "@tanstack/react-query";

export const useGetOrganizationQuery = (id?: TOrganization["id"]) => {
  return useQuery({
    queryKey: ["organization", id],
    queryFn: () => orgAPI.getOrganization(id!),
    enabled: !!id,
  });
}