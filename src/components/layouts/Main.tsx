import { type FC, type ReactNode } from "react";

type Props = {
  hasHeader: boolean;
  children: ReactNode;
};

const Main: FC<Props> = ({ hasHeader, children }) => {
  return (
    <main className={`pb-[80px] pt-[40px] ${hasHeader ? "relative top-[52px]" : ""}`}>
      {children}
    </main>
  );
};

export default Main;
