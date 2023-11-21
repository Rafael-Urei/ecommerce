"use client";

import classNames from "classnames";
import { useFormContext } from "react-hook-form";

type Props = {
  name: string;
  type: string;
  placeholder?: string;
  tabIndex?: number;
  error?: boolean;
  helperText?: string;
};

export function InputComponent({
  name,
  type,
  placeholder,
  tabIndex,
  error,
  helperText,
}: Props) {
  const { register } = useFormContext();

  return (
    <div className="w-full relative">
      <input
        title={name}
        type={type}
        autoComplete="off"
        placeholder={placeholder}
        tabIndex={tabIndex}
        id={name}
        {...register(name)}
        className={classNames(
          "w-full h-[42px] py-3 px-[18px] border-2 border-[#838383] rounded bg-transparent text-xs text-[#AEAEAE]",
          { "border-red-500": error }
        )}
      />
      <p className="absolute pl-2 pt-1 text-red-500 text-xs">{helperText}</p>
    </div>
  );
}
