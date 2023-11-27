import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import prisma from "@/lib/prisma";
import { addQAndA } from "@/utils/add-q-and-a";
import { answerValidation } from "@/utils/validation/answer-validation";
import { editQAndA } from "@/utils/edit-q-and-a";
import { questionValidation } from "@/utils/validation/question-validation";

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

    const body = (await req.json()) as { flashcardId: number; question: string; answer: string };
    const { flashcardId, question, answer } = body;

    const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id: flashcardId } });
    if (!flashcard) {
      return NextResponse.json(
        { message: "アクセスが禁止されているため、リクエストが拒否されました" },
        { status: 403 }
      );
    }

    const questionValidationError = questionValidation(question);
    const answerValidationError = answerValidation(answer);
    if (questionValidationError || answerValidationError) {
      return NextResponse.json({ message: "バリデーションエラーが発生しました" }, { status: 422 });
    }

    await addQAndA(flashcardId, question, answer);
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

    const body = (await req.json()) as {
      flashcardId: number;
      qaId: number;
      question: string;
      answer: string;
    };
    const { flashcardId, qaId, question, answer } = body;

    const flashcard = await prisma.flash_Card.findUnique({ where: { userId, id: flashcardId } });
    const qa = await prisma.question_Answer.findUnique({ where: { id: qaId } });
    if (!flashcard || !qa) {
      return NextResponse.json(
        { message: "リクエストしたリソースが見つかりません" },
        { status: 404 }
      );
    }

    const questionValidationError = questionValidation(question);
    const answerValidationError = answerValidation(answer);
    if (questionValidationError || answerValidationError) {
      return NextResponse.json({ message: "バリデーションエラーが発生しました" }, { status: 422 });
    }

    await editQAndA(qaId, question, answer);
    return NextResponse.json({ message: "データが正常に更新されました" }, { status: 200 });
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message }, { status: 500 });
    }
    return NextResponse.json({ message: "サーバーで不明なエラーが発生しました" }, { status: 500 });
  }
};
