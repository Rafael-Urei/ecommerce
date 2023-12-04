"use client";

import { useCategory } from "@/app/hooks/useCategory";
import BasicLayout from "../layouts/basic-layout";
import { Rate } from "../components/rate";
import { formatPrice } from "../utils/format-price";

type Props = {
  id: number;
};

export default function ProductsListCommponent({ id }: Props) {
  const {
    data: {
      category: {
        data: {
          attributes: { products: products, cattegory_name },
        },
      },
    },
  } = useCategory(id);

  return (
    <section className="flex gap-10 p-10">
      {products.data.map((product) => (
        <div key={product.id} className="w-[300px] shadow rounded-lg">
          <div className="h-[300px]"></div>
          <div className="flex flex-col items-center text-center justify-center gap-2 px-4 py-2">
            <h1 className="text-lg font-semibold">
              {product.attributes.product_name}
            </h1>
            <span className="text-zinc-300">{cattegory_name}</span>
            <Rate rate={1} readOnly />
            <span className="font-semibold text-lg">
              {formatPrice.format(product.attributes.price)}
            </span>
          </div>
          <button className="bg-black text-white rounded-br-lg rounded-bl-lg p-2 w-full duration-200 hover:bg-white hover:text-black">
            Add to cart
          </button>
        </div>
      ))}
    </section>
  );
}
