"use client";

import { useProducts } from "../hooks/useProducts";
import { FilterByType } from "../types/filters";
import ProductPaperComponent from "./product-paper";

export function ProductsOnSaleComponent() {
  const { products } = useProducts(FilterByType.ALL);
  return (
    <div className="px-10 flex gap-[82px]">
      {products.map((product) => (
        <ProductPaperComponent key={product.id} {...product} />
      ))}
    </div>
  );
}
