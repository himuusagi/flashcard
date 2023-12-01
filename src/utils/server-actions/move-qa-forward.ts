"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getUserId } from "../get-user-id";

export const moveQAForward = async (
  flashcardId: number,
  qaId: number
): Promise<{ success: boolean; message: string }> => {
  try {
    const userId = await getUserId();
    if (!userId) {
      return { success: false, message: "認証が必要なため、リクエストが拒否されました" };
    }

    const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id: flashcardId } });
    const qa = await prisma.question_Answer.findUnique({ where: { id: qaId } });
    if (!flashcard || !qa) {
      return { success: false, message: "リクエストしたリソースが見つかりません" };
    }

    const isFirst = qa.order === 1;
    if (isFirst) {
      return { success: false, message: "不正なリクエストです" };
    }

    await prisma.question_Answer.update({ where: { id: qaId }, data: { order: 0 } });
    await prisma.question_Answer.updateMany({
      where: { flashCardId: flashcardId, order: qa.order - 1 },
      data: { order: { increment: 1 } },
    });
    await prisma.question_Answer.update({ where: { id: qaId }, data: { order: qa.order - 1 } });
    revalidatePath(`/flashcards/${flashcardId}/qa`);
    return { success: true, message: "データの順番が更新されました" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "サーバーで不明なエラーが発生しました" };
  }
};
