"use client";

import { type FC, useState } from "react";

type Props = {
  type: "text" | "password";
  name?: string;
  placeholder: string;
};

const TextField: FC<Props> = ({ type, name, placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <div className="relative">
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="peer w-full px-[32px] py-[4px] text-primary placeholder-primary-light outline-none duration-150 focus:text-primary-dark focus:placeholder-transparent"
      />
      <span
        className={`absolute left-[32px] top-[-10px] text-[10px] text-primary duration-150 peer-focus:inline peer-focus:text-primary-dark
        ${value.length > 0 ? "inline" : "hidden"}
        `}
      >
        {placeholder}
      </span>
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-primary duration-150 peer-focus:bg-primary-dark" />
      <div className="absolute bottom-0 left-0 h-[10px] w-[1px] bg-primary duration-150 peer-focus:bg-primary-dark" />
      <div className="absolute bottom-0 right-0 h-[10px] w-[1px] bg-primary duration-150 peer-focus:bg-primary-dark" />
    </div>
  );
};

export default TextField;
