"use client";

import { type FC, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import Button from "../elements/Button";
import ControlledTextField from "../elements/ControlledTextField";
import Message from "../elements/Message";

type FormValues = { id: number; title: string };

type Props = {
  flashcardId: number;
  flashcardTitle: string;
};

const EditFlashcardForm: FC<Props> = ({ flashcardId, flashcardTitle }) => {
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { id: flashcardId, title: flashcardTitle } });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    setSubmissionResult(null);
    try {
      const response = await fetch("/api/flashcard", {
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
        <ControlledTextField<FormValues>
          type="text"
          name="title"
          placeholder="タイトル"
          control={control}
          rules={{
            required: "記入してください",
            maxLength: { value: 20, message: "20文字以内で記入してください" },
          }}
        />
        <Message type="error" text={errors.title?.message} />
      </div>

      <input type="hidden" {...register("id")} />

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

export default EditFlashcardForm;
