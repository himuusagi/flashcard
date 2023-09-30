"use client";

import { useState, type FC } from "react";
import BoxWithoutTitle from "./BoxWithoutTitle";
import CheckingAnswerAccordion from "./CheckingAnswerAccordion";
import Label from "../elements/Label";
import Arrow from "../elements/Arrow";

type Props = {
  questionText: string;
  answerText: string;
  yourAnswerText: string;
  trueOrFalse: boolean;
};

const CheckingAnswerCard: FC<Props> = ({
  questionText,
  answerText,
  yourAnswerText,
  trueOrFalse,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BoxWithoutTitle borderColor={trueOrFalse ? "primary" : "gray"}>
      <div className="flex items-start justify-between">
        <CheckingAnswerAccordion
          answerText={answerText}
          questionText={questionText}
          yourAnswerText={yourAnswerText}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          trueOrFalse={trueOrFalse}
        />

        <div className="ml-[8px]">
          <div className="flex items-center">
            <Label
              text={trueOrFalse ? "正解" : "不正解"}
              color={trueOrFalse ? "primary" : "gray"}
            />
            <Arrow
              direction={isOpen ? "up" : "down"}
              color={trueOrFalse ? "primary" : "gray"}
              className="ml-[8px]"
            />
          </div>
        </div>
      </div>
    </BoxWithoutTitle>
  );
};

export default CheckingAnswerCard;
