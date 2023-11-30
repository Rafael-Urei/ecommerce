"use client";

import { useProducts } from "../hooks/useProducts";
import BasicLayout from "../layouts/basic-layout";

export default function ProductsPage() {
  const {
    data: {
      products: { data },
    },
  } = useProducts();
  console.log(data);
  return (
    <BasicLayout>
      {data.map((product) => {
        return (
          <div key={product.id}>
            <div className="bg-slate-200"></div>
            <div>
              <h1>{product.attributes.name}</h1>
              <span>{product.attributes.price}</span>
            </div>
          </div>
        );
      })}
    </BasicLayout>
  );
}
