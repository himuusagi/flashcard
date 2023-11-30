"use client";

import {
  createContext,
  useContext,
  useState,
  type FC,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type SubmissionMessageContextType = {
  isShowing: boolean;
  setIsShowing: Dispatch<SetStateAction<boolean>>;
  type: "success" | "error" | undefined;
  setType: Dispatch<SetStateAction<"success" | "error" | undefined>>;
  message: string | undefined;
  setMessage: Dispatch<SetStateAction<string | undefined>>;
};

const SubmissionMessageContext = createContext<SubmissionMessageContextType | undefined>(undefined);

export const useSubmissionMessageContext = () => {
  const context = useContext(SubmissionMessageContext);
  if (!context) {
    throw new Error(
      "useSubmissionMessageContext は SubmissionMessageProvider の中で使用する必要があります"
    );
  }
  return context;
};

type Props = { children: ReactNode };

const SubmissionMessageProvider: FC<Props> = ({ children }) => {
  const [isShowing, setIsShowing] = useState<boolean>(false);
  const [type, setType] = useState<"success" | "error" | undefined>(undefined);
  const [message, setMessage] = useState<string | undefined>(undefined);

  return (
    <SubmissionMessageContext.Provider
      value={{ isShowing, setIsShowing, type, setType, message, setMessage }}
    >
      {children}
    </SubmissionMessageContext.Provider>
  );
};

export default SubmissionMessageProvider;
