"use server";

import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

export const deleteQuestionAnswer = async (flashcardId: number, qaId: number) => {
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

  await prisma.question_Answer.delete({ where: { id: qaId } });

  revalidatePath(`flashcards/${flashcardId}/qa`);

  await prisma.question_Answer.updateMany({
    where: { flashCardId: flashcardId, order: { gte: qa.order } },
    data: { order: { decrement: 1 } },
  });
};
