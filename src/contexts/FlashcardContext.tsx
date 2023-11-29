import {
  createContext,
  useContext,
  type FC,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from "react";

type FlashcardContextType = {
  flashcardId: number;
  title: string;
  isFirst: boolean;
  isLast: boolean;
  setContentType: Dispatch<SetStateAction<"top" | "edit">>;
  switchContent: () => void;
};

const FlashcardContext = createContext<FlashcardContextType | undefined>(undefined);

export const useFlashcardContext = () => {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error("useFlashcardContext は FlashcardProvider の中で使用する必要があります");
  }
  return context;
};

type Props = FlashcardContextType & { children: ReactNode };

const FlashcardProvider: FC<Props> = ({
  flashcardId,
  title,
  isFirst,
  isLast,
  setContentType,
  switchContent,
  children,
}) => {
  return (
    <FlashcardContext.Provider
      value={{
        flashcardId,
        title,
        isFirst,
        isLast,
        setContentType,
        switchContent,
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
};

export default FlashcardProvider;
