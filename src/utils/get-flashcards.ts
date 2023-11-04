import prisma from "@/lib/prisma";

export const getFlashcards = async (userId: string) => {
  const flashcards = await prisma.flash_Card.findMany({
    where: { userId },
    orderBy: { order: "asc" },
  });
  return flashcards;
};
