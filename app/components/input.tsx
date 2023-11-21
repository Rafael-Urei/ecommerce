type Props = {
  name: string;
  placeholder?: string;
  tabIndex?: number;
};

export function InputComponent({ name, placeholder, tabIndex }: Props) {
  return (
    <input
      title={name}
      type="text"
      placeholder={placeholder}
      tabIndex={tabIndex}
      id={name}
      name={name}
      className="w-full h-[42px] py-3 px-[18px] border-2 border-[#838383] rounded bg-transparent text-xs text-[#AEAEAE]"
    />
  );
}
