import { type FC } from "react";
import LinkedText from "../elements/LinkedText";

type Props = {
  editQuestionHref: string;
  editAnswerHref: string;
  orderForwardHref: string;
  orderBackHref: string;
  deleteQAndAHref: string;
};

const QAndAEditMenuList: FC<Props> = ({
  editQuestionHref,
  editAnswerHref,
  orderForwardHref,
  orderBackHref,
  deleteQAndAHref,
}) => {
  return (
    <ul className="">
      <li>
        <LinkedText text="問題文の編集" href={editQuestionHref} />
      </li>
      <li className="mt-[4px]">
        <LinkedText text="解答文の編集" href={editAnswerHref} />
      </li>
      <li className="mt-[4px]">
        <LinkedText text="順番を前へ" href={orderForwardHref} />
        <LinkedText text="順番を後ろへ" href={orderBackHref} className="ml-[28px]" />
      </li>
      <li className="mt-[4px]">
        <LinkedText text="削除" href={deleteQAndAHref} />
      </li>
    </ul>
  );
};

export default QAndAEditMenuList;
