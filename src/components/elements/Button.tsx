import { type FC, type MouseEventHandler } from "react";

type Props = {
  size?: "medium" | "small";
  color?: "primary" | "gray";
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button: FC<Props> = ({ size, color, text, onClick, className }) => {
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

  return (
    <button
      type="button"
      onClick={onClick}
      className={` rounded-[4px] border  text-center outline-none duration-100 focus:shadow focus:shadow-primary ${styleOfSize} ${styleOfColor} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
