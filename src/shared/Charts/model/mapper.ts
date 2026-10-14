import type { Product } from "@/entities/product/model/product.types";

export type MiniLineChartPoint = {
  v: number;
};

export type RevenueChartPoint = Pick<Product, "price" | "title">;

export function toMiniLineChartData(
  products: Product[]
): MiniLineChartPoint[] {
  return products.slice(0, 10).map((product) => ({
    v: product.price,
  }));
}

export function toRevenueChartData(
  products: Product[]
): RevenueChartPoint[] {
  return products.slice(0, 10).map((product) => ({
    title: product.title,
    price: product.price,
  }));
}