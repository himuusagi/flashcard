import { type FC } from "react";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
  size?: "medium" | "large";
  className?: string;
};

const LinkedText: FC<Props> = ({ text, href, size = "medium", className }) => {
  let styleOfSize: string;
  switch (size) {
    case "medium": {
      styleOfSize = "";
      break;
    }
    case "large": {
      styleOfSize = "text-xl";
      break;
    }
    default: {
      const wrongSize: never = size;
      throw new Error(`無効な size プロップス: ${wrongSize as string}`);
    }
  }

  return (
    <Link
      href={href}
      className={`relative cursor-pointer text-primary before:absolute before:bottom-0 before:left-0 before:block  before:h-[1px] before:w-full before:bg-transparent before:duration-100 hover:before:bg-primary focus:outline-primary-light ${styleOfSize} ${className}`}
    >
      {text}
    </Link>
  );
};

export default LinkedText;
