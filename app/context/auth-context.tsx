"use client";

import { setCookie } from "nookies";
import { ReactNode, createContext, useState } from "react";

type User = {
  id: number;
  username: string;
  email: string;
  provider: boolean;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
};

type SignInData = {
  email: string;
  password_hash: string;
};

interface AuthContextType {
  isAuth: boolean;
  user: User | null;
  signIn: (data: SignInData) => void;
}

export const AuthContext = createContext({} as AuthContextType);

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuth = !!user;
  async function signIn({ email, password_hash }: SignInData) {
    const userCredentials = {
      identifier: email,
      password: password_hash,
    };
    const login = await fetch(`http://localhost:1337/api/auth/local`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    });

    const responseWithData = await login.json();

    setUser({
      ...responseWithData.user,
    });

    setCookie(undefined, "auth.token", responseWithData.jwt, {
      maxAge: 60 * 60 * 1, // 1 hour
    });
    console.log(responseWithData);
  }
  return (
    <AuthContext.Provider value={{ isAuth, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}
