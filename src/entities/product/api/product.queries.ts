import { useQuery } from "@tanstack/react-query"
import { getProduct, getProductsList } from "./product.api"

export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: getProductsList
  })
}

export function useProduct(id: number) {
  return useQuery({
    queryKey: ['product', id],
    queryFn: () => getProduct(id),
  })
}
