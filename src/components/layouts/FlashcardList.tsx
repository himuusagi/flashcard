"use client";

import { type FC } from "react";
import { type Flashcard } from "@/types/data";
import { useSubmissionMessageContext } from "@/contexts/SubmissionMessageContext";
import Card from "./Card";
import SubmissionMessage from "../elements/SubmissionMessage";

type Props = { flashcards: Flashcard[] };

const FlashcardList: FC<Props> = ({ flashcards }) => {
  const { isShowing, setIsShowing, type, setType, message, setMessage } =
    useSubmissionMessageContext();

  return (
    <ul className="flex flex-wrap">
      {flashcards.map(({ id, title }, index) => {
        const isFirst = index === 0;
        const isLast = index === flashcards.length - 1;

        return (
          <li
            key={index}
            className="ml-[40px] mt-[40px] w-[calc((100%-_80px)_/_3)] [&:nth-child(-n+3)]:mt-0 [&:nth-child(3n+1)]:ml-0"
          >
            <Card flashcardId={id} title={title} isFirst={isFirst} isLast={isLast} />
          </li>
        );
      })}

      {isShowing && (
        <div className="fixed bottom-[80px] left-1/2 -translate-x-1/2">
          <SubmissionMessage
            isShowing={isShowing}
            setIsShowing={setIsShowing}
            type={type}
            setType={setType}
            message={message}
            setMessage={setMessage}
          />
        </div>
      )}
    </ul>
  );
};

export default FlashcardList;
