"use client";

import { useState, useRef, type FC, type ChangeEventHandler } from "react";

type Props = {
  placeholder?: string;
};

const TextArea: FC<Props> = ({ placeholder }) => {
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
        className={`peer h-[32px] min-h-[32px] w-full resize-none overflow-hidden px-[32px] py-[4px] text-primary placeholder-primary-light outline-none duration-150 focus:text-primary-dark focus:placeholder-transparent`}
      />
      <span
        className={`absolute left-[32px] top-[-10px] text-[10px] duration-150 peer-focus:text-primary-dark
        ${value.length > 0 ? "text-primary focus:text-primary-dark" : "text-transparent"}
        `}
      >
        {placeholder}
      </span>
      <div className="absolute bottom-1 left-0 h-[1px] w-full bg-primary duration-150 peer-focus:bg-primary-dark" />
      <div className="absolute bottom-1 left-0 h-[10px] w-[1px] bg-primary duration-150 peer-focus:bg-primary-dark" />
      <div className="absolute bottom-1 right-0 h-[10px] w-[1px] bg-primary duration-150 peer-focus:bg-primary-dark" />
    </div>
  );
};

export default TextArea;
