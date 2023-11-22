import { type FC, type MouseEventHandler } from "react";
import EllipsisButton from "../elements/EllipsisButton";
import Button from "../elements/Button";

type Props = {
  flashcardId: number;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CardTopMenu: FC<Props> = ({ flashcardId, title, onClick }) => {
  return (
    <div className="relative px-[30px] py-[40px]">
      <div className="absolute right-[8px] top-[8px]">
        <EllipsisButton onClick={onClick} />
      </div>

      <h2 className="text-center text-xl text-primary">{title}</h2>

      <div className="mt-8 text-center">
        <Button type="link" text="テストする" href={`/flashcards/${flashcardId}`} />
      </div>
    </div>
  );
};

export default CardTopMenu;
