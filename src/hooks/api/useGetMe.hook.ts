import { userAPI } from "@/services/users";
import { useQuery } from "@tanstack/react-query";

export const useGetMe = (enabled: boolean) => {
  const userQuery = useQuery({
    queryKey: ["user", "me"],
    queryFn: userAPI.me,
    enabled: enabled,
  });
  return userQuery;
}