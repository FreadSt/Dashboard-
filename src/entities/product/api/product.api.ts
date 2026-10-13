import { getApiData } from "@/shared/api/api";
import type { Product, ProductsResponse } from "../model/product.types";

export async function getProductsList () {
  return getApiData<ProductsResponse>(`products`)
}

export async function getProduct (id: number) {
  return getApiData<Product>(`products/${id}`)
}

export async function searchProduct (query: string) {
  return getApiData<ProductsResponse>(`products/product?q=${encodeURIComponent(query)}`)
}