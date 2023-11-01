"use client";

import { type FC } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import ControlledTextField from "../elements/ControlledTextField";
import Button from "../elements/Button";
import Message from "../elements/Message";

type FormValues = { title: string };

const AddFlashcardForm: FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { title: "" },
  });

  const onSubmit: SubmitHandler<FormValues> = () => {
    console.log("送信！");
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
        <Button type="submit" text="登録する" />
      </div>
    </form>
  );
};

export default AddFlashcardForm;
