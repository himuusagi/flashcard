"use client";

import { type FC, type MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  correction: "correct" | "incorrect";
  className?: string;
};

const GradingButton: FC<Props> = ({ text, onClick, className, correction }) => {
  let styleOfColor = "";
  switch (correction) {
    case "correct": {
      styleOfColor =
        "border-primary hover:bg-primary text-primary focus:shadow-primary hover:[&_line]:stroke-primary";
      break;
    }
    case "incorrect": {
      styleOfColor =
        "border-gray hover:bg-gray text-gray focus:shadow-gray hover:[&_line]:stroke-gray";
      break;
    }
    default: {
      const wrongCorrection: never = correction;
      throw new Error(`${wrongCorrection as string} is wrong type`);
    }
  }

  const correctIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      className="stroke-primary duration-100 group-hover:stroke-white"
    >
      <rect x="0.5" y="0.5" width="15" height="15" rx="7.5" fill="transparent" />
      <rect x="1" y="1" width="14" height="14" rx="7" fill="transparent" />
    </svg>
  );

  const incorrectIcon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      className="stroke-gray duration-100 group-hover:stroke-white"
    >
      <line x1="0.353553" y1="0.646447" x2="13.0815" y2="13.3744" />
      <line x1="0.646447" y1="13.3744" x2="13.3744" y2="0.64643" />
    </svg>
  );

  return (
    <button
      type="submit"
      onClick={onClick}
      className={`group inline-flex min-w-[200px] items-center justify-center rounded-[4px] border px-[40px] py-[4px] text-center text-xl outline-none duration-100 hover:text-white focus:shadow ${styleOfColor} ${className}`}
    >
      {correction === "correct" ? correctIcon : incorrectIcon}
      <span className="ml-[8px]">{text}</span>
    </button>
  );
};

export default GradingButton;
