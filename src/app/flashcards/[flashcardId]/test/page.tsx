import { type NextPage, Metadata } from "next";
import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import { getUserId } from "@/utils/get-user-id";
import TetsQAndAProvider from "@/contexts/TestQAndAContext";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import EmptyQAndAPanel from "@/components/layouts/EmptyQAndAPanel";
import Heading1 from "@/components/elements/Heading1";
import Inner from "@/components/layouts/Inner";
import Main from "@/components/layouts/Main";
import TestQAndAContent from "@/components/layouts/TestQAndAContent";

export const metadata: Metadata = { title: "単語帳のテスト" };

type Props = {
  params: { flashcardId: string };
};

const Page: NextPage<Props> = async ({ params: { flashcardId } }) => {
  const userId = await getUserId();
  if (!userId) {
    throw new Error("認証が必要なため、リクエストが拒否されました");
  }

  const flashcard = await prisma.flash_Card.findUnique({
    where: { userId, id: Number(flashcardId) },
  });
  if (!flashcard) {
    notFound();
  }

  const qas = await prisma.question_Answer.findMany({
    where: { flashCardId: Number(flashcardId) },
    orderBy: { order: "asc" },
  });

  return (
    <Main>
      <Heading1 title={flashcard.title} />

      <Inner width="narrow">
        <ContentWrapper>
          {qas.length > 0 ? (
            <TetsQAndAProvider>
              <TestQAndAContent qas={qas} />
            </TetsQAndAProvider>
          ) : (
            <EmptyQAndAPanel flashcardId={Number(flashcardId)} />
          )}
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default Page;
