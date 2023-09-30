import { type FC } from "react";

type Props = {
  text: string;
  color?: "primary" | "gray";
};

const Label: FC<Props> = ({ text, color }) => {
  let styleOfColor: string;
  switch (color) {
    case "primary": {
      styleOfColor = "border-primary shadow-primary-light text-primary";
      break;
    }
    case "gray": {
      styleOfColor = "border-gray shadow-gray-light text-gray";
      break;
    }
    default: {
      styleOfColor = "border-primary shadow-primary-light text-primary";
    }
  }

  return (
    <span
      className={`whitespace-nowrap rounded-[2px] border px-[8px] text-xs shadow ${styleOfColor}`}
    >
      {text}
    </span>
  );
};

export default Label;
