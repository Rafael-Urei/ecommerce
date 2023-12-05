"use client";

import Image from "next/image";
import { useProducts } from "../hooks/useProducts";
import { Rate } from "./rate";
import { formatPrice } from "../utils/format-price";

export default function ProductsListCommponent() {
  const { products } = useProducts();
  return (
    <section className="flex gap-10 p-10">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col justify-between gap-4">
          <Image
            src={`http://localhost:1337${product.media[0].formats.small.url}`}
            alt=""
            height={product.media[0].formats.small.height}
            width={product.media[0].formats.small.width}
          />
          <div className="flex items-center gap-5">
            <h1 className="text-lg font-semibold">{product.name}</h1>
            <Rate rate={product.rate} readOnly />
            <span>{formatPrice.format(product.price)}</span>
          </div>
          <button className="bg-black text-white font-semibold p-5 rounded-lg">
            Add to cart
          </button>
        </div>
      ))}
    </section>
  );
}
