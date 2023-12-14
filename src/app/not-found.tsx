import BoxWithTitle from "@/components/layouts/BoxWithTitle";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import Inner from "@/components/layouts/Inner";
import LinkedText from "@/components/elements/LinkedText";
import Main from "@/components/layouts/Main";
import Header from "@/components/layouts/Header";

const NotFound = () => {
  return (
    <>
      <Header />

      <Main hasHeader={true}>
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
    </>
  );
};

export default NotFound;
