"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
import { Products } from "../types/products";

const query = gql`
  query getProducts {
    products {
      data {
        id
        attributes {
          name
          description
          price
        }
      }
    }
  }
`;

export function useProducts() {
  const { data }: Products = useSuspenseQuery(query);

  return {
    data,
  };
}
