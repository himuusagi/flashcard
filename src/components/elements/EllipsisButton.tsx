import { type FC, type MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const EllipsisButton: FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="relative w-[32px] rounded-full border border-primary before:block before:pt-[100%]"
    >
      <span className="absolute left-[25%] top-[50%] block w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary before:block before:pt-[100%]" />
      <span className="absolute left-[50%] top-[50%] block w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary before:block before:pt-[100%]" />
      <span className="absolute left-[75%] top-[50%] block w-[4px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary before:block before:pt-[100%]" />
    </button>
  );
};

export default EllipsisButton;
