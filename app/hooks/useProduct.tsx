"use client";

import {
  DocumentNode,
  OperationVariables,
  TypedDocumentNode,
  useSuspenseQuery,
} from "@apollo/client";

export function useProduct(
  query: DocumentNode | TypedDocumentNode<unknown, OperationVariables>
) {
  const { data } = useSuspenseQuery(query);

  return data;
}
