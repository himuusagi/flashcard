import { type FC } from "react";
import ClickableText from "../elements/ClickableText";
import LinkedText from "../elements/LinkedText";

type Props = {
  flashcardId: number;
  qaId: number;
};

const QAndAEditMenuList: FC<Props> = ({ flashcardId, qaId }) => {
  return (
    <ul>
      <li>
        <LinkedText text="問題、解答の編集" href={`/flashcards/${flashcardId}/qa/${qaId}/edit`} />
      </li>
      <li className="mt-[4px]">
        <ClickableText text="順番を前へ" />
        <ClickableText text="順番を後ろへ" className="ml-[28px]" />
      </li>
      <li className="mt-[4px]">
        <ClickableText text="削除" />
      </li>
    </ul>
  );
};

export default QAndAEditMenuList;
