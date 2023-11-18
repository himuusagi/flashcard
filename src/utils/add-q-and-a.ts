import prisma from "@/lib/prisma";

export const addQAndA = async (flashcardId: number, question: string, answer: string) => {
  const qAndACount = await prisma.question_Answer.count({ where: { flashCardId: flashcardId } });

  await prisma.question_Answer.create({
    data: { order: qAndACount + 1, flashCardId: flashcardId, question, answer },
  });
};
