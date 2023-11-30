"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import { SingleProduct } from "../types/products";

export function useProduct(id: string) {
  const query = gql`
  query {
    product(id: "${id}") {
      data {
        id
        attributes {
          name
          description
          price
          shirts {
            data {
              id
              attributes {
                sizes {
                  data {
                    attributes {
                      name
                    }
                  }
                }
              }
            }
          }
          category {
            data {
              id
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;
  const { data }: SingleProduct = useSuspenseQuery(query);

  return {
    data,
  };
}
