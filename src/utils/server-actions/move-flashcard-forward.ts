"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { getUserId } from "../get-user-id";

export const moveFlashcardForward = async (
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

    const isFirst = flashcard.order === 1;
    if (isFirst) {
      return { success: false, message: "不正なリクエストです" };
    }

    await prisma.flash_Card.update({ where: { id }, data: { order: 0 } });
    await prisma.flash_Card.updateMany({
      where: { userId, order: flashcard.order - 1 },
      data: { order: { increment: 1 } },
    });
    await prisma.flash_Card.update({ where: { id }, data: { order: flashcard.order - 1 } });
    revalidatePath("/");
    return { success: true, message: "データの順番が更新されました" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "サーバーで不明なエラーが発生しました" };
  }
};
