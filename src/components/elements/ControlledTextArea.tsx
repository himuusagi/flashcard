"use client";

import { useRef, type ChangeEventHandler, type FocusEventHandler } from "react";
import { useController, type UseControllerProps, type FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & {
  name: keyof T;
  placeholder: string;
  color?: "primary" | "gray";
  hasDefaultValue?: boolean;
};

const ControlledTextArea = <T extends FieldValues>(props: Props<T>) => {
  const { name, placeholder, color = "primary", hasDefaultValue = false, rules, control } = props;

  let styleOfTextAreaColor: string;
  let styleOfLabelColor: string;
  let styleOfBorderColor: string;
  switch (color) {
    case "primary": {
      styleOfTextAreaColor = "text-primary placeholder-primary-light focus:text-primary-dark";
      styleOfLabelColor = "text-primary peer-focus:text-primary-dark";
      styleOfBorderColor = "bg-primary peer-focus:bg-primary-dark";
      break;
    }
    case "gray": {
      styleOfTextAreaColor = "text-gray placeholder-gray-light focus:text-gray-dark";
      styleOfLabelColor = "text-gray peer-focus:text-gray-dark";
      styleOfBorderColor = "bg-gray peer-focus:bg-gray-dark";
      break;
    }
    default: {
      const wrongColor: never = color;
      throw new Error(`${wrongColor as string} is wrong type.`);
    }
  }

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  const { field } = useController<T>({ name, control, rules });

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    field.onChange(e);
    if (textareaRef.current) {
      const textareaStyle = textareaRef.current.style;
      textareaStyle.height = "auto";
      textareaStyle.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const onBlur: FocusEventHandler<HTMLTextAreaElement> = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      spanRef.current?.classList.add("inline");
      spanRef.current?.classList.remove("hidden");
    } else {
      spanRef.current?.classList.add("hidden");
      spanRef.current?.classList.remove("inline");
    }
  };

  return (
    <div className="relative">
      <textarea
        {...field}
        ref={textareaRef}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        rows={1}
        className={`peer h-[32px] min-h-[32px] w-full resize-none overflow-hidden px-[32px] py-[4px] outline-none duration-150 focus:placeholder-transparent ${styleOfTextAreaColor}`}
      />
      <span
        ref={spanRef}
        className={`absolute left-[32px] top-[-10px] text-[10px] duration-150 peer-focus:inline ${styleOfLabelColor} ${
          hasDefaultValue ? "inline" : "hidden"
        }
        `}
      >
        {placeholder}
      </span>
      <div
        className={`absolute bottom-1 left-0 h-[1px] w-full  duration-150 ${styleOfBorderColor}`}
      />
      <div
        className={`absolute bottom-1 left-0 h-[10px] w-[1px] duration-150 ${styleOfBorderColor}`}
      />
      <div
        className={`absolute bottom-1 right-0 h-[10px] w-[1px] duration-150 ${styleOfBorderColor}`}
      />
    </div>
  );
};

export default ControlledTextArea;
