"use client";

import { type FC, type ReactNode } from "react";
import { useQAndAContext } from "@/contexts/QAndAContext";

const QAndAAccordion: FC = () => {
  const { questionText, answerText, isOpen, setIsOpen } = useQAndAContext();

  const lineBrokenQuestionTexts: ReactNode[] = [];
  questionText.split(/\n/).forEach((text, index) => {
    if (index !== 0) {
      lineBrokenQuestionTexts.push(<br key={index} />);
    }
    lineBrokenQuestionTexts.push(text);
  });

  const lineBrokenAnswerTexts: ReactNode[] = [];
  answerText.split(/\n/).forEach((text, index) => {
    if (index !== 0) {
      lineBrokenAnswerTexts.push(<br key={index} />);
    }
    lineBrokenAnswerTexts.push(text);
  });

  return (
    <div className="w-full">
      <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
        <p>{lineBrokenQuestionTexts}</p>
      </div>

      <div
        className={`overflow-hidden text-primary duration-300 ${
          isOpen ? "mt-[12px] leading-[1.5] opacity-100" : "mt-0 leading-[0] opacity-0"
        }`}
      >
        <p>{lineBrokenAnswerTexts}</p>
      </div>
    </div>
  );
};
export default QAndAAccordion;
