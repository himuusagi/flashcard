"use client";

import { type FC, type MouseEventHandler } from "react";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  icon: "correct" | "wrong";
  size?: "medium" | "small";
  color?: "primary" | "gray";
};

const ButtonWithIcon: FC<Props> = ({ text, onClick, className, size, color, icon }) => {
  let styleOfSize = "";
  switch (size) {
    case "medium":
      styleOfSize = "min-w-[200px] px-[40px] py-[4px] text-xl";
      break;
    case "small":
      styleOfSize = "small min-w-[160px] px-[20px] py-[6px] text-sm";
      break;
    default:
      styleOfSize = "min-w-[200px] px-[40px] py-[4px] text-xl";
  }

  let styleOfColor = "";
  switch (color) {
    case "primary":
      styleOfColor = "border-primary hover:bg-primary text-primary hover:text-white";
      break;
    case "gray":
      styleOfColor = "border-gray hover:bg-gray text-gray hover:text-white";
      break;
    default:
      styleOfColor = "border-primary hover:bg-primary text-primary hover:text-white";
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

  const wrongIcon = (
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
      type="button"
      onClick={onClick}
      className={`group inline-flex items-center justify-center rounded-[4px] border text-center  outline-none duration-100 focus:shadow focus:shadow-primary hover:[&_line]:stroke-primary ${styleOfSize} ${styleOfColor} ${className}`}
    >
      {icon === "correct" ? correctIcon : wrongIcon}
      <span className="ml-[8px]">{text}</span>
    </button>
  );
};

export default ButtonWithIcon;
