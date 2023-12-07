"use client";

import { useEffect, type FC, type Dispatch, type SetStateAction } from "react";

type Props = {
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
  type: "success" | "pending" | "error" | undefined;
  setType: Dispatch<SetStateAction<"success" | "pending" | "error" | undefined>>;
  message: string | undefined;
  setMessage: Dispatch<SetStateAction<string | undefined>>;
};

const SubmissionMessage: FC<Props> = ({
  isShowing,
  setIsShowing,
  type,
  setType,
  message,
  setMessage,
}) => {
  useEffect(() => {
    if (type !== "pending" && isShowing) {
      setTimeout(() => {
        setIsShowing(false);
        setType(undefined);
        setMessage(undefined);
      }, 5000);
    }
  }, [isShowing, setIsShowing, type, setType, setMessage]);

  if (!isShowing) {
    return null;
  }

  let styleOfBorderColor: string;
  let styleOfButtonFocusColor: string;
  let styleOfButtonHoverColor: string;
  switch (type) {
    case "success": {
      styleOfBorderColor = "border-primary";
      styleOfButtonFocusColor = "focus:outline-primary-light";
      styleOfButtonHoverColor = "group-hover:bg-primary-light";
      break;
    }
    case "pending": {
      styleOfBorderColor = "border-gray";
      styleOfButtonFocusColor = "focus:outline-gray-light";
      styleOfButtonHoverColor = "group-hover:bg-gray-light";
      break;
    }
    case "error": {
      styleOfBorderColor = "border-accent";
      styleOfButtonFocusColor = "focus:outline-accent-light";
      styleOfButtonHoverColor = "group-hover:bg-accent-light";
      break;
    }
    default: {
      throw new Error("isShowingプロップス が false である必要があります");
    }
  }

  const successIcon = (
    <div className={`relative aspect-square w-[20px] rounded-full bg-primary`}>
      <span
        className={`absolute left-[14%] top-[60%] inline-block h-[2px] w-[6px] -translate-y-1/2 rotate-45 rounded bg-white`}
      />
      <span
        className={`absolute left-[27%] top-[50%] inline-block h-[2px] w-[12px] -translate-y-1/2 -rotate-45 rounded bg-white`}
      />
    </div>
  );

  const pendingIcon = (
    <div className="aspect-square w-[20px]">
      <svg className="animate-spin" height="20" width="20" viewBox="0 0 512 512">
        <path
          className="fill-gray"
          d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z"
        />
      </svg>
    </div>
  );

  const errorIcon = (
    <div className={`relative aspect-square w-[20px] rounded-full bg-accent`}>
      <span
        className={`absolute left-1/2 top-1/2 inline-block h-[2px] w-[12px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded bg-white`}
      />
      <span
        className={`absolute left-1/2 top-1/2 inline-block h-[2px] w-[12px] -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded bg-white`}
      />
    </div>
  );

  return (
    <div
      className={`inline-flex items-center rounded border-2 bg-white ${styleOfBorderColor} px-[8px] py-[4px]`}
    >
      {type === "success" && successIcon}
      {type === "pending" && pendingIcon}
      {type === "error" && errorIcon}

      <span className={`ml-[8px] text-sm text-gray-dark`}>{message}</span>

      {type !== "pending" && (
        <>
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
        </>
      )}
    </div>
  );
};

export default SubmissionMessage;
