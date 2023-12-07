import { type FC, type MouseEventHandler } from "react";
import Link from "next/link";

type Props = {
  type: "button" | "submit" | "link";
  href?: string;
  size?: "medium" | "small";
  color?: "primary" | "gray";
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
};

const Button: FC<Props> = ({
  type,
  href,
  size = "medium",
  color = "primary",
  text,
  onClick,
  disabled,
  className,
}) => {
  let styleOfSize = "";
  switch (size) {
    case "medium": {
      styleOfSize = "min-w-[200px] px-[40px] py-[4px] text-xl";
      break;
    }
    case "small": {
      styleOfSize = "small min-w-[160px] px-[20px] py-[6px] text-sm";
      break;
    }
    default: {
      const wrongSize: never = size;
      throw new Error(`${wrongSize as string} is wrong type.`);
    }
  }

  let styleOfColor = "";
  switch (color) {
    case "primary": {
      styleOfColor =
        "border-primary hover:bg-primary text-primary hover:text-white outline-primary-dark disabled:text-primary-light disabled:border-primary-light";
      break;
    }
    case "gray": {
      styleOfColor =
        "border-gray hover:bg-gray text-gray hover:text-white outline-gray-dark disabled:text-gray-light disabled:border-gray-light";
      break;
    }
    default: {
      const wrongColor: never = color;
      throw new Error(`${wrongColor as string} is wrong type.`);
    }
  }

  if (type === "link") {
    if (!href) {
      throw new Error("href に文字列を設定する必要があります");
    }

    return (
      <Link
        href={href}
        className={`inline-block rounded-[4px] border text-center duration-100 disabled:pointer-events-none ${styleOfSize} ${styleOfColor} ${className}`}
      >
        {text}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`rounded-[4px] border text-center duration-100 disabled:pointer-events-none ${styleOfSize} ${styleOfColor} ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
