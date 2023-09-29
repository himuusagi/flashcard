import { type FC, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  borderColor?: "primary" | "gray";
};

const CardWithoutTitle: FC<Props> = ({ children, borderColor }) => {
  let styleOfColor: string;
  switch (borderColor) {
    case "primary": {
      styleOfColor = "border-primary";
      break;
    }
    case "gray": {
      styleOfColor = "border-gray";
      break;
    }
    default: {
      styleOfColor = "border-primary";
    }
  }

  return (
    <div className={`rounded-[4px] border py-[8px] pl-[16px] pr-[8px] ${styleOfColor}`}>
      {children}
    </div>
  );
};

export default CardWithoutTitle;
