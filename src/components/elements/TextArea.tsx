"use client";

import { useState, useRef, type FC, type ChangeEventHandler } from "react";

type Props = {
  name?: string;
  placeholder: string;
  color?: "primary" | "gray";
};

const TextArea: FC<Props> = ({ placeholder, color = "primary" }) => {
  let textAreaStyleOfColor: string;
  let labelStyleOfColor: string;
  let focusedLabelStyleOfColor: string;
  let borderStyleOfColor: string;
  switch (color) {
    case "primary": {
      textAreaStyleOfColor = "text-primary placeholder-primary-light focus:text-primary-dark";
      labelStyleOfColor = "peer-focus:text-primary-dark";
      focusedLabelStyleOfColor = "text-primary";
      borderStyleOfColor = "bg-primary peer-focus:bg-primary-dark";
      break;
    }
    case "gray": {
      textAreaStyleOfColor = "text-gray placeholder-gray-light focus:text-gray-dark";
      labelStyleOfColor = "peer-focus:text-gray-dark";
      focusedLabelStyleOfColor = "text-gray";
      borderStyleOfColor = "bg-gray peer-focus:bg-gray-dark";
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
        className={`peer h-[32px] min-h-[32px] w-full resize-none overflow-hidden px-[32px] py-[4px] outline-none duration-150 focus:placeholder-transparent ${textAreaStyleOfColor}`}
      />
      <span
        className={`absolute left-[32px] top-[-10px] text-[10px] duration-150 ${labelStyleOfColor}
        ${value.length > 0 ? focusedLabelStyleOfColor : "text-transparent"}
        `}
      >
        {placeholder}
      </span>
      <div
        className={`absolute bottom-1 left-0 h-[1px] w-full  duration-150 ${borderStyleOfColor}`}
      />
      <div
        className={`absolute bottom-1 left-0 h-[10px] w-[1px] duration-150 ${borderStyleOfColor}`}
      />
      <div
        className={`absolute bottom-1 right-0 h-[10px] w-[1px] duration-150 ${borderStyleOfColor}`}
      />
    </div>
  );
};

export default TextArea;
