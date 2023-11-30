"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { getUserId } from "../get-user-id";

export const deleteQA = async (
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

    await prisma.question_Answer.delete({ where: { id: qaId } });
    await prisma.question_Answer.updateMany({
      where: { flashCardId: flashcardId, order: { gte: qa.order } },
      data: { order: { decrement: 1 } },
    });
    revalidatePath(`flashcards/${flashcardId}/qa`);
    return { success: true, message: "データが削除されました" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "サーバーで不明なエラーが発生しました" };
  }
};
