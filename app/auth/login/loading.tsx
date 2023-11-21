import { TodoLogo } from "@/app/components/logo";

export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-opacity-30 bg-slate-200">
      <div className="flex items-center justify-cente h-32 w-32 rounded-full animate-bounce">
        <TodoLogo />
      </div>
    </div>
  );
}
