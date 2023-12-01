"use client";

import { type FC } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { editFlashcard } from "@/utils/server-actions/edit-flashcard";
import { useSubmissionMessageContext } from "@/contexts/SubmissionMessageContext";
import Button from "../elements/Button";
import ControlledTextField from "../elements/ControlledTextField";
import SubmissionMessage from "../elements/SubmissionMessage";
import ValidationMessage from "../elements/ValidationMessage";

type FormValues = { id: number; title: string };

type Props = {
  flashcardId: number;
  flashcardTitle: string;
};

const EditFlashcardForm: FC<Props> = ({ flashcardId, flashcardTitle }) => {
  const { isShowing, setIsShowing, type, setType, message, setMessage } =
    useSubmissionMessageContext();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ defaultValues: { id: flashcardId, title: flashcardTitle } });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    const { success, message } = await editFlashcard(formData);
    setIsShowing(true);
    setType(success ? "success" : "error");
    setMessage(message);
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
          name="title"
          placeholder="タイトル"
          hasDefaultValue={true}
          control={control}
          rules={{
            required: "記入してください",
            maxLength: { value: 20, message: "20文字以内で記入してください" },
          }}
        />
        <ValidationMessage type="error" text={errors.title?.message} />
      </div>

      <input type="hidden" {...register("id")} />

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

export default EditFlashcardForm;
