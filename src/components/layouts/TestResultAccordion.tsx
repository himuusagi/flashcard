import { type FC, type Dispatch, type SetStateAction } from "react";
import { getFullWithNumber } from "@/utils/get-full-width-number";
import { getLineBrokenTexts } from "@/utils/get-line-broken-texts";
import { useTestResultContext } from "@/contexts/TestResultContext";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const TestResultAccordion: FC<Props> = ({ isOpen, setIsOpen }) => {
  const { questionNumber, question, answer, yourAnswer, correction } = useTestResultContext();

  const fullWidthQuestionNumber = getFullWithNumber(questionNumber);

  const lineBrokenQuestionTexts = getLineBrokenTexts(question);
  const lineBrokenAnswerTexts = getLineBrokenTexts(answer);
  const lineBrokenYourAnswerTexts = getLineBrokenTexts(yourAnswer);

  return (
    <div className="w-full">
      <div onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
        <dt>問題{fullWidthQuestionNumber}</dt>
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
          <dt>解答{fullWidthQuestionNumber}</dt>
          <dd className={`${isOpen ? "mt-[4px]" : "mt-0"}`}>
            <p>{lineBrokenAnswerTexts}</p>
          </dd>
        </div>

        <div
          className={`${correction ? "text-primary" : "text-gray"} ${
            isOpen ? "mt-[16px]" : "mt-0"
          }`}
        >
          <dt>あなたの回答</dt>
          <dd className={`${isOpen ? "mt-[4px]" : "mt-0"}`}>
            <p>{lineBrokenYourAnswerTexts}</p>
          </dd>
        </div>
      </div>
    </div>
  );
};

export default TestResultAccordion;
