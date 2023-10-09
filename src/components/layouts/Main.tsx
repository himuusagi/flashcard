import { type FC, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main className="py-[80px]">{children}</main>;
};

export default Main;
