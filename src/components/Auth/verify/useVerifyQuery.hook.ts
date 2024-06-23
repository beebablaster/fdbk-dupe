
import { authAPI } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";

export const useVerifyQuery = (code: string) => {
  return useQuery({
    queryKey: ["auth", "verify", code],
    queryFn: () => authAPI.verifyUser(code),
    enabled: !!code,
  });
}