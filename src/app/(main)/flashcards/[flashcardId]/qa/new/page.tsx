import { type NextPage, type Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import prisma from "@/lib/prisma";
import { getUserId } from "@/utils/get-user-id";
import AddQAndAForm from "@/components/layouts/AddQAndAForm";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import Heading1 from "@/components/elements/Heading1";
import Heading2 from "@/components/elements/Heading2";
import Inner from "@/components/layouts/Inner";
import SubmissionMessageProvider from "@/contexts/SubmissionMessageContext";

type MetadataProps = { params: { flashcardId: string } };

export const generateMetadata = async ({
  params: { flashcardId },
}: MetadataProps): Promise<Metadata> => {
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
  return { title: `${flashcard.title} - 問題の追加 | flashcard` };
};

type Props = {
  params: { flashcardId: string };
};

const Page: NextPage<Props> = async ({ params: { flashcardId } }) => {
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
      <Heading1 title={flashcard.title} />
      <Heading2 text="問題の追加" />

      <Inner width="narrow">
        <ContentWrapper>
          <SubmissionMessageProvider>
            <AddQAndAForm flashcardId={flashcard.id} />
          </SubmissionMessageProvider>
        </ContentWrapper>
      </Inner>
    </div>
  );
};

export default Page;
