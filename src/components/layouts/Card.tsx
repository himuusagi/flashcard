"use client";

import { useState, type FC } from "react";
import CardTopMenu from "./CardTopMenu";
import CardEditMenu from "./CardEditMenu";

type Props = {
  flashcardId: number;
  flashcardOrder: number;
  title: string;
  href: string;
};

const Card: FC<Props> = ({ flashcardId, flashcardOrder, title }) => {
  const [contentType, setContentType] = useState<"top" | "edit">("top");

  const switchContent = () => {
    contentType === "top" ? setContentType("edit") : setContentType("top");
  };

  return (
    <div className="min-h-[200px] rounded-[4px] border-2 border-primary shadow-lg shadow-primary-light">
      {contentType === "top" ? (
        <CardTopMenu flashcardId={flashcardId} title={title} onClick={switchContent} />
      ) : (
        <CardEditMenu
          flashcardId={flashcardId}
          flashcardOrder={flashcardOrder}
          title={title}
          onClick={switchContent}
        />
      )}
    </div>
  );
};

export default Card;
