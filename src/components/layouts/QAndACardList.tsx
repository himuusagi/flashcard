import { type FC } from "react";
import { type QA } from "@/types/data";
import QAndACard from "./QAndACard";

type Props = {
  flashcardId: number;
  qas: QA[];
};

const QAndACardList: FC<Props> = ({ flashcardId, qas }) => {
  return (
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
  );
};

export default QAndACardList;
