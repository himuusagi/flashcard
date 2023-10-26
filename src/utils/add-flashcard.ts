import prisma from "@/lib/prisma";

export const addFlashcard = async (userId: string, title: string) => {
  const flashcardCount = await prisma.flash_Card.count({ where: { userId } });
  await prisma.flash_Card.create({
    data: {
      order: flashcardCount + 1,
      userId,
      title,
    },
  });
};
