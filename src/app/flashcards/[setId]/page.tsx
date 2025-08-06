"use client";
import Flashcard from "@/components/Flashcard/Flashcard";
import FlashcardNavigation from "@/components/Flashcard/FlashcardNavigation";
import ProgressBar from "@/components/Flashcard/ProgressBar";

export default function FlashcardSetPage() {
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">{}</h1>
      <p className="text-gray-500 mb-6">{}</p>

      <Flashcard
        front={}
        back={}
        showBack={}
        onFlip={}
      />
      <FlashcardNavigation
        current={}
        total={}
        onPrev={}
        onNext={}
      />
      <ProgressBar current={} total={} />

    </div>
  );
}
