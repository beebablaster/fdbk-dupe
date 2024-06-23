import { TOrganization } from "@/models/Organization";
import { orgAPI } from "@/services/organization";
import { useQuery } from "@tanstack/react-query";

export const useGetSubOrganizationsQuery = (organizationId: TOrganization["id"], level?: TOrganization["level"]) => {
  return useQuery({
    queryKey: ["organizations", "sub", { id: organizationId, level }],
    queryFn: () => orgAPI.getSubOrganizations({ id: organizationId, level }),
    enabled: !!organizationId,
  });
}