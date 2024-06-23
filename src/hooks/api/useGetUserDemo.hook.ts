import { userAPI } from "@/services/users";
import { useQuery } from "@tanstack/react-query";

export const useGetUserDemo = (id: string) => {
    const userQuery = useQuery({
        queryKey: ['users', id],
        queryFn: () => userAPI.getUserDemo(id),
    });
    return userQuery;
}