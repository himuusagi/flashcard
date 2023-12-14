import { type FC } from "react";
import BoxWithTitle from "./BoxWithTitle";
import Button from "../elements/Button";

const EmptyFlashcardPanel: FC = () => {
  return (
    <div>
      <BoxWithTitle
        title="単語帳が登録されていません"
        text="下記のリンクから単語帳を追加しましょう"
      />

      <div className="mt-[32px] text-center">
        <Button type="link" text="単語帳の追加" href="/flashcards/new" />
      </div>
    </div>
  );
};

export default EmptyFlashcardPanel;
