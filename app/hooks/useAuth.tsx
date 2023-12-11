"use client";

import { useContext } from "react";
import { FilterContext } from "../context/filter-context";
import { AuthContext } from "../context/auth-context";

export function useAuth() {
  return useContext(AuthContext);
}
