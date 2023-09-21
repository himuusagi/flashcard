"use client";

import { useState, type FC } from "react";
import Arrow from "@/components/elements/Arrow";
import CardWithoutTitle from "@/components/layouts/BoxWithoutTitle";
import CloseButton from "../elements/CloseButton";
import EllipsisButton from "@/components/elements/EllipsisButton";
import QAndAAccordion from "@/components/layouts/QAndAAccordion";
import QAndAEditMenuList from "./QAndAEditMenuList";

type Props = {
  questionText: string;
  answerText: string;
  editQuestionHref: string;
  editAnswerHref: string;
  orderForwardHref: string;
  orderBackHref: string;
  deleteQAndAHref: string;
};

const QAndACard: FC<Props> = ({
  questionText,
  answerText,
  editQuestionHref,
  editAnswerHref,
  orderForwardHref,
  orderBackHref,
  deleteQAndAHref,
}) => {
  const [contentType, setContentType] = useState<"q&a" | "edit">("q&a");
  const [isOpen, setIsOpen] = useState(false);

  const switchContentType = () => {
    if (contentType === "q&a") {
      setContentType("edit");
    } else {
      setContentType("q&a");
    }
  };

  return (
    <div>
      <CardWithoutTitle>
        <div className="flex justify-between">
          {contentType === "q&a" ? (
            <QAndAAccordion
              questionText={questionText}
              answerText={answerText}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          ) : (
            <div className="mx-auto">
              <QAndAEditMenuList
                editQuestionHref={editQuestionHref}
                editAnswerHref={editAnswerHref}
                orderForwardHref={orderForwardHref}
                orderBackHref={orderBackHref}
                deleteQAndAHref={deleteQAndAHref}
              />
            </div>
          )}

          <div className="ml-[12px]">
            {contentType === "q&a" ? (
              <div className="flex items-center">
                <EllipsisButton size="small" onClick={switchContentType} />
                <Arrow direction={isOpen ? "up" : "down"} className="ml-[12px]" />
              </div>
            ) : (
              <div className="flex pr-[24px]">
                <CloseButton size="small" onClick={switchContentType} />
              </div>
            )}
          </div>
        </div>
      </CardWithoutTitle>
    </div>
  );
};

export default QAndACard;
