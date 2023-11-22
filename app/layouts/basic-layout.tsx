import { ReactNode } from "react";
import { HeaderComponent } from "../components/header";

type Props = {
  children: ReactNode;
};

export default function BasicLayout({ children }: Props) {
  return (
    <main className="flex min-h-screen flex-col">
      <HeaderComponent />
      {children}
    </main>
  );
}
