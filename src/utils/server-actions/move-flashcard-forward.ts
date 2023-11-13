"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export const moveFlashcardForward = async (id: number, order: number, isFirst: boolean) => {
  if (isFirst) {
    throw new Error("リクエストが不正です");
  }

  const session = await getServerSession();
  if (!session?.user?.email) {
    throw new Error("ユーザー情報が取得できませんでした");
  }

  const userId = session.user.email;
  await prisma.flash_Card.update({ where: { id }, data: { order: 0 } });
  await prisma.flash_Card.updateMany({
    where: { userId, order: order - 1 },
    data: { order: { increment: 1 } },
  });
  await prisma.flash_Card.update({ where: { id }, data: { order: order - 1 } });

  revalidatePath("/");
};
