-- CreateTable
CREATE TABLE "Flash_Card" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "title" VARCHAR(20) NOT NULL,

    CONSTRAINT "Flash_Card_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Question_Answer" (
    "id" SERIAL NOT NULL,
    "order" INTEGER NOT NULL,
    "flashCardId" INTEGER NOT NULL,
    "question" VARCHAR(200) NOT NULL,
    "answer" VARCHAR(400) NOT NULL,

    CONSTRAINT "Question_Answer_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Question_Answer" ADD CONSTRAINT "Question_Answer_flashCardId_fkey" FOREIGN KEY ("flashCardId") REFERENCES "Flash_Card"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
