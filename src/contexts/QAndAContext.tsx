import {
  createContext,
  useContext,
  type FC,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type QAndAContextType = {
  flashcardId: number;
  qaId: number;
  questionText: string;
  answerText: string;
  isFirst: boolean;
  isLast: boolean;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  contentType: "q&a" | "edit";
  setContentType: Dispatch<SetStateAction<"q&a" | "edit">>;
};

type Props = QAndAContextType & {
  children: ReactNode;
};

const QAndAContext = createContext<QAndAContextType | undefined>(undefined);

export const useQAndAContext = () => {
  const context = useContext(QAndAContext);
  if (!context) {
    throw new Error("useQAndAContext は QAndAProviderの中で使用する必要があります");
  }
  return context;
};

const QAndAProvider: FC<Props> = ({
  flashcardId,
  qaId,
  questionText,
  answerText,
  isFirst,
  isLast,
  isOpen,
  setIsOpen,
  contentType,
  setContentType,
  children,
}) => {
  return (
    <QAndAContext.Provider
      value={{
        flashcardId,
        qaId,
        questionText,
        answerText,
        isFirst,
        isLast,
        isOpen,
        setIsOpen,
        contentType,
        setContentType,
      }}
    >
      {children}
    </QAndAContext.Provider>
  );
};

export default QAndAProvider;
