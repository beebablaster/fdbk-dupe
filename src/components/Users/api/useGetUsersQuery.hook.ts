import { TGetUsersProps } from "@/models/User";
import { userAPI } from "@/services/users";
import { useQuery } from "@tanstack/react-query";

export const useGetUsersQuery = (params: TGetUsersProps, enabled: boolean = true) => {
  const query = useQuery({
    queryKey: ["users", params],
    queryFn: () => userAPI.getUsers(params),
    enabled: enabled
  });
  return query;
}