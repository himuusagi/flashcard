import { type NextPage, type Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { getUserId } from "@/utils/get-user-id";
import SubmissionMessageProvider from "@/contexts/SubmissionMessageContext";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import EditFlashcardForm from "@/components/layouts/EditFlashcardForm";
import Heading1 from "@/components/elements/Heading1";

export const metadata: Metadata = {
  title: "単語帳の編集 | flashcard",
};

const Page: NextPage<{ params: { flashcardId: string } }> = async ({ params: { flashcardId } }) => {
  const userId = await getUserId();
  if (!userId) {
    redirect("/signin");
  }

  const flashcard = await prisma.flash_Card.findUnique({
    where: { userId, id: Number(flashcardId) },
  });

  if (!flashcard) {
    notFound();
  }

  return (
    <div>
      <Heading1 title="単語帳の編集" />

      <ContentWrapper>
        <SubmissionMessageProvider>
          <EditFlashcardForm flashcardId={Number(flashcardId)} flashcardTitle={flashcard.title} />
        </SubmissionMessageProvider>
      </ContentWrapper>
    </div>
  );
};

export default Page;
