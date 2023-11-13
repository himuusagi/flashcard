import BoxWithTitle from "@/components/layouts/BoxWithTitle";
import Inner from "@/components/layouts/Inner";
import Main from "@/components/layouts/Main";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import LinkedText from "@/components/elements/LinkedText";

const NotFound = () => {
  return (
    <Main>
      <Inner width="narrow">
        <ContentWrapper>
          <BoxWithTitle
            title="404 Not Found"
            text="申し訳ありませんが、リクエストされたページは見つかりませんでした。"
            color="primary"
          />
          <div className="mt-[32px] text-center">
            <LinkedText text="TOP" href="/" />
          </div>
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default NotFound;
