import { type FC, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  width: "wide" | "narrow";
};

const Inner: FC<Props> = ({ children, width }) => {
  return <div className={`mx-auto ${width === "wide" ? "w-[1060px]" : "w-[880]"}`}>{children}</div>;
};

export default Inner;
