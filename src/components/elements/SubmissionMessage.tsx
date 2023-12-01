"use client";

import { useEffect, type FC, type Dispatch, type SetStateAction } from "react";

type Props = {
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
  type: "success" | "error" | undefined;
  setType: Dispatch<SetStateAction<"success" | "error" | undefined>>;
  message: string | undefined;
  setMessage: Dispatch<SetStateAction<string | undefined>>;
};

const Message: FC<Props> = ({ isShowing, setIsShowing, type, setType, message, setMessage }) => {
  useEffect(() => {
    if (isShowing) {
      setTimeout(() => {
        setIsShowing(false);
        setType(undefined);
        setMessage(undefined);
      }, 5000);
    }
  }, [isShowing, setIsShowing, setType, setMessage]);

  if (!isShowing) {
    return null;
  }

  let styleOfBorderColor: string;
  let styleOfIconColor: string;
  let styleOfButtonFocusColor: string;
  let styleOfButtonHoverColor: string;
  let styleOfIconLeft: string;
  let styleOfIconRight: string;
  switch (type) {
    case "success": {
      styleOfBorderColor = "border-primary";
      styleOfIconColor = "bg-primary";
      styleOfButtonFocusColor = "focus:outline-primary-light";
      styleOfButtonHoverColor = "group-hover:bg-primary-light";
      styleOfIconLeft = "left-[14%] top-[60%] w-[6px]";
      styleOfIconRight = "left-[27%] top-[50%] w-[12px]";
      break;
    }
    case "error": {
      styleOfBorderColor = "border-accent";
      styleOfIconColor = "bg-accent";
      styleOfButtonFocusColor = "focus:outline-accent-light";
      styleOfButtonHoverColor = "group-hover:bg-accent-light";
      styleOfIconLeft = "left-1/2 top-1/2 w-[12px] -translate-x-1/2";
      styleOfIconRight = "left-1/2 top-1/2 w-[12px] -translate-x-1/2";
      break;
    }
    default: {
      throw new Error("isShowingプロップス が false である必要があります");
    }
  }

  return (
    <div
      className={`inline-flex items-center rounded border-2 bg-white ${styleOfBorderColor} px-[8px] py-[4px]`}
    >
      <div className={`relative aspect-square w-[20px] rounded-full ${styleOfIconColor}`}>
        <span
          className={`absolute inline-block h-[2px] ${styleOfIconLeft} -translate-y-1/2 rotate-45 rounded bg-white`}
        />
        <span
          className={`absolute inline-block h-[2px] ${styleOfIconRight} -translate-y-1/2 -rotate-45 rounded bg-white`}
        />
      </div>

      <span className={`ml-[8px] text-sm text-gray-dark`}>{message}</span>

      <span className="ml-[8px] inline-block h-[24px] w-[1px] rounded bg-gray-light" />

      <button
        onClick={() => {
          setIsShowing(false);
          setType(undefined);
          setMessage(undefined);
        }}
        className={`group relative ml-[8px] aspect-square w-[20px] cursor-pointer ${styleOfButtonFocusColor}`}
      >
        <span
          className={`absolute left-1/2 top-1/2 inline-block h-[1.5px] w-[20px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-gray duration-200 ${styleOfButtonHoverColor}`}
        />
        <span
          className={`absolute left-1/2 top-1/2 inline-block h-[1.5px] w-[20px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded bg-gray duration-200 ${styleOfButtonHoverColor}`}
        />
      </button>
    </div>
  );
};

export default Message;
