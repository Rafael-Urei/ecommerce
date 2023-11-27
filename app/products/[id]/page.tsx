import BasicLayout from "@/app/layouts/basic-layout";
import { Data } from "@/app/types/products";

async function getData() {
  const res = await fetch("http://localhost:1337/api/products/1");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function ProductPage() {
  const data: Data = await getData();
  return (
    <BasicLayout>
      <div className="flex items-center self-center gap-[10px] h-auto w-[887px] mt-[100px]">
        <div className="w-[420px] h-[480px] rounded-lg bg-[#EFEFEF]"></div>
        <div className="w-[440px] h-[480px] p-[30px] rounded-lg bg-[#F8F8F8]">
          <div className="w-full flex flex-col gap-[20px]">
            <h1 className="text-3xl font-bold">{data.data.attributes.name}</h1>
            <p className="text-[10px]">{data.data.attributes.description}</p>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}
