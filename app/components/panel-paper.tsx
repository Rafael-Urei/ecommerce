"use client";

import Image from "next/image";
import { useState } from "react";
import { Rate } from "./rate";

export function PanelProductPaperComponent() {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative flex flex-col w-full h-full bg-[#D9D9D9]"
      onMouseEnter={() => setHover((prev) => !prev)}
      onMouseLeave={() => setHover((prev) => !prev)}
    >
      <div className="absolute top-0 bg-transparent z-10 shadow-inset h-full w-full"></div>
      <Image
        src="/shirt.jpeg"
        fill
        alt=""
        style={{
          objectFit: "cover",
        }}
        className="shadow-inset"
      />
      <div
        className={
          !hover
            ? "flex flex-col justify-between absolute bottom-0 z-20 bg-white bg-opacity-0 h-0 w-full duration-500 overflow-hidden"
            : "flex flex-col justify-between absolute bottom-0 z-20 bg-white bg-opacity-70 h-[150px] w-full duration-500 overflow-hidden"
        }
      >
        <div className="h-full bg-inherit flex flex-col justify-between">
          <div className="flex flex-col flex-1 px-4 justify-center gap-1">
            <h1 className="text-[20px]">Product Title</h1>
            <Rate readOnly />
          </div>
          <button className="bg-[#232323] text-white text-xs font-semibold text-center h-[56px] w-full duration-500 hover:bg-white hover:text-black">
            Add to shopping cart
          </button>
        </div>
      </div>
    </div>
  );
}
