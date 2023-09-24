"use client";

import {
  type FC,
  type ReactNode,
  type ReactElement,
  type Dispatch,
  type SetStateAction,
} from "react";

type Props = {
  questionText: string;
  answerText: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const QAndAAccordion: FC<Props> = ({ questionText, answerText, isOpen, setIsOpen }) => {
  const lineBrokenQuestionTexts: ReactNode[] = [];
  questionText.split(/\n/).forEach((text, index) => {
    if (index !== 0) {
      lineBrokenQuestionTexts.push(<br key={index} />);
    }
    lineBrokenQuestionTexts.push(text);
  });

  const lineBrokenAnswerTexts: ReactElement[] = answerText.split(/\n/).map((text, index) => {
    return (
      <p
        key={index}
        className={`duration-300 ${isOpen ? "mt-2 leading-[1.5] first:mt-0" : "mt-0 leading-[0]"}`}
      >
        {text}
      </p>
    );
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
        {lineBrokenAnswerTexts}
      </div>
    </div>
  );
};
export default QAndAAccordion;
