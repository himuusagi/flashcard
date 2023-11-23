"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const moveQAForward = async (flashcardId: number, qaId: number) => {
  const session = await getServerSession();
  const userId = session?.user?.email;
  if (!userId) {
    throw new Error("認証が必要なため、リクエストが拒否されました");
  }

  const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id: flashcardId } });
  const qa = await prisma.question_Answer.findUnique({ where: { id: qaId } });
  if (!flashcard || !qa) {
    throw new Error("リクエストしたリソースが見つかりません");
  }

  const isFirst = qa.order === 1;
  if (isFirst) {
    throw new Error("不正なリクエストです");
  }

  await prisma.question_Answer.update({ where: { id: qaId }, data: { order: 0 } });
  await prisma.question_Answer.updateMany({
    where: { flashCardId: flashcardId, order: qa.order - 1 },
    data: { order: { increment: 1 } },
  });
  await prisma.question_Answer.update({ where: { id: qaId }, data: { order: qa.order - 1 } });

  revalidatePath(`/flashcards/${flashcardId}/qa`);
};
