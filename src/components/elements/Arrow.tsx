// 'use client'

import { type FC } from "react";

type Props = {
  direction: "down" | "up";
  color?: "primary" | "gray";
  className?: string;
};

const Arrow: FC<Props> = ({ direction, color, className }) => {
  let styleOfColor: string;
  switch (color) {
    case "primary": {
      styleOfColor = "border-primary";
      break;
    }
    case "gray": {
      styleOfColor = "border-gray";
      break;
    }
    default: {
      styleOfColor = "border-primary";
    }
  }

  return (
    <div className={`relative aspect-square w-[12px] ${className}`}>
      <span
        className={`absolute left-1/2 top-1/2 block aspect-square w-[8px] -translate-x-1/2 border-b border-r duration-300 ${styleOfColor} ${
          direction === "down"
            ? "-translate-y-[75%] rotate-[45deg]"
            : "-translate-y-[25%] rotate-[225deg]"
        }`}
      />
    </div>
  );
};

export default Arrow;
