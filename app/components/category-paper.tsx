import Image from "next/image";

type Props = {
  title: string;
  img: string;
};

export function CategoryPaperComponent({ title, img }: Props) {
  return (
    <div className="relative flex items-center justify-center w-[650px] h-[320px] cursor-pointer bg-slate-200">
      <h1 className="absolute z-10 text-white font-bold text-[32px]">
        {title}
      </h1>
      <Image
        src={img}
        alt=""
        fill
        style={{ objectFit: "cover" }}
        className="hover:opacity-40 duration-300"
      />
      <button className="absolute duration-300 right-6 bottom-6 px-[40px] h-[50px] text-[#818181] bg-white rounded hover:bg-black hover:text-white">
        Check Products
      </button>
    </div>
  );
}
