import { type FC, type MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const CloseButton: FC<Props> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`group relative w-[32px] rounded-full border border-primary duration-100 before:block before:pt-[100%] hover:bg-primary focus:outline-primary-dark ${className}`}
    >
      <span className="absolute left-[50%] top-[50%] block h-[1px] w-[16px] -translate-x-1/2 -translate-y-1/2 rotate-[45deg] bg-primary duration-100 group-hover:bg-white" />
      <span className="absolute left-[50%] top-[50%] block h-[1px] w-[16px] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] bg-primary duration-100 group-hover:bg-white" />
    </button>
  );
};

export default CloseButton;
