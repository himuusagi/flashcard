import { type FC, type MouseEventHandler } from "react";
import CloseButton from "../elements/CloseButton";
import LinkedText from "../elements/LinkedText";

type Props = { title: string; onClick: MouseEventHandler<HTMLButtonElement> };

const CardEditMenu: FC<Props> = ({ title, onClick }) => {
  return (
    <div className="relative px-[30px] py-[16px]">
      <div className="absolute right-[8px] top-[8px]">
        <CloseButton onClick={onClick} />
      </div>

      <h2 className="text-center text-primary">{title}</h2>

      <div className="mt-[16px] flex justify-center">
        <ul>
          <li>
            <LinkedText text="編集" href="" />
          </li>
          <li className="mt-[8px]">
            <LinkedText text="問題の一覧" href="" />
            <LinkedText text="問題の追加" href="" className="ml-4" />
          </li>
          <li className="mt-[8px]">
            <LinkedText text="順番を前へ" href="" />
            <LinkedText text="順番を後ろへ" href="" className="ml-4" />
          </li>
          <li className="mt-[8px]">
            <LinkedText text="削除" href="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CardEditMenu;
