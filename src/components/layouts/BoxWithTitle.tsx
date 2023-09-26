import { type FC, type ReactElement } from "react";

type Props = {
  title: string;
  text: string;
  color?: "primary" | "dark" | "black";
};

const BoxWithTitle: FC<Props> = ({ title, text, color }) => {
  const lineBrokenTexts: ReactElement[] = text.split(/\n/).map((text, index) => {
    return (
      <p key={index} className="mt-2 first:mt-0">
        {text}
      </p>
    );
  });

  let borderStyleOfColor: string;
  let textStyleOfColor: string;
  switch (color) {
    case "primary": {
      borderStyleOfColor = "border-primary";
      textStyleOfColor = "text-primary";
      break;
    }
    case "dark": {
      borderStyleOfColor = "border-primary-dark";
      textStyleOfColor = "text-primary-dark";
      break;
    }
    case "black": {
      borderStyleOfColor = "border-black";
      textStyleOfColor = "text-black";
      break;
    }
    default: {
      borderStyleOfColor = "border-primary";
      textStyleOfColor = "text-primary";
    }
  }

  return (
    <div className={`relative border px-[32px] py-[24px] ${borderStyleOfColor}`}>
      <div className="absolute left-0 top-0 inline-block -translate-y-1/2 bg-white px-[32px]">
        <span className={`text-xl ${textStyleOfColor}`}>{title}</span>
      </div>

      <div>{lineBrokenTexts}</div>
    </div>
  );
};

export default BoxWithTitle;
