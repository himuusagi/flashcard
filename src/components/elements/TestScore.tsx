import { type FC } from "react";
import { getFullWithNumber } from "@/utils/get-full-width-number";

type Props = {
  totalNumberOfQuestions: number;
  numberOfCorrectAnswers: number;
  numberOfIncorrectAnswers: number;
};

const TestScore: FC<Props> = ({
  totalNumberOfQuestions,
  numberOfCorrectAnswers,
  numberOfIncorrectAnswers,
}) => {
  return (
    <div className="text-center text-xl">
      <span className="text-primary">{getFullWithNumber(numberOfCorrectAnswers)}問正解</span>
      <span className="ml-[8px] text-gray">
        {getFullWithNumber(numberOfIncorrectAnswers)}問不正解
      </span>
      <span className="ml-[8px]">/</span>
      <span className="ml-[8px]">{getFullWithNumber(totalNumberOfQuestions)}問中</span>
    </div>
  );
};

export default TestScore;
