"use client";

import { useState, type FC } from "react";
import FlashcardProvider from "@/contexts/FlashcardContext";
import CardTopMenu from "./CardTopMenu";
import CardEditMenu from "./CardEditMenu";

type Props = {
  flashcardId: number;
  title: string;
  isFirst: boolean;
  isLast: boolean;
};

const Card: FC<Props> = ({ flashcardId, title, isFirst, isLast }) => {
  const [contentType, setContentType] = useState<"top" | "edit">("top");

  const switchContent = () => {
    setContentType((prev) => (prev === "top" ? "edit" : "top"));
  };

  return (
    <FlashcardProvider
      flashcardId={flashcardId}
      title={title}
      isFirst={isFirst}
      isLast={isLast}
      setContentType={setContentType}
      switchContent={switchContent}
    >
      <div className="min-h-[200px] rounded-[4px] border-2 border-primary shadow-lg shadow-primary-light">
        {contentType === "top" ? <CardTopMenu /> : <CardEditMenu />}
      </div>
    </FlashcardProvider>
  );
};

export default Card;
