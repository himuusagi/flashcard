import {
  type FC,
  type ReactNode,
  type ReactElement,
  type Dispatch,
  type SetStateAction,
} from "react";

type Props = {
  trueOrFalse: boolean;
  questionText: string;
  answerText: string;
  yourAnswerText: string;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const CheckingAnswerAccordion: FC<Props> = ({
  trueOrFalse,
  questionText,
  answerText,
  yourAnswerText,
  isOpen,
  setIsOpen,
}) => {
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
        <dt>問題</dt>
        <dd className="mt-[4px]">
          <p>{lineBrokenQuestionTexts}</p>
        </dd>
      </div>

      <div
        className={`overflow-hidden duration-300 ${
          isOpen ? "mt-[16px] leading-[1.5] opacity-100" : "mt-0 leading-[0] opacity-0"
        }`}
      >
        <div className={`text-primary-dark`}>
          <dt>解答</dt>
          <dd className={`${isOpen ? "mt-[4px]" : "mt-0"}`}>{lineBrokenAnswerTexts}</dd>
        </div>

        <div
          className={`${trueOrFalse ? "text-primary" : "text-gray"} ${
            isOpen ? "mt-[16px]" : "mt-0"
          }`}
        >
          <dt>あなたの回答</dt>
          <dd className={`${isOpen ? "mt-[4px]" : "mt-0"}`}>{yourAnswerText}</dd>
        </div>
      </div>
    </div>
  );
};

export default CheckingAnswerAccordion;
