"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import { Products } from "../types/products";

export function useProducts(category?: string) {
  const query = gql`
    query {
      products {
        data {
          id
          attributes {
            product_name
            price
            reviews {
              data {
                id
                attributes {
                  rate
                  review
                  reviewer
                }
              }
            }
            product_images {
              data {
                id
                attributes {
                  url
                  formats
                }
              }
            }
            category {
              data {
                id
                attributes {
                  cattegory_name
                }
              }
            }
          }
        }
      }
    }
  `;

  const { data }: Products = useSuspenseQuery(query);

  const products = data.products.data.map((product) => ({
    id: product.id,

    price: product.attributes.price,
    name: product.attributes.product_name,
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

  const productsByCategory = products.filter(
    (product) => product.category === category
  );

  return {
    products,
    productsByCategory,
  };
}
