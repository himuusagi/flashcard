"use server";

import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";

export const deleteFlashcard = async (id: number, order: number) => {
  const session = await getServerSession();
  if (!session?.user?.email) {
    throw new Error("ユーザー情報が取得できませんでした");
  }

  const userId = session.user.email;
  await prisma.flash_Card.delete({ where: { id: id } });
  await prisma.flash_Card.updateMany({
    where: { userId: userId, order: { gte: order } },
    data: {
      order: { decrement: 1 },
    },
  });

  revalidatePath("/");
};
