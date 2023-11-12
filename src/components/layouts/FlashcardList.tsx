import { type FC } from "react";
import Card from "./Card";
import { type Flashcard } from "@/types/data";

type Props = { flashcards: Flashcard[] };

const FlashcardList: FC<Props> = ({ flashcards }) => {
  return (
    <ul className="flex flex-wrap">
      {flashcards.map(({ id, order, title }, index) => {
        const isFirst = index === 0;
        const isLast = index === flashcards.length - 1;

        return (
          <li
            key={index}
            className="ml-[40px] mt-[40px] w-[calc((100%-_80px)_/_3)] [&:nth-child(-n+3)]:mt-0 [&:nth-child(3n+1)]:ml-0"
          >
            <Card
              flashcardId={id}
              flashcardOrder={order}
              title={title}
              isFirst={isFirst}
              isLast={isLast}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default FlashcardList;
