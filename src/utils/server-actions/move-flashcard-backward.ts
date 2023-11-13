"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export const moveFlashcardBackward = async (id: number, order: number, isLast: boolean) => {
  if (isLast) {
    throw new Error("リクエストが不正です");
  }

  const session = await getServerSession();
  if (!session?.user?.email) {
    throw new Error("ユーザー情報が取得できませんでした");
  }

  const userId = session.user.email;
  // 該当カードの order を0に
  await prisma.flash_Card.update({ where: { id }, data: { order: 0 } });
  // 該当カードの次のカードを "order" に
  await prisma.flash_Card.updateMany({
    where: { userId, order: order + 1 },
    data: { order: { decrement: 1 } },
  });
  // 該当カードの order を "order + 1" に
  await prisma.flash_Card.update({ where: { id }, data: { order: order + 1 } });

  revalidatePath("/");
};
