"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { FlashcardSet } from "@/lib/types";
import Flashcard from "@/components/Flashcard/Flashcard";
import FlashcardNavigation from "@/components/Flashcard/FlashcardNavigation";
import ProgressBar from "@/components/Flashcard/ProgressBar";

export default function FlashcardSetPage() {
  const [setData, setSetData] = useState<FlashcardSet | null>(null);
  const [current, setCurrent] = useState(0);

   if (!setData) {
    return (
      <div className="p-6 text-center text-gray-600">
        <p>Loading set...</p>
        <div className="mt-4 animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
      </div>
    );
  }

  if (setData.cards.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p>This set has no cards yet.</p>
      </div>
    );
  }
  const card = setData.cards[current];
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">{setData.name}</h1>
      <p className="text-gray-500 mb-6">{setData.description}</p>

      <Flashcard
        front={card.front}
        back={card.back}
        showBack={}
        onFlip={}
      />
      <FlashcardNavigation
        current={current}
        total={setData.cards.length}
        onPrev={}
        onNext={}
      />
      <ProgressBar current={current} total={setData.cards.length} />

    </div>
  );
}
