"use client";

import { useState, type FC } from "react";
import { useRouter } from "next/navigation";
import Button from "../elements/Button";
import CloseButton from "../elements/CloseButton";
import EllipsisButton from "../elements/EllipsisButton";
import LinkedText from "../elements/LinkedText";

type Props = {
  title: string;
  href: string;
};

const Card: FC<Props> = ({ title, href }) => {
  const router = useRouter();
  const [contentType, setContentType] = useState<"initial" | "edit">("initial");

  const switchContent = () => {
    if (contentType === "initial") {
      setContentType("edit");
    } else {
      setContentType("initial");
    }
  };

  const initialContent = (
    <>
      <div className="absolute right-[8px] top-[8px]">
        <EllipsisButton onClick={switchContent} />
      </div>

      <h2 className="text-center text-xl text-primary">{title}</h2>

      <div className="mt-8 text-center">
        <Button text="テストする" onClick={() => router.push(href)} />
      </div>
    </>
  );

  const editContent = (
    <>
      <div className="absolute right-[8px] top-[8px]">
        <CloseButton onClick={switchContent} />
      </div>

      <h2 className="text-center text-primary">{title}</h2>

      <div className="mt-[24px] flex justify-center">
        <ul>
          <li>
            <LinkedText text="問題の登録" href={href} />
          </li>
          <li className="mt-[8px]">
            <LinkedText text="単語帳の編集" href={href} />
          </li>
          <li className="mt-[8px]">
            <LinkedText text="順番を前へ" href={href} />
            <LinkedText text="順番を後ろへ" href={href} className="ml-4" />
          </li>
          <li className="mt-[8px]">
            <LinkedText text="削除" href={href} />
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="mx-[100px] my-[100px] w-1/4">
      <div className="relative block min-h-[200px] rounded-[4px] border-2 border-primary px-[30px] py-[40px] shadow-lg shadow-primary-light">
        {contentType === "initial" ? initialContent : editContent}
      </div>
    </div>
  );
};

export default Card;
