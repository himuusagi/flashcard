import { createContext, useContext, type FC, type ReactNode } from "react";

type TestResultContextType = {
  questionNumber: number;
  question: string;
  answer: string;
  yourAnswer: string;
  correction: boolean;
};

const TestResultContext = createContext<TestResultContextType | undefined>(undefined);

export const useTestResultContext = () => {
  const context = useContext(TestResultContext);
  if (!context) {
    throw new Error("useTestResultContext は TestResultProvider の中で使用する必要があります");
  }
  return context;
};

type Props = {
  questionNumber: number;
  question: string;
  answer: string;
  yourAnswer: string;
  correction: boolean;
  children: ReactNode;
};

const TestResultProvider: FC<Props> = ({
  questionNumber,
  question,
  answer,
  yourAnswer,
  correction,
  children,
}) => {
  return (
    <TestResultContext.Provider
      value={{
        questionNumber,
        question,
        answer,
        yourAnswer,
        correction,
      }}
    >
      {children}
    </TestResultContext.Provider>
  );
};

export default TestResultProvider;
