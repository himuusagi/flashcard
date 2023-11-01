import { Metadata, type NextPage } from "next";
import { getServerSession } from "next-auth";
import Main from "@/components/layouts/Main";
import Heading1 from "@/components/elements/Heading1";
import Inner from "@/components/layouts/Inner";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import AddFlashcardForm from "@/components/layouts/AddFlashcardForm";

export const metadata: Metadata = {
  title: "単語帳の追加",
};

const Page: NextPage = async () => {
  const session = await getServerSession();

  if (!session?.user?.email) {
    throw new Error("ユーザー情報が取得できませんでした。ログインし直してください。");
  }

  return (
    <Main>
      <Heading1 title="単語帳の追加" />

      <Inner width="narrow">
        <ContentWrapper>
          <AddFlashcardForm />
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default Page;
