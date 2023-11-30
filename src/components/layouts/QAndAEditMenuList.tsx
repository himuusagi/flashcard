import { type FC } from "react";
import { deleteQA } from "@/utils/server-actions/delete-qa";
import { moveQABackward } from "@/utils/server-actions/move-qa-backward";
import { moveQAForward } from "@/utils/server-actions/move-qa-forward";
import ClickableText from "../elements/ClickableText";
import LinkedText from "../elements/LinkedText";
import { useQAndAContext } from "@/contexts/QAndAContext";

const QAndAEditMenuList: FC = () => {
  const { flashcardId, qaId, isFirst, isLast, setContentType } = useQAndAContext();

  return (
    <form>
      <ul>
        <li>
          <LinkedText text="問題、解答の編集" href={`/flashcards/${flashcardId}/qa/${qaId}/edit`} />
        </li>
        <li className="mt-[4px]">
          {isFirst || (
            <ClickableText
              text="順番を前へ"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              formAction={async () => {
                setContentType("q&a");
                await moveQAForward(flashcardId, qaId);
              }}
            />
          )}
          {isLast || (
            <ClickableText
              text="順番を後ろへ"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              formAction={async () => {
                setContentType("q&a");
                await moveQABackward(flashcardId, qaId);
              }}
              className={isFirst ? "" : "ml-[28px]"}
            />
          )}
        </li>
        <li className="mt-[4px]">
          <ClickableText
            text="削除"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            formAction={async () => {
              setContentType("q&a");
              await deleteQA(flashcardId, qaId);
            }}
          />
        </li>
      </ul>
    </form>
  );
};

export default QAndAEditMenuList;
