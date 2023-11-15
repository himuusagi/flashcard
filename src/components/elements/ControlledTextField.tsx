"use client";

import { useRef, type FocusEventHandler } from "react";
import { useController, type UseControllerProps, type FieldValues } from "react-hook-form";

type Props<T extends FieldValues> = UseControllerProps<T> & {
  type: "text" | "password";
  name?: keyof FieldValues;
  placeholder: string;
  hasDefaultValue?: boolean;
};

const ControlledTextField = <T extends FieldValues>(props: Props<T>) => {
  const { type, name, placeholder, hasDefaultValue = false, rules, control } = props;
  const { field } = useController<T>({ name, control, rules });

  const spanRef = useRef<HTMLSpanElement | null>(null);

  const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
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
      <input
        {...field}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        className="peer w-full px-[32px] py-[4px] text-primary placeholder-primary-light outline-none duration-150 focus:text-primary-dark focus:placeholder-transparent"
      />
      <span
        ref={spanRef}
        className={`absolute left-[32px] top-[-10px] text-[10px] text-primary duration-150 peer-focus:inline peer-focus:text-primary-dark ${
          hasDefaultValue ? "inline" : "hidden"
        }`}
      >
        {placeholder}
      </span>
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-primary duration-150 peer-focus:bg-primary-dark" />
      <div className="absolute bottom-0 left-0 h-[10px] w-[1px] bg-primary duration-150 peer-focus:bg-primary-dark" />
      <div className="absolute bottom-0 right-0 h-[10px] w-[1px] bg-primary duration-150 peer-focus:bg-primary-dark" />
    </div>
  );
};

export default ControlledTextField;
