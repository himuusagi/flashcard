"use client";

import { useState, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../elements/Button";
import Message from "../elements/Message";
import ControlledTextArea from "../elements/ControlledTextArea";

type FormValues = { flashcardId: number; question: string; answer: string };

type Props = { flashcardId: number };

const AddQAndAForm: FC<Props> = ({ flashcardId }) => {
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { flashcardId, question: "", answer: "" } });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    setSubmissionResult(null);
    try {
      const response = await fetch("/api/q-and-a", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await response.json()) as { message: string };
      setSubmissionResult({ success: response.ok, message: data.message });
    } catch (error) {
      setSubmissionResult({ success: false, message: (error as { message: string }).message });
    }

    reset();
  };

  return (
    <form
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
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
        <Message type="error" text={errors.question?.message} />
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
        <Message type="error" text={errors.answer?.message} />
      </div>

      <input {...register("flashcardId")} type="hidden" />

      <div className="mt-[32px] text-center">
        <Button type="submit" disabled={isSubmitting} text={isSubmitting ? "送信中" : "送信"} />
        {submissionResult && (
          <Message
            type={submissionResult.success ? "success" : "error"}
            text={submissionResult.message}
          />
        )}
      </div>
    </form>
  );
};

export default AddQAndAForm;
