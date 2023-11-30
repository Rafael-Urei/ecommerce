"use client";

import Link from "next/link";
import { useProducts } from "../hooks/useProducts";
import BasicLayout from "../layouts/basic-layout";
import { formatPrice } from "../utils/format-price";

export default function ProductsPage() {
  const {
    data: {
      products: { data },
    },
  } = useProducts();
  return (
    <BasicLayout>
      <ul className="flex gap-5 m-10">
        {data.map((product) => {
          return (
            <li key={product.id} className="shadow-md rounded-lg">
              <div className="bg-slate-200 rounded h-[300px] w-[300px]"></div>
              <div className="flex flex-col items-center justify-center p-10 text-center text-lg font-bold gap-5 text-slate-600">
                <h1>
                  <Link href={`/products/${product.id}`}>
                    {product.attributes.name}
                  </Link>
                </h1>
                <span className="text-emerald-500">
                  {formatPrice.format(product.attributes.price)}
                </span>
              </div>
              <button className="flex items-center justify-center p-5 text-center bg-[#3C3C3C] text-white font-bold w-full rounded-br-lg rounded-bl-lg duration-200 hover:bg-white hover:text-black">
                Add to cart
              </button>
            </li>
          );
        })}
      </ul>
    </BasicLayout>
  );
}
