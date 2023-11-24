import Image from "next/image";
import BasicLayout from "./layouts/basic-layout";
import { Ingrid_Darling } from "next/font/google";
import { ArrowRight } from "./components/icons";
import Link from "next/link";
import { CategoryPaperComponent } from "./components/category-paper";
import ProductPaperComponent from "./components/product-paper";
import { PanelComponent } from "./components/panel";

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
      <section className="flex flex-wrap gap-4 items-center justify-around pt-10 px-5">
        <CategoryPaperComponent title="sneakers" img="/sneaker.jpeg" />
        <CategoryPaperComponent title="shirts" img="/shirt.jpeg" />
      </section>
      <section className="flex flex-col items-center py-20">
        <h1 className="text-[20px] pb-20">On Sale</h1>
        <div>
          <div className="px-10 flex gap-[82px]">
            <ProductPaperComponent />
            <ProductPaperComponent />
            <ProductPaperComponent />
          </div>
        </div>
      </section>
      <section className="w-full h-auto flex items-center justify-center py-10">
        <PanelComponent />
      </section>
    </BasicLayout>
  );
}
