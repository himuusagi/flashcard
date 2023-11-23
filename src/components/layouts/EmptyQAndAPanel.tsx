import { type FC } from "react";
import BoxWithTitle from "./BoxWithTitle";
import Button from "../elements/Button";

type Props = { flashcardId: number };

const EmptyQAndAPanel: FC<Props> = ({ flashcardId }) => {
  return (
    <div>
      <BoxWithTitle
        title="問題が登録されていません"
        text="下記のリンクから問題文と解答文を追加してください"
      />

      <div className="mt-[32px] text-center">
        <Button type="link" text="問題の追加" href={`/flashcards/${flashcardId}/qa/new`} />
      </div>
    </div>
  );
};

export default EmptyQAndAPanel;
