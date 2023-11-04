import Heading1 from "@/components/elements/Heading1";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import FlashcardList from "@/components/layouts/FlashcardList";
import Inner from "@/components/layouts/Inner";
import Main from "@/components/layouts/Main";
import { getFlashcards } from "@/utils/get-flashcards";
import { type NextPage } from "next";
import { getServerSession } from "next-auth";

const Page: NextPage = async () => {
  const session = await getServerSession();
  const userId = session?.user?.email;
  if (!userId) {
    throw new Error("ユーザー情報が取得できませんでした");
  }

  const flashcards = await getFlashcards(userId);

  return (
    <Main>
      <Heading1 title="単語帳リスト" />

      <Inner width="wide">
        <ContentWrapper>
          <FlashcardList flashcards={flashcards} />
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default Page;
