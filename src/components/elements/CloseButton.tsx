import { type FC, type MouseEventHandler } from "react";

type Props = {
  size?: "medium" | "small";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const CloseButton: FC<Props> = ({ size, onClick, className }) => {
  let styleOfCircleSize = "";
  let styleOfDotSize = "";
  switch (size) {
    case "medium":
      styleOfCircleSize = "w-[32px]";
      styleOfDotSize = "w-[16px]";
      break;
    case "small":
      styleOfCircleSize = "w-[24px]";
      styleOfDotSize = "w-[12px]";
      break;
    default:
      styleOfCircleSize = "w-[32px]";
      styleOfDotSize = "w-[16px]";
  }

  return (
    <button
      onClick={onClick}
      className={`group relative rounded-full border border-primary duration-100 before:block before:pt-[100%] hover:bg-primary focus:outline-primary-dark ${className} ${styleOfCircleSize}`}
    >
      <span
        className={`absolute left-[50%] top-[50%] block h-[1px] -translate-x-1/2 -translate-y-1/2 rotate-[45deg] bg-primary duration-100 group-hover:bg-white ${styleOfDotSize}`}
      />
      <span
        className={`absolute left-[50%] top-[50%] block h-[1px] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] bg-primary duration-100 group-hover:bg-white ${styleOfDotSize}`}
      />
    </button>
  );
};

export default CloseButton;
