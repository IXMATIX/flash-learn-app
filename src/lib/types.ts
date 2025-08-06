export type Flashcard = {
  id: string;
  front: string;
  back: string;
};

export type FlashcardSet = {
  id: string;
  name: string;
  description?: string;
  cards: Flashcard[];
};
