"use client";

import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { addQA } from "@/utils/server-actions/add-qa";
import { useSubmissionMessageContext } from "@/contexts/SubmissionMessageContext";
import Button from "../elements/Button";
import ControlledTextArea from "../elements/ControlledTextArea";
import SubmissionMessage from "../elements/SubmissionMessage";
import ValidationMessage from "../elements/ValidationMessage";

type FormValues = { flashcardId: number; question: string; answer: string };

type Props = { flashcardId: number };

const AddQAndAForm: FC<Props> = ({ flashcardId }) => {
  const { isShowing, setIsShowing, type, setType, message, setMessage } =
    useSubmissionMessageContext();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { flashcardId, question: "", answer: "" } });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    const { success, message } = await addQA(formData);
    setIsShowing(true);
    setType(success ? "success" : "error");
    setMessage(message);
    reset();
  };

  return (
    <form
      // @ts-expect-error actionの不要なタイプエラー
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      action={handleSubmit(onSubmit)}
    >
      <div>
        <ControlledTextArea<FormValues>
          placeholder="問題文"
          name="question"
          control={control}
          rules={{
            required: "記入してください",
            maxLength: { value: 200, message: "200文字以内で記入してください" },
          }}
        />
        <ValidationMessage type="error" text={errors.question?.message} />
      </div>

      <div className="mt-[32px]">
        <ControlledTextArea<FormValues>
          placeholder="解答文"
          name="answer"
          control={control}
          rules={{
            required: "記入してください",
            maxLength: { value: 400, message: "400文字以内で記入してください" },
          }}
        />
        <ValidationMessage type="error" text={errors.answer?.message} />
      </div>

      <input {...register("flashcardId")} type="hidden" />

      <div className="mt-[32px] text-center">
        <Button type="submit" disabled={isSubmitting} text={isSubmitting ? "送信中" : "送信"} />
      </div>

      {isShowing && (
        <div className="mt-8 text-center">
          <SubmissionMessage
            isShowing={isShowing}
            setIsShowing={setIsShowing}
            type={type}
            setType={setType}
            message={message}
            setMessage={setMessage}
          />
        </div>
      )}
    </form>
  );
};

export default AddQAndAForm;
