import { orgAPI } from "@/services/organization";
import { useQuery } from "@tanstack/react-query";

export const useGetOrganizationsQuery = () => {
  return useQuery({
    queryKey: ["organizations"],
    queryFn: () => orgAPI.getOrganizations(),
  });
}