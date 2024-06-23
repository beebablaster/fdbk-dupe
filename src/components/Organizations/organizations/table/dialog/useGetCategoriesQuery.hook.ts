import { orgAPI } from "@/services/organization";
import { useQuery } from "@tanstack/react-query";

export const useGetCategoriesQuery = () => {
  return useQuery({
    queryKey: ["organization", "categories"],
    queryFn: orgAPI.getCategories,
  });
}