export default function ProductPaperComponent() {
  return (
    <div className="w-[320px] h-auto">
      <div className="w-[320px] h-[240px] bg-[#D9D9D9]"></div>
      <div className="flex justify-between pt-2">
        <h1 className="text-sm font-medium"></h1>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium"></span>
            <span className="text-[10px] font-medium text-[#C3C3C3] line-through">
              R$ 100,00
            </span>
          </div>
          <span className="text-[10px] font-bold">%50</span>
        </div>
      </div>
    </div>
  );
}
