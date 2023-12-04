"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import { Products } from "../types/products";

export function useProducts() {
  const query = gql`
    query {
      products {
        data {
          id
          attributes {
            product_name
            price
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
  return {
    data,
  };
}
