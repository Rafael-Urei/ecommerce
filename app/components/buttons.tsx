type Props = {
  type: "submit" | "button";
  label: string;
};

export function ButtonComponent({ type, label }: Props) {
  return (
    <button
      title="Login button"
      type={type}
      className="w-44 py-3 rounded-lg bg-black text-white text-sm font-bold tracking-widest border-2 border-transparent duration-200 ease-in-out hover:border-black hover:bg-white hover:text-black"
    >
      {label}
    </button>
  );
}
