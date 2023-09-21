import { type FC } from "react";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
  className?: string;
};

const LinkedText: FC<Props> = ({ text, href, className }) => {
  return (
    <Link
      href={href}
      className={`relative text-primary before:absolute before:bottom-0 before:left-0 before:block  before:h-[1px] before:w-full before:bg-transparent before:duration-100 hover:before:bg-primary focus:outline-primary-light ${className}`}
    >
      {text}
    </Link>
  );
};

export default LinkedText;
