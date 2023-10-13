import { type FC, type MouseEventHandler } from "react";

type Props = {
  type: "button" | "submit";
  size?: "medium" | "small";
  color?: "primary" | "gray";
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button: FC<Props> = ({ type, size, color, text, onClick, className }) => {
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
      styleOfColor =
        "border-primary hover:bg-primary text-primary hover:text-white outline-primary-dark";
      break;
    case "gray":
      styleOfColor = "border-gray hover:bg-gray text-gray hover:text-white outline-gray-dark";
      break;
    default:
      styleOfColor =
        "border-primary hover:bg-primary text-primary hover:text-white outline-primary-dark";
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-[4px] border text-center duration-100 ${styleOfSize} ${styleOfColor} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
