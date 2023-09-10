import { type FC } from "react";

type Props = {
  size?: "medium" | "small";
  color?: "primary" | "gray";
  text: string;
};

const Button: FC<Props> = ({ size, color, text }) => {
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
      className={`rounded-[4px] border text-center duration-100 ${styleOfSize} ${styleOfColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
