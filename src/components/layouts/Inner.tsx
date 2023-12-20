import { type FC, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  width: "wide" | "narrow";
};

const Inner: FC<Props> = ({ children, width }) => {
  return (
    <div className={`mx-auto px-[40px] ${width === "wide" ? "max-w-[1060px]" : "max-w-[880px]"}`}>
      {children}
    </div>
  );
};

export default Inner;
