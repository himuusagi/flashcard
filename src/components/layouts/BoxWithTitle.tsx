import { type FC, type ReactElement } from "react";

type Props = {
  title: string;
  text: string;
  color?: "primary" | "dark" | "black" | "accent";
};

const BoxWithTitle: FC<Props> = ({ title, text, color = "primary" }) => {
  const lineBrokenTexts: ReactElement[] = text.split(/\n/).map((text, index) => {
    return (
      <p key={index} className="mt-2 first:mt-0">
        {text}
      </p>
    );
  });

  let styleOfBorderColor: string;
  let styleOfTextColor: string;
  switch (color) {
    case "primary": {
      styleOfBorderColor = "border-primary";
      styleOfTextColor = "text-primary";
      break;
    }
    case "dark": {
      styleOfBorderColor = "border-primary-dark";
      styleOfTextColor = "text-primary-dark";
      break;
    }
    case "black": {
      styleOfBorderColor = "border-black";
      styleOfTextColor = "text-black";
      break;
    }
    case "accent": {
      styleOfBorderColor = "border-accent";
      styleOfTextColor = "text-accent";
      break;
    }
    default: {
      const wrongColor: never = color;
      throw new Error(`${wrongColor as string} is wrong type.`);
    }
  }

  return (
    <div className={`relative border px-[32px] py-[24px] ${styleOfBorderColor}`}>
      <div className="absolute left-0 top-0 inline-block -translate-y-1/2 bg-white px-[32px]">
        <span className={`text-xl ${styleOfTextColor}`}>{title}</span>
      </div>

      <div>{lineBrokenTexts}</div>
    </div>
  );
};

export default BoxWithTitle;
