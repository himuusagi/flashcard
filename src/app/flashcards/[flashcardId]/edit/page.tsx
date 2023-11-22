import { type NextPage } from "next";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import Main from "@/components/layouts/Main";
import Heading1 from "@/components/elements/Heading1";
import Inner from "@/components/layouts/Inner";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import EditFlashcardForm from "@/components/layouts/EditFlashcardForm";

const Page: NextPage<{ params: { flashcardId: string } }> = async ({ params: { flashcardId } }) => {
  const session = await getServerSession();
  const userId = session?.user?.email;
  if (!userId) {
    throw new Error("ユーザー情報が取得できませんでした");
  }

  const flashcard = await prisma.flash_Card.findUnique({
    where: { userId, id: Number(flashcardId) },
  });

  if (!flashcard) {
    notFound();
  }

  return (
    <Main>
      <Heading1 title="単語帳の編集" />
      <Inner width="narrow">
        <ContentWrapper>
          <EditFlashcardForm flashcardId={Number(flashcardId)} flashcardTitle={flashcard.title} />
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default Page;
