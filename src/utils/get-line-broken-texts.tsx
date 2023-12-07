import { type ReactNode } from "react";

export const getLineBrokenTexts = (text: string) => {
  const lineBrokenTexts: ReactNode[] = [];

  text.split(/\n/).forEach((text, index) => {
    if (index !== 0) {
      lineBrokenTexts.push(<br key={index} />);
    }
    lineBrokenTexts.push(text);
  });

  return lineBrokenTexts;
};
