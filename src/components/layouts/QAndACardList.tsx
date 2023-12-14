"use client";

import { type FC } from "react";
import { type QA } from "@/types/data";
import { useSubmissionMessageContext } from "@/contexts/SubmissionMessageContext";
import Button from "../elements/Button";
import QAndACard from "./QAndACard";
import SubmissionMessage from "../elements/SubmissionMessage";

type Props = {
  flashcardId: number;
  qas: QA[];
};

const QAndACardList: FC<Props> = ({ flashcardId, qas }) => {
  const { isShowing, setIsShowing, type, setType, message, setMessage } =
    useSubmissionMessageContext();

  return (
    <div>
      <ul>
        {qas.map(({ id, question, answer }, index) => {
          const isFirst = index === 0;
          const isLast = index === qas.length - 1;

          return (
            <li key={id} className="mt-[32px] first:mt-0">
              <QAndACard
                flashcardId={flashcardId}
                qaId={id}
                questionText={question}
                answerText={answer}
                isFirst={isFirst}
                isLast={isLast}
              />
            </li>
          );
        })}
      </ul>

      <div className="mt-[56px] text-center">
        <Button type="link" text="問題の追加" href={`/flashcards/${flashcardId}/qa/new`} />
      </div>

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
    </div>
  );
};

export default QAndACardList;
