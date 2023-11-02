import { type FC, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContentWrapper: FC<Props> = ({ children }) => {
  return <div className="py-[40px]">{children}</div>;
};

export default ContentWrapper;
