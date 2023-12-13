import { type NextPage } from "next";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { getUserId } from "@/utils/get-user-id";
import SubmissionMessageProvider from "@/contexts/SubmissionMessageContext";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import FlashcardList from "@/components/layouts/FlashcardList";
import Heading1 from "@/components/elements/Heading1";
import Inner from "@/components/layouts/Inner";
import Main from "@/components/layouts/Main";

const Page: NextPage = async () => {
  const userId = await getUserId();
  if (!userId) {
    redirect("/signin");
  }

  const flashcards = await prisma.flash_Card.findMany({
    where: { userId },
    orderBy: { order: "asc" },
  });

  return (
    <Main>
      <Heading1 title="単語帳リスト" />

      <Inner width="wide">
        <ContentWrapper>
          <SubmissionMessageProvider>
            <FlashcardList flashcards={flashcards} />
          </SubmissionMessageProvider>
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default Page;
