"use client";

import { useState, type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import ControlledTextField from "../elements/ControlledTextField";
import Button from "../elements/Button";
import Message from "../elements/Message";

type FormValues = { title: string };

const AddFlashcardForm: FC = () => {
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { title: "" },
  });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    setSubmissionResult(null);
    try {
      const response = await fetch("/api/flashcard", {
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
        <ControlledTextField<FormValues>
          type="text"
          placeholder="タイトル"
          name="title"
          control={control}
          rules={{
            required: "記入してください",
            maxLength: { value: 20, message: "20文字以内で記入してください" },
          }}
        />
        <Message type="error" text={errors.title?.message} />
      </div>

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

export default AddFlashcardForm;
