"use client";

import Image from "next/image";
import { useProducts } from "../hooks/useProducts";
import { Rate } from "./rate";

type Props = {
  category?: string;
};

export default function ProductsListCommponent({ category }: Props) {
  const { productsByCategory } = useProducts(category);
  return (
    <section className="flex flex-wrap gap-10 p-10">
      {productsByCategory.map((product) => (
        <div key={product.id} className="flex flex-col justify-between gap-4">
          <Image
            src={`http://localhost:1337${product.media[0].formats.small.url}`}
            alt=""
            height={product.media[0].formats.small.height}
            width={product.media[0].formats.small.width}
          />
          <div className="flex items-center justify-between gap-5">
            <div>
              <h1 className="text-lg font-semibold">{product.name}</h1>
              <Rate rate={product.rate} readOnly />
            </div>
            <span>{product.price}</span>
          </div>
          <button className="bg-black text-white font-semibold p-5 rounded-lg border border-transparent hover:border-black duration-300 hover:bg-white hover:text-black">
            Add to cart
          </button>
        </div>
      ))}
    </section>
  );
}
