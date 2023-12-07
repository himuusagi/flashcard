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

type YourAnswerStatus = { correction: boolean; yourAnswer: string | undefined };

type TestQAndAContextType = {
  questionNumber: number;
  setQuestionNumber: Dispatch<SetStateAction<number>>;
  currentAnswer: string | undefined;
  setCurrentAnswer: Dispatch<SetStateAction<string | undefined>>;
  contentType: "answer" | "check" | "result";
  setContentType: Dispatch<SetStateAction<"answer" | "check" | "result">>;
  yourAnswerStatuses: YourAnswerStatus[];
  setYourAnswerStatuses: Dispatch<SetStateAction<YourAnswerStatus[]>>;
};

const TestQAndAContext = createContext<TestQAndAContextType | undefined>(undefined);

export const useTestQAndAContext = () => {
  const context = useContext(TestQAndAContext);
  if (!context) {
    throw new Error("useTestQAndAContext は TestQAndAProvider の中で使用する必要があります");
  }
  return context;
};

type Props = { children: ReactNode };

const TetsQAndAProvider: FC<Props> = ({ children }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<string | undefined>(undefined);
  const [contentType, setContentType] = useState<"answer" | "check" | "result">("answer");
  const [yourAnswerStatuses, setYourAnswerStatuses] = useState<YourAnswerStatus[]>([]);

  return (
    <TestQAndAContext.Provider
      value={{
        questionNumber,
        setQuestionNumber,
        currentAnswer,
        setCurrentAnswer,
        contentType,
        setContentType,
        yourAnswerStatuses,
        setYourAnswerStatuses,
      }}
    >
      {children}
    </TestQAndAContext.Provider>
  );
};

export default TetsQAndAProvider;
