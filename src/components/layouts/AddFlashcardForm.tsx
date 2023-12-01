"use client";

import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { addFlashcard } from "@/utils/server-actions/add-flashcard";
import { useSubmissionMessageContext } from "@/contexts/SubmissionMessageContext";
import Button from "../elements/Button";
import ControlledTextField from "../elements/ControlledTextField";
import SubmissionMessage from "../elements/SubmissionMessage";
import ValidationMessage from "../elements/ValidationMessage";

type FormValues = { title: string };

const AddFlashcardForm: FC = () => {
  const { isShowing, setIsShowing, type, setType, message, setMessage } =
    useSubmissionMessageContext();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: { title: "" },
  });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    const { success, message } = await addFlashcard(formData);
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
        <ValidationMessage type="error" text={errors.title?.message} />
      </div>

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

export default AddFlashcardForm;
