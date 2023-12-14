"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";
import { getUserId } from "../get-user-id";
import { answerValidation } from "../validation/answer-validation";
import { questionValidation } from "../validation/question-validation";

export const editQA = async (formData: {
  flashcardId: number;
  qaId: number;
  question: string;
  answer: string;
}): Promise<{ success: boolean; message: string }> => {
  const { flashcardId, qaId, question, answer } = formData;

  try {
    const questionValidationError = questionValidation(question);
    const answerValidationError = answerValidation(answer);
    if (questionValidationError || answerValidationError) {
      return { success: false, message: "バリデーションエラーが発生しました" };
    }

    const userId = await getUserId();
    if (!userId) {
      return { success: false, message: "認証が必要なため、リクエストが拒否されました" };
    }

    const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id: flashcardId } });
    const qa = await prisma.question_Answer.findUnique({ where: { id: qaId } });
    if (!flashcard || !qa) {
      return { success: false, message: "リクエストしたリソースが見つかりません" };
    }

    await prisma.question_Answer.update({
      where: { id: qaId },
      data: { question, answer },
    });
    revalidatePath(`/flashcards/${flashcardId}/qa`);
    return { success: true, message: "データが正常に更新されました" };
  } catch (error) {
    if (error instanceof Error) {
      return { success: false, message: error.message };
    }
    return { success: false, message: "サーバーで不明なエラーが発生しました" };
  }
};
