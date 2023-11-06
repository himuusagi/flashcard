"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deleteFlashcard = async (flashcardId: number) => {
  await prisma.flash_Card.delete({ where: { id: flashcardId } });
  revalidatePath("/");
};
