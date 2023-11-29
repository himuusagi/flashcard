import { type FC } from "react";
import { useFlashcardContext } from "@/contexts/FlashcardContext";
import EllipsisButton from "../elements/EllipsisButton";
import Button from "../elements/Button";

const CardTopMenu: FC = () => {
  const { flashcardId, title, switchContent } = useFlashcardContext();

  return (
    <div className="relative px-[30px] py-[40px]">
      <div className="absolute right-[8px] top-[8px]">
        <EllipsisButton onClick={switchContent} />
      </div>

      <h2 className="text-center text-xl text-primary">{title}</h2>

      <div className="mt-8 text-center">
        <Button type="link" text="テストする" href={`/flashcards/${flashcardId}`} />
      </div>
    </div>
  );
};

export default CardTopMenu;
