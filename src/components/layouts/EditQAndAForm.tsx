"use client";

import { useState, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Button from "../elements/Button";
import ControlledTextArea from "../elements/ControlledTextArea";
import Message from "../elements/Message";

type FormValues = { flashcardId: number; qaId: number; question: string; answer: string };

type Props = { flashcardId: number; qaId: number; question: string; answer: string };

const EditQAndAForm: FC<Props> = ({ flashcardId, qaId, question, answer }) => {
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { flashcardId, qaId, question, answer } });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    setSubmissionResult(null);

    try {
      const response = await fetch("/api/q-and-a", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = (await response.json()) as { message: string };
      setSubmissionResult({ success: response.ok, message: data.message });
    } catch (error) {
      setSubmissionResult({ success: false, message: (error as { message: string }).message });
    }
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
          hasDefaultValue={true}
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
          hasDefaultValue={true}
          control={control}
          rules={{
            required: "記入してください",
            maxLength: { value: 400, message: "400文字以内で記入してください" },
          }}
        />
        <Message type="error" text={errors.answer?.message} />
      </div>

      <input {...register("flashcardId")} type="hidden" />
      <input {...register("qaId")} type="hidden" />

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

export default EditQAndAForm;
