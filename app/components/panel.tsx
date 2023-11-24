import { PanelProductPaperComponent } from "./panel-paper";

export function PanelComponent() {
  return (
    <div className="flex flex-wrap min-h-auto items-center justify-center gap-2">
      <div className="h-[586px] w-[630px]">
        <PanelProductPaperComponent />
      </div>
      <div className="flex flex-col h-[586px] gap-2">
        <div className="flex gap-2 h-full w-[630px]">
          <PanelProductPaperComponent />
          <PanelProductPaperComponent />
        </div>
        <PanelProductPaperComponent />
      </div>
    </div>
  );
}
