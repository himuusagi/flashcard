import prisma from "@/lib/prisma";

export const editFlashcard = async (id: number, title: string) => {
  await prisma.flash_Card.update({ where: { id }, data: { title } });
};
