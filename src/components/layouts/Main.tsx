import { type FC, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main className="mt-[52px] pb-[80px] pt-[40px]">{children}</main>;
};

export default Main;
