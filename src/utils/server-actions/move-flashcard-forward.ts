"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export const moveFlashcardForward = async (id: number) => {
  const session = await getServerSession();
  const userId = session?.user?.email;
  if (!userId) {
    throw new Error("ユーザー情報が取得できませんでした");
  }

  const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id } });
  if (!flashcard) {
    throw new Error("アクセスが禁止されているため、リクエストが拒否されました");
  }

  const isFirst = flashcard.order === 1;
  if (isFirst) {
    throw new Error("不正なリクエストです");
  }

  await prisma.flash_Card.update({ where: { id }, data: { order: 0 } });
  await prisma.flash_Card.updateMany({
    where: { userId, order: flashcard.order - 1 },
    data: { order: { increment: 1 } },
  });
  await prisma.flash_Card.update({ where: { id }, data: { order: flashcard.order - 1 } });

  revalidatePath("/");
};
