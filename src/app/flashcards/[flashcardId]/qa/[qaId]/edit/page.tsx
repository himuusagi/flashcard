import { type NextPage } from "next";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import EditQAndAForm from "@/components/layouts/EditQAndAForm";
import Heading1 from "@/components/elements/Heading1";
import Heading2 from "@/components/elements/Heading2";
import Inner from "@/components/layouts/Inner";
import Main from "@/components/layouts/Main";
import ContentWrapper from "@/components/layouts/ContentWrapper";

type Props = {
  params: { flashcardId: string; qaId: string };
};

const Page: NextPage<Props> = async ({ params: { flashcardId, qaId } }) => {
  const session = await getServerSession();
  const userId = session?.user?.email;
  if (!userId) {
    throw new Error("認証が必要なため、リクエストが拒否されました");
  }

  const flashcard = await prisma.flash_Card.findUnique({
    where: { userId, id: Number(flashcardId) },
  });
  const qa = await prisma.question_Answer.findUnique({ where: { id: Number(qaId) } });
  if (!flashcard || !qa) {
    throw new Error("リクエストしたリソースが見つかりません");
  }

  return (
    <Main>
      <Heading1 title={flashcard.title} />
      <Heading2 text="問題の編集" />

      <Inner width="narrow">
        <ContentWrapper>
          <EditQAndAForm
            flashcardId={flashcard.id}
            qaId={qa.id}
            question={qa.question}
            answer={qa.answer}
          />
        </ContentWrapper>
      </Inner>
    </Main>
  );
};

export default Page;
