"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { getUserId } from "../get-user-id";
import { titleValidation } from "../validation/title-validation";

export const addFlashcard = async (formData: {
  title: string;
}): Promise<{ success: boolean; message: string }> => {
  const title = formData.title;

  try {
    const titleValidationError = titleValidation(title);
    if (titleValidationError) {
      return { success: false, message: "バリデーションエラーが発生しました" };
    }

    const userId = await getUserId();
    if (!userId) {
      return { success: false, message: "認証が必要なため、リクエストが拒否されました" };
    }

    const count = await prisma.flash_Card.count({ where: { userId } });
    await prisma.flash_Card.create({ data: { order: count + 1, userId, title } });
    revalidatePath("/");
    return { success: true, message: "データが正常に追加されました" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "サーバーで不明なエラーが発生しました" };
  }
};
