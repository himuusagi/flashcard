import { type FC, type ReactNode } from "react";

type Props = {
  title: string;
  color?: "primary" | "accent";
};

const Heading1: FC<Props> = ({ title, color = "primary" }) => {
  let styleOfTextColor: string;
  let styleOfBorderColor: string;
  switch (color) {
    case "primary": {
      styleOfTextColor = "text-primary";
      styleOfBorderColor = "border-primary";
      break;
    }
    case "accent": {
      styleOfTextColor = "text-accent";
      styleOfBorderColor = "border-accent";
      break;
    }
    default: {
      const wrongColor: never = color;
      throw new Error(`${wrongColor as string} is wrong type.`);
    }
  }

  const lineBrokenTexts: ReactNode[] = [];

  title.split(/\n/).forEach((text, index) => {
    if (index !== 0) {
      lineBrokenTexts.push(<br key={index} />);
    }
    lineBrokenTexts.push(text);
  });

  return (
    <div className="mb-[40px] flex justify-center">
      <div className="relative min-w-[280px] px-[40px] py-[8px] text-center">
        <h1 className={`text-2xl text-primary ${styleOfTextColor}`}>{lineBrokenTexts}</h1>
        <div
          className={`absolute left-0 top-0 h-[10px] w-[10px] border-l border-t ${styleOfBorderColor}`}
        />
        <div
          className={`absolute bottom-0 left-0 h-[10px] w-[10px] border-b border-l ${styleOfBorderColor}`}
        />
        <div
          className={`absolute right-0 top-0 h-[10px] w-[10px] border-r border-t ${styleOfBorderColor}`}
        />
        <div
          className={`absolute bottom-0 right-0 h-[10px] w-[10px] border-b border-r ${styleOfBorderColor}`}
        />
      </div>
      <div />
    </div>
  );
};

export default Heading1;
