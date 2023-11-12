import { type FC, type MouseEventHandler } from "react";
import CloseButton from "../elements/CloseButton";
import LinkedText from "../elements/LinkedText";
import ClickableText from "../elements/ClickableText";
import { deleteFlashcard } from "@/utils/server-actions/delete-flashcard";

type Props = {
  flashcardId: number;
  flashcardOrder: number;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CardEditMenu: FC<Props> = ({ flashcardId, flashcardOrder, title, onClick }) => {
  return (
    <div className="relative px-[30px] py-[16px]">
      <div className="absolute right-[8px] top-[8px]">
        <CloseButton onClick={onClick} />
      </div>

      <h2 className="text-center text-primary">{title}</h2>

      <div className="mt-[16px] flex justify-center">
        <form>
          <ul>
            <li>
              <LinkedText text="編集" href={`/flashcard${flashcardId}/`} />
            </li>
            <li className="mt-[8px]">
              <LinkedText text="問題の一覧" href={`/flashcard${flashcardId}/q&a-list`} />
              <LinkedText
                text="問題の追加"
                href={`/flashcard${flashcardId}/new-q&a`}
                className="ml-4"
              />
            </li>
            <li className="mt-[8px]">
              <ClickableText text="順番を前へ" />
              <ClickableText text="順番を後ろへ" className="ml-4" />
            </li>
            <li className="mt-[8px]">
              <ClickableText
                text="削除"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                formAction={async () => await deleteFlashcard(flashcardId, flashcardOrder)}
              />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default CardEditMenu;
