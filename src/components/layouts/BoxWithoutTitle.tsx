import { type FC, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const CardWithoutTitle: FC<Props> = ({ children }) => {
  return (
    <div className="rounded-[4px] border border-primary py-[8px] pl-[16px] pr-[8px]">
      {children}
    </div>
  );
};

export default CardWithoutTitle;
