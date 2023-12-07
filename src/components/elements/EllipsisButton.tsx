import { type FC, type MouseEventHandler } from "react";
import { useSubmissionMessageContext } from "@/contexts/SubmissionMessageContext";

type Props = {
  size?: "medium" | "small";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const EllipsisButton: FC<Props> = ({ size, onClick, className }) => {
  const { type } = useSubmissionMessageContext();

  let styleOfCircleSize = "";
  let styleOfDotSize = "";
  switch (size) {
    case "medium":
      styleOfCircleSize = "w-[32px]";
      styleOfDotSize = "w-[4px]";
      break;
    case "small":
      styleOfCircleSize = "w-[24px]";
      styleOfDotSize = "w-[3px]";
      break;
    default:
      styleOfCircleSize = "w-[32px]";
      styleOfDotSize = "w-[4px]";
  }

  return (
    <button
      onClick={onClick}
      disabled={type === "pending"}
      className={`group relative rounded-full border border-primary duration-100 before:block before:pt-[100%] hover:bg-primary focus:outline-primary-dark disabled:pointer-events-none disabled:border-primary-light ${className} ${styleOfCircleSize}`}
    >
      <span
        className={`absolute left-[25%] top-[50%] block -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary duration-100 before:block before:pt-[100%] group-hover:bg-white group-disabled:bg-primary-light ${styleOfDotSize}`}
      />
      <span
        className={`absolute left-[50%] top-[50%] block -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary duration-100 before:block before:pt-[100%] group-hover:bg-white group-disabled:bg-primary-light ${styleOfDotSize}`}
      />
      <span
        className={`absolute left-[75%] top-[50%] block -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary duration-100 before:block before:pt-[100%] group-hover:bg-white group-disabled:bg-primary-light ${styleOfDotSize}`}
      />
    </button>
  );
};

export default EllipsisButton;
