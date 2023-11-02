import { NextResponse, type NextRequest } from "next/server";
import { getServerSession } from "next-auth";
import { addFlashcard } from "@/utils/add-flashcard";
import { titleValidation } from "@/utils/validation/title-validation";

export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession();
    const userId = session?.user?.email;
    if (!userId) {
      return NextResponse.json({ message: "ユーザー情報が取得できませんでした" }, { status: 401 });
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
