"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import { Products } from "../types/products";
import { formatPrice } from "../utils/format-price";
import { mountQuery } from "../utils/graphql-filters";
import { useFilter } from "./useFilter";
import { FilterByType } from "../types/filters";

export function useProducts(category: FilterByType) {
  const { type } = useFilter();

  const query = gql`
    ${mountQuery(category)}
  `;

  const { data }: Products = useSuspenseQuery(query);

  const products = data.products.data.map((product) => ({
    id: product.id,
    price: formatPrice.format(product.attributes.price),
    name: product.attributes.product_name,
    variants: product.attributes.variants.data.map((variant) => ({
      id: variant.id,
      product_id: product.id,
      variant_name: product.attributes.product_name,
      price: product.attributes.price,
      sale: variant.attributes.sale,
      descount: variant.attributes.descount,
    })),
    rate:
      product.attributes.reviews.data.reduce(
        (prev, current) => prev + current.attributes.rate,
        0
      ) / product.attributes.reviews.data.length,
    reviews: product.attributes.reviews.data.map((review) => ({
      id: review.id,
      review_text: review.attributes.review,
      reviewer: review.attributes.reviewer,
      rate: review.attributes.rate,
    })),
    category: product.attributes.category.data.attributes.cattegory_name,
    media: product.attributes.product_images.data.map((image) => ({
      id: image.id,
      formats: image.attributes.formats,
      url: image.attributes.url,
    })),
  }));

  return {
    products,
  };
}
