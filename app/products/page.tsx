"use client";

import { useProducts } from "../hooks/useProducts";
import BasicLayout from "../layouts/basic-layout";

export default function ProductsPage() {
  const {
    data: { products },
  } = useProducts();

  return (
    <BasicLayout>
      <section>
        {products.data.map((product) => {
          return <div key={product.id}>{product.attributes.product_name}</div>;
        })}
      </section>
    </BasicLayout>
  );
}
