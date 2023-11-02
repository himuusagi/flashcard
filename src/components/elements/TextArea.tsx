"use client";

import { useState, useRef, type FC, type ChangeEventHandler } from "react";

type Props = {
  name?: string;
  placeholder: string;
  color?: "primary" | "gray";
};

const TextArea: FC<Props> = ({ placeholder, color = "primary" }) => {
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

  const [value, setValue] = useState("");

  const textarea = useRef<HTMLTextAreaElement | null>(null);

  const onChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setValue(e.target.value);
    if (textarea.current) {
      const textareaStyle = textarea.current.style;
      textareaStyle.height = "auto";
      textareaStyle.height = `${textarea.current.scrollHeight}px`;
    }
  };

  return (
    <div className="relative">
      <textarea
        ref={textarea}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        rows={1}
        className={`peer h-[32px] min-h-[32px] w-full resize-none overflow-hidden px-[32px] py-[4px] outline-none duration-150 focus:placeholder-transparent ${styleOfTextAreaColor}`}
      />
      <span
        className={`absolute left-[32px] top-[-10px] text-[10px] duration-150 peer-focus:inline ${styleOfLabelColor}
        ${value.length > 0 ? "inline" : "hidden"}
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

export default TextArea;
