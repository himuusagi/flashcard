"use client";

import { useState, useEffect, type FC } from "react";
import QAndAProvider from "@/contexts/QAndAContext";
import { useSubmissionMessageContext } from "@/contexts/SubmissionMessageContext";
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

  const { type } = useSubmissionMessageContext();

  useEffect(() => {
    setContentType("q&a");
  }, [type]);

  const switchContentType = () => {
    setContentType((prev) => (prev === "q&a" ? "edit" : "q&a"));
  };

  return (
    <QAndAProvider
      flashcardId={flashcardId}
      qaId={qaId}
      questionText={questionText}
      answerText={answerText}
      isFirst={isFirst}
      isLast={isLast}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      contentType={contentType}
      setContentType={setContentType}
    >
      <div>
        <CardWithoutTitle>
          <div className="flex justify-between">
            {contentType === "q&a" ? (
              <QAndAAccordion />
            ) : (
              <div className="mx-auto">
                <QAndAEditMenuList />
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
    </QAndAProvider>
  );
};

export default QAndACard;
