"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { getUserId } from "../get-user-id";
import { titleValidation } from "../validation/title-validation";

export const editFlashcard = async (formData: {
  id: number;
  title: string;
}): Promise<{ success: boolean; message: string }> => {
  const { id, title } = formData;

  try {
    const titleValidationError = titleValidation(title);
    if (titleValidationError) {
      return { success: false, message: "バリデーションエラーが発生しました" };
    }

    const userId = await getUserId();
    if (!userId) {
      return { success: false, message: "認証が必要なため、リクエストが拒否されました" };
    }

    const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id } });
    if (!flashcard) {
      return { success: false, message: "リクエストしたリソースが見つかりません" };
    }

    await prisma.flash_Card.update({ where: { id }, data: { title } });
    revalidatePath("/");
    return { success: true, message: "データが正常に更新されました" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "サーバーで不明なエラーが発生しました" };
  }
};
