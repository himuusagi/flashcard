"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export const moveFlashcardBackward = async (id: number) => {
  const session = await getServerSession();
  const userId = session?.user?.email;
  if (!userId) {
    throw new Error("認証が必要なため、リクエストが拒否されました");
  }

  const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id } });
  if (!flashcard) {
    throw new Error("アクセスが禁止されているため、リクエストが拒否されました");
  }

  const flashcardCount = await prisma.flash_Card.count({ where: { userId } });
  const isLast = flashcard.order === flashcardCount;
  if (isLast) {
    throw new Error("不正なリクエストです");
  }

  // 該当カードの order を0に
  await prisma.flash_Card.update({ where: { id }, data: { order: 0 } });
  // 該当カードの次のカードを "order" に
  await prisma.flash_Card.updateMany({
    where: { userId, order: flashcard.order + 1 },
    data: { order: { decrement: 1 } },
  });
  // 該当カードの order を "order + 1" に
  await prisma.flash_Card.update({ where: { id }, data: { order: flashcard.order + 1 } });

  revalidatePath("/");
};
