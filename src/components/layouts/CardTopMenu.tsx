import { type FC, type MouseEventHandler } from "react";
import EllipsisButton from "../elements/EllipsisButton";
import Button from "../elements/Button";

type Props = {
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CardTopMenu: FC<Props> = ({ title, onClick }) => {
  return (
    <div className="relative px-[30px] py-[40px]">
      <div className="absolute right-[8px] top-[8px]">
        <EllipsisButton onClick={onClick} />
      </div>

      <h2 className="text-center text-xl text-primary">{title}</h2>

      <div className="mt-8 text-center">
        <Button type="button" text="テストする" />
      </div>
    </div>
  );
};

export default CardTopMenu;
