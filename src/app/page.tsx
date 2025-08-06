"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FlashcardSet } from "@/lib/types";

import HeaderSection from "@/components/Layout/HeaderSection";
import FlashcardSetList from "@/components/Layout/FlashcardSetList";

export default function HomePage() {
  const [sets, setSets] = useState<FlashcardSet[]>([]);

  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("flashcardSets");
    if (stored) setSets(JSON.parse(stored));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <HeaderSection />
      <FlashcardSetList
        sets={sets}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    </div>
  );
}
