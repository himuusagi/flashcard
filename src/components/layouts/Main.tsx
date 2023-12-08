import { type FC, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Main: FC<Props> = ({ children }) => {
  return <main className="mt-[40px] pb-[80px] pt-[40px]">{children}</main>;
};

export default Main;
