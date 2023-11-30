"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { getUserId } from "../get-user-id";

export const deleteFlashcard = async (
  id: number
): Promise<{ success: boolean; message: string }> => {
  try {
    const userId = await getUserId();
    if (!userId) {
      return { success: false, message: "認証が必要なため、リクエストが拒否されました" };
    }

    const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id } });
    if (!flashcard) {
      return { success: false, message: "リクエストしたリソースが見つかりません" };
    }

    await prisma.question_Answer.deleteMany({ where: { flashCardId: id } });
    await prisma.flash_Card.delete({ where: { id } });
    await prisma.flash_Card.updateMany({
      where: { userId: userId, order: { gte: flashcard.order } },
      data: {
        order: { decrement: 1 },
      },
    });
    revalidatePath("/");
    return { success: true, message: "データが削除されました" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "サーバーで不明なエラーが発生しました" };
  }
};
