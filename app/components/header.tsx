"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLinks } from "../utils/links";
import classNames from "classnames";
import { TodoLogoHeader } from "./logo";
import { ShoppingCart } from "lucide-react";

type Props = {
  label: string;
  path: string;
};

export function NavLinkComponent({ label, path }: Props) {
  const pathname = usePathname();
  return (
    <Link
      href={path}
      className={classNames(
        " font-semibold text-[14px] duration-200 before:duration-200 relative before:absolute before:w-[0px] before:h-[2px] before:bottom-0 before:bg-[#FF83DC] hover:before:h-[2px] hover:before:w-full",
        {
          "duration-200 -top-1 before:h-[2px] before:w-full": path === pathname,
        }
      )}
    >
      {label}
    </Link>
  );
}

export function HeaderComponent() {
  return (
    <header className="w-full h-[73px] flex items-center shadow-md px-[70px]">
      <div className="pr-[70px]">
        <Link href="/">
          <TodoLogoHeader />
        </Link>
      </div>
      <nav className="flex flex-1 gap-[30px]">
        {NavLinks.map((navItem) => {
          return (
            <NavLinkComponent
              key={navItem.id}
              label={navItem.label}
              path={navItem.path}
            />
          );
        })}
      </nav>
      <div className="relative cursor-pointer">
        <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-[#FF83DC]"></div>
        <ShoppingCart />
      </div>
    </header>
  );
}
