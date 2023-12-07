"use client";

import { type FC } from "react";
import { QA } from "@/types/data";
import { useTestQAndAContext } from "@/contexts/TestQAndAContext";
import TestResultProvider from "@/contexts/TestResultContext";
import Button from "../elements/Button";
import Heading2 from "../elements/Heading2";
import TestResultCard from "./TestResultCard";
import TestScore from "../elements/TestScore";

type Props = {
  qas: QA[];
};

const TestResult: FC<Props> = ({ qas }) => {
  const { yourAnswerStatuses } = useTestQAndAContext();

  const totalNumberOfQuestions = yourAnswerStatuses.length;
  const numberOfCorrectAnswers = yourAnswerStatuses.filter(({ correction }) => correction).length;
  const numberOfIncorrectAnswers = yourAnswerStatuses.filter(
    ({ correction }) => !correction
  ).length;

  return (
    <div>
      <Heading2 text="成績" />

      <TestScore
        totalNumberOfQuestions={totalNumberOfQuestions}
        numberOfCorrectAnswers={numberOfCorrectAnswers}
        numberOfIncorrectAnswers={numberOfIncorrectAnswers}
      />

      <ul className="mt-[40px]">
        {qas.map(({ order, question, answer }, index) => {
          const { correction, yourAnswer } = yourAnswerStatuses[index];

          return (
            <li key={index} className="mt-[32px] first:mt-0">
              <TestResultProvider
                questionNumber={order}
                question={question}
                answer={answer}
                yourAnswer={yourAnswer || ""}
                correction={correction}
              >
                <TestResultCard />
              </TestResultProvider>
            </li>
          );
        })}
      </ul>

      <div className="mt-[56px] text-center">
        <Button type="link" href={`/`} text="終了" />
      </div>
    </div>
  );
};

export default TestResult;
