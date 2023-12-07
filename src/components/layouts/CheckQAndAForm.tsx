"use client";

import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { QA } from "@/types/data";
import { getFullWithNumber } from "@/utils/get-full-width-number";
import { useTestQAndAContext } from "@/contexts/TestQAndAContext";
import BoxWithTitle from "./BoxWithTitle";
import GradingButton from "../elements/GradingButton";

type FormValues = { yourAnswer: string; correction: "correct" | "incorrect" };

type Props = { qas: QA[] };

const CheckQAndAForm: FC<Props> = ({ qas }) => {
  const {
    questionNumber,
    setQuestionNumber,
    currentAnswer,
    setCurrentAnswer,
    setContentType,
    setYourAnswerStatuses,
  } = useTestQAndAContext();

  const currentQuestionNumber = getFullWithNumber(questionNumber + 1);

  const { handleSubmit, setValue } = useForm<FormValues>({
    defaultValues: { yourAnswer: currentAnswer },
  });

  const onSubmit: SubmitHandler<FormValues> = ({ correction, yourAnswer }) => {
    setYourAnswerStatuses((prev) => [
      ...prev,
      { correction: correction === "correct", yourAnswer },
    ]);

    if (questionNumber >= qas.length - 1) {
      setContentType("result");
      return;
    }

    setQuestionNumber((prev) => prev + 1);
    setContentType("answer");
    setCurrentAnswer(undefined);
  };
  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <BoxWithTitle title={`問題${currentQuestionNumber}`} text={qas[questionNumber].question} />
      </div>

      <div className="mt-[40px]">
        <BoxWithTitle
          color="dark"
          title={`解答${currentQuestionNumber}`}
          text={qas[questionNumber].answer}
        />
      </div>

      <div className="mt-[40px]">
        <BoxWithTitle color="black" title="あなたの回答" text={currentAnswer || ""} />
        <input type="hidden" name="yourAnswer" />
      </div>

      <div className="mt-[56px] text-center">
        <GradingButton
          correction="correct"
          text="正解"
          onClick={() => setValue("correction", "correct")}
        />
        <GradingButton
          correction="incorrect"
          text="不正解"
          onClick={() => setValue("correction", "incorrect")}
          className="ml-[40px]"
        />
      </div>
    </form>
  );
};

export default CheckQAndAForm;
