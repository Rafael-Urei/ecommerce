"use client";

import { useState } from "react";
import { Star, StarFill } from "./star";

type Props = {
  readOnly: boolean;
  rate: number;
};

export function Rate({ readOnly = true, rate }: Props) {
  const [classification, setClassification] = useState(rate);

  const handleSetRate = (number: number) => {
    if (readOnly) {
      return;
    }
    setClassification(number);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        <button onClick={() => handleSetRate(1)}>
          {classification >= 1 ? <StarFill /> : <Star />}
        </button>
        <button onClick={() => handleSetRate(2)}>
          {classification >= 2 ? <StarFill /> : <Star />}
        </button>
        <button onClick={() => handleSetRate(3)}>
          {classification >= 3 ? <StarFill /> : <Star />}
        </button>
        <button onClick={() => handleSetRate(4)}>
          {classification >= 4 ? <StarFill /> : <Star />}
        </button>
        <button onClick={() => handleSetRate(5)}>
          {classification >= 5 ? <StarFill /> : <Star />}
        </button>
      </div>
      <span className="font-semibold text-xs">1</span>
    </div>
  );
}
