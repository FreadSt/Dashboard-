import { getUsersList } from "./user.api";
import { useQuery } from "@tanstack/react-query";

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: getUsersList
  })
}