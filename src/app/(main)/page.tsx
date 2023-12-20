import { type NextPage } from "next";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { getUserId } from "@/utils/get-user-id";
import SubmissionMessageProvider from "@/contexts/SubmissionMessageContext";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import EmptyFlashcardPanel from "@/components/layouts/EmptyFlashcardPanel";
import FlashcardList from "@/components/layouts/FlashcardList";
import Heading1 from "@/components/elements/Heading1";

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
    <div>
      <Heading1 title="単語帳リスト" />

      <ContentWrapper>
        {flashcards.length > 0 ? (
          <SubmissionMessageProvider>
            <FlashcardList flashcards={flashcards} />
          </SubmissionMessageProvider>
        ) : (
          <EmptyFlashcardPanel />
        )}
      </ContentWrapper>
    </div>
  );
};

export default Page;
