import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ApolloWrapper } from "./lib/apollo-provider";
import FilterContextProvider from "./context/filter-context";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Todo E-commerce",
  description: "A simple e-commerce to improve my abilities",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ApolloWrapper>
          <FilterContextProvider>{children}</FilterContextProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}
