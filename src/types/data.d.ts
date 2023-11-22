export type Flashcard = { id: number; order: number; userId: string; title: string };

export type QA = {
  id: number;
  order: number;
  flashCardId: number;
  question: string;
  answer: string;
};
