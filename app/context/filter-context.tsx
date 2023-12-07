"use client";

import { ReactNode, createContext, useState } from "react";
import { FilterByType } from "../types/filters";

type Props = {
  children: ReactNode;
};

export const FilterContext = createContext({
  type: FilterByType.ALL,
  setType: (value: FilterByType) => {},
});

export default function FilterContextProvider({ children }: Props) {
  const [type, setType] = useState(FilterByType.ALL);
  return (
    <FilterContext.Provider value={{ type, setType }}>
      {children}
    </FilterContext.Provider>
  );
}
