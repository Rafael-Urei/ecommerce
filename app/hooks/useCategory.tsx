"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import { ProductsByCategory } from "../types/category";
import { Query } from "@tanstack/react-query";

export function useCategory(id: number) {
  const query = gql`
    query {
      category(id: ${id}) {
        data {
          id
          attributes {
            cattegory_name
            products {
              data {
                id
                attributes {
                  product_name
                  price
                }
              }
            }
          }
        }
      }
    }
  `;
  const { data }: ProductsByCategory = useSuspenseQuery(query);

  return {
    data,
  };
}
