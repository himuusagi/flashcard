import { NextResponse, type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { addFlashcard } from "@/utils/add-flashcard";
import { editFlashcard } from "@/utils/edit-flashcard";
import { titleValidation } from "@/utils/validation/title-validation";

export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession();
    const userId = session?.user?.email;
    if (!userId) {
      return NextResponse.json(
        { message: "認証が必要なため、リクエストが拒否されました" },
        { status: 401 }
      );
    }

    const body = (await req.json()) as { title: string };
    const title = body.title;

    const titleValidationError = titleValidation(title);
    if (titleValidationError) {
      return NextResponse.json({ message: "バリデーションエラーが発生しました" }, { status: 422 });
    }

    await addFlashcard(userId, title);
    return NextResponse.json({ message: "データが正常に追加されました" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "サーバー内部でエラーが発生しました" }, { status: 500 });
  }
};

export const PATCH = async (req: NextRequest) => {
  try {
    const session = await getServerSession();
    const userId = session?.user?.email;
    if (!userId) {
      return NextResponse.json(
        { message: "認証が必要なため、リクエストが拒否されました" },
        { status: 401 }
      );
    }

    const body = (await req.json()) as { id: number; title: string };
    const { id, title } = body;

    const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id } });
    if (!flashcard) {
      return NextResponse.json(
        { message: "アクセスが禁止されているため、リクエストが拒否されました" },
        { status: 403 }
      );
    }

    const titleValidationError = titleValidation(title);
    if (titleValidationError) {
      return NextResponse.json({ message: "バリデーションエラーが発生しました" }, { status: 422 });
    }

    await editFlashcard(id, title);
    return NextResponse.json({ message: "データが正常に更新されました" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "サーバー内部でエラーが発生しました" }, { status: 500 });
  }
};
