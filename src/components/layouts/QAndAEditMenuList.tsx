import { type FC } from "react";
import { deleteQA } from "@/utils/server-actions/delete-qa";
import { moveQABackward } from "@/utils/server-actions/move-qa-backward";
import { moveQAForward } from "@/utils/server-actions/move-qa-forward";
import { useQAndAContext } from "@/contexts/QAndAContext";
import { useSubmissionMessageContext } from "@/contexts/SubmissionMessageContext";
import ClickableText from "../elements/ClickableText";
import LinkedText from "../elements/LinkedText";

const QAndAEditMenuList: FC = () => {
  const { flashcardId, qaId, isFirst, isLast, setContentType } = useQAndAContext();
  const { setIsShowing, setType, setMessage } = useSubmissionMessageContext();

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
                const { success, message } = await moveQAForward(flashcardId, qaId);
                setIsShowing(true);
                setType(success ? "success" : "error");
                setMessage(message);
              }}
            />
          )}
          {isLast || (
            <ClickableText
              text="順番を後ろへ"
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              formAction={async () => {
                setContentType("q&a");
                const { success, message } = await moveQABackward(flashcardId, qaId);
                setIsShowing(true);
                setType(success ? "success" : "error");
                setMessage(message);
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
              const { success, message } = await deleteQA(flashcardId, qaId);
              setIsShowing(true);
              setType(success ? "success" : "error");
              setMessage(message);
            }}
          />
        </li>
      </ul>
    </form>
  );
};

export default QAndAEditMenuList;
