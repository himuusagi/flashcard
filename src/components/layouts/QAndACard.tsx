"use client";

import { useState, type FC } from "react";
import Arrow from "@/components/elements/Arrow";
import CardWithoutTitle from "@/components/layouts/BoxWithoutTitle";
import CloseButton from "../elements/CloseButton";
import EllipsisButton from "@/components/elements/EllipsisButton";
import QAndAAccordion from "@/components/layouts/QAndAAccordion";
import QAndAEditMenuList from "./QAndAEditMenuList";

type Props = {
  flashcardId: number;
  qaId: number;
  questionText: string;
  answerText: string;
  isFirst: boolean;
  isLast: boolean;
};

const QAndACard: FC<Props> = ({ flashcardId, qaId, questionText, answerText, isFirst, isLast }) => {
  const [contentType, setContentType] = useState<"q&a" | "edit">("q&a");
  const [isOpen, setIsOpen] = useState(false);

  const switchContentType = () => {
    setContentType((prev) => (prev === "q&a" ? "edit" : "q&a"));
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
                flashcardId={flashcardId}
                qaId={qaId}
                isFirst={isFirst}
                isLast={isLast}
                setContentType={setContentType}
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
