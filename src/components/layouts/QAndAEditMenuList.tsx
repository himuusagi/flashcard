import { type FC, type Dispatch, type SetStateAction } from "react";
import { deleteQuestionAnswer } from "@/utils/server-actions/delete-question-answer";
import { moveQAForward } from "@/utils/server-actions/move-qa-forward";
import ClickableText from "../elements/ClickableText";
import LinkedText from "../elements/LinkedText";

type Props = {
  flashcardId: number;
  qaId: number;
  isFirst: boolean;
  isLast: boolean;
  setContentType: Dispatch<SetStateAction<"q&a" | "edit">>;
};

const QAndAEditMenuList: FC<Props> = ({ flashcardId, qaId, isFirst, isLast, setContentType }) => {
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
          {isLast || <ClickableText text="順番を後ろへ" className={isFirst ? "" : "ml-[28px]"} />}
        </li>
        <li className="mt-[4px]">
          <ClickableText
            text="削除"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            formAction={async () => {
              setContentType("q&a");
              await deleteQuestionAnswer(flashcardId, qaId);
            }}
          />
        </li>
      </ul>
    </form>
  );
};

export default QAndAEditMenuList;
