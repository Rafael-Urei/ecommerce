import { Rate } from "@/app/components/rate";
import BasicLayout from "@/app/layouts/basic-layout";

export default function ProductPage() {
  return (
    <BasicLayout>
      <div className="flex items-center self-center gap-[10px] h-auto w-[887px] mt-[100px]">
        <div className="w-[420px] h-[480px] rounded-lg bg-[#EFEFEF]"></div>
        <div className="flex flex-col w-[440px] min-h-[480px] h-auto p-[30px] gap-[20px] rounded-lg bg-[#F8F8F8]">
          <div className="w-full flex flex-col gap-[20px]">
            <h1 className="text-3xl font-bold"></h1>
            <p className="text-[10px] text-[#565656]"></p>
          </div>
          <section className="flex flex-col gap-3">
            <h2 className="text-[12px] font-bold">Select Size:</h2>
            <div className="flex gap-3"></div>
          </section>
          <section className="flex justify-start gap-[10px]">
            <span className="text-[24px] font-bold text-[#3FE7A0]"></span>
          </section>
          <section>
            <Rate rate={1} readOnly></Rate>
          </section>
          <button className="bg-[#3C3C3C] text-[20px] font-bold text-white py-6 rounded-lg">
            Purchase
          </button>
        </div>
      </div>
      <div className="flex flex-col pt-5 px-20">
        <h1 className="text-[20px] font-bold text-center py-5">Reviews:</h1>
        <div></div>
      </div>
    </BasicLayout>
  );
}
