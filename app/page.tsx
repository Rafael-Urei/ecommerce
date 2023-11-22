import Image from "next/image";
import BasicLayout from "./layouts/basic-layout";
import { MoveRight } from "lucide-react";
import { Ingrid_Darling } from "next/font/google";
import { ArrowRight } from "./components/icons";
import Link from "next/link";
import { ProductsPaperComponent } from "./components/product-paper";

const ingrid_darling = Ingrid_Darling({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <BasicLayout>
      <article className="h-[285px] w-full relative">
        <Image
          src="/legs.jpg"
          alt=""
          fill
          priority={true}
          loading="eager"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className="absolute right-10 top-10">
          <h1 className="text-6xl font-semibold text-white">sneakers</h1>
          <p className={`${ingrid_darling.className} text-5xl text-white`}>
            best sellers
          </p>
          <button type="button">
            <Link href="/">
              <ArrowRight />
            </Link>
          </button>
        </div>
      </article>
      <section className="flex flex-wrap gap-4 items-center justify-around py-10 px-5">
        <ProductsPaperComponent title="sneakers" img="/sneaker.jpeg" />
        <ProductsPaperComponent title="shirts" img="/shirt.jpeg" />
      </section>
      <section>
        <h1 className="text-[20px]">On Sale</h1>
      </section>
    </BasicLayout>
  );
}
