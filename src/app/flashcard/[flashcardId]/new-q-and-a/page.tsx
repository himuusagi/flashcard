import { type NextPage } from "next";
import { notFound } from "next/navigation";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import Heading1 from "@/components/elements/Heading1";
import Main from "@/components/layouts/Main";
import Heading2 from "@/components/elements/Heading2";
import Inner from "@/components/layouts/Inner";
import ContentWrapper from "@/components/layouts/ContentWrapper";
import AddQAndAForm from "@/components/layouts/AddQAndAForm";

type Props = {
  params: { flashcardId: string };
};

const Page: NextPage<Props> = async ({ params: { flashcardId } }) => {
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
      <Heading1 title={flashcard.title} />
      <Heading2 text="問題の追加" />

      <Inner width="narrow">
        <ContentWrapper>
          <AddQAndAForm flashcardId={flashcard.id} />
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default Page;
