import { type FC, type MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const CloseButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-[32px] rounded-full border border-primary before:block before:pt-[100%]"
    >
      <span className="absolute left-[50%] top-[50%] block h-[1px] w-[16px] -translate-x-1/2 -translate-y-1/2 rotate-[45deg] bg-primary" />
      <span className="absolute left-[50%] top-[50%] block h-[1px] w-[16px] -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] bg-primary" />
    </button>
  );
};

export default CloseButton;
