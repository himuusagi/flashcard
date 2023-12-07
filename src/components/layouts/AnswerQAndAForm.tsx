"use client";

import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { QA } from "@/types/data";
import { getFullWithNumber } from "@/utils/get-full-width-number";
import { useTestQAndAContext } from "@/contexts/TestQAndAContext";
import BoxWithTitle from "./BoxWithTitle";
import Button from "../elements/Button";
import ControlledTextArea from "../elements/ControlledTextArea";
import ValidationMessage from "../elements/ValidationMessage";

type FormValues = { yourAnswer: string };

type Props = { qas: QA[] };

const AnswerQAndAForm: FC<Props> = ({ qas }) => {
  const { questionNumber, setCurrentAnswer, setContentType } = useTestQAndAContext();

  const currentQuestionNumber = getFullWithNumber(questionNumber + 1);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setCurrentAnswer(data.yourAnswer);
    setContentType("check");
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
        <ControlledTextArea
          name="yourAnswer"
          control={control}
          rules={{ maxLength: { value: 400, message: "400文字以内で記入してください" } }}
          placeholder={`回答${currentQuestionNumber}`}
          color="gray"
        />
        <ValidationMessage type="error" text={errors.yourAnswer?.message} />
      </div>

      <div className="mt-[56px] text-center">
        <Button type="submit" text="回答" />
      </div>
    </form>
  );
};

export default AnswerQAndAForm;
