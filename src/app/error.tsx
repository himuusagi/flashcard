"use client";

import { type FC } from "react";
import Button from "@/components/elements/Button";
import BoxWithTitle from "@/components/layouts/BoxWithTitle";
import Inner from "@/components/layouts/Inner";
import Main from "@/components/layouts/Main";
import ContentWrapper from "@/components/layouts/ContentWrapper";

type Props = {
  error: Error;
  reset: () => void;
};

const Error: FC<Props> = ({ error, reset }) => {
  return (
    <Main>
      <Inner width="narrow">
        <ContentWrapper>
          <BoxWithTitle title="エラー" text={error.message} color="accent" />
          <div className="mt-[32px] text-center">
            <Button type="button" text="再読み込み" onClick={() => reset()} />
          </div>
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default Error;
