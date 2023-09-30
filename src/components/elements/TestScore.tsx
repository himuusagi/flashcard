import { type FC } from "react";

type Props = {
  totalNumberOfQuestions: number;
  numberOfCorrectAnswers: number;
  numberOfWrongAnswers: number;
};

const TestScore: FC<Props> = ({
  totalNumberOfQuestions,
  numberOfCorrectAnswers,
  numberOfWrongAnswers,
}) => {
  return (
    <div className="text-center text-xl">
      <span className="text-primary">{numberOfCorrectAnswers}問正解</span>
      <span className="ml-[8px] text-gray">{numberOfWrongAnswers}問不正解</span>
      <span className="ml-[8px]">/</span>
      <span className="ml-[8px]">{totalNumberOfQuestions}問中</span>
    </div>
  );
};

export default TestScore;
