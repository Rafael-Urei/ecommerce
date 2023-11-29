import { Rate } from "@/app/components/rate";
import BasicLayout from "@/app/layouts/basic-layout";
import { Product } from "@/app/types/products";
import classNames from "classnames";

async function getData() {
  const res = await fetch("http://localhost:1337/api/products/1?populate=*");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductPage() {
  const data = await getData();
  const { data: product }: Product = data;
  const {
    data: {
      attributes: { name, description, price, descount, reviews, variants },
    },
  }: Product = data;

  console.log(data.data.attributes);

  return (
    <BasicLayout>
      <div className="flex items-center self-center gap-[10px] h-auto w-[887px] mt-[100px]">
        <div className="w-[420px] h-[480px] rounded-lg bg-[#EFEFEF]"></div>
        <div className="flex flex-col w-[440px] min-h-[480px] h-auto p-[30px] gap-[20px] rounded-lg bg-[#F8F8F8]">
          <div className="w-full flex flex-col gap-[20px]">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-[10px] text-[#565656]">{description}</p>
          </div>
          <section className="flex flex-col gap-3">
            <h2 className="text-[12px] font-bold">Select Size:</h2>
            <div className="flex gap-3">
              {variants.data.map((variant, index) => {
                return (
                  <div
                    key={variant.id}
                    className={classNames(
                      "flex items-center justify-center rounded-md border-2 border-[#000000] py-[7.5px] px-[20px]",
                      {
                        "opacity-10 cursor-not-allowed":
                          variant.attributes.storage === 0,
                      },
                      {
                        "text-red-500": variant.attributes.storage === 0,
                      }
                    )}
                  >
                    {variant.attributes.size}
                  </div>
                );
              })}
            </div>
          </section>
          <section className="flex justify-start gap-[10px]">
            <span className="text-[24px] font-bold text-[#3FE7A0]">
              R$ {price}
            </span>
            {descount > 0 && (
              <>
                <span className="text-[12px] font-bold text-[#C7C7C7]">
                  R$ {product?.attributes.price}
                </span>
                <span className="text-[12px] font-bold">-{}% off</span>
              </>
            )}
          </section>
          <section>
            <Rate rate={product.attributes.rate} readOnly></Rate>
          </section>
          <button className="bg-[#3C3C3C] text-[20px] font-bold text-white py-6 rounded-lg">
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col pt-5 px-20">
        <h1 className="text-[20px] font-bold text-center py-5">Reviews:</h1>
        <div>
          {reviews.data.map((review) => {
            return (
              <div
                key={review.id}
                className="shadow p-10 flex flex-col gap-5 rounded-md"
              >
                <h2 className="font-semibold">{review.attributes.reviewer}</h2>
                <p className="text-slate-400 text-[12px] pl-5">
                  {review.attributes.review}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </BasicLayout>
  );
}
