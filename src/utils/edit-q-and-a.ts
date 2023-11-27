import prisma from "@/lib/prisma";

export const editQAndA = async (qaId: number, question: string, answer: string) => {
  await prisma.question_Answer.update({ where: { id: qaId }, data: { question, answer } });
};
