"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export const deleteFlashcard = async (id: number) => {
  const session = await getServerSession();
  const userId = session?.user?.email;
  if (!userId) {
    throw new Error("認証が必要なため、リクエストが拒否されました");
  }

  const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id } });
  if (!flashcard) {
    throw new Error("アクセスが禁止されているため、リクエストが拒否されました");
  }

  await prisma.flash_Card.delete({ where: { id } });

  await prisma.flash_Card.updateMany({
    where: { userId: userId, order: { gte: flashcard.order } },
    data: {
      order: { decrement: 1 },
    },
  });

  revalidatePath("/");
};
