"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FlashcardSet } from "@/lib/types";

import FlashcardInput from "@/components/InputsFlashcard/FlashcardInput";
import CardFormActions from "@/components/InputsFlashcard/CardFormActions";
import SetDescriptionInput from "@/components/InputsFlashcard/SetDescriptionInput";
import SetNameInput from "@/components/InputsFlashcard/SetNameInput";

export default function EditFlashcardSetPage() {
  const [notFound, setNotFound] = useState(false);
  const { setId } = useParams();
  const router = useRouter();
  const [setData, setSetData] = useState<FlashcardSet | null>(null);

  useEffect(() => {
    const sets = JSON.parse(localStorage.getItem("flashcardSets") || "[]");
    const found = sets.find((s: FlashcardSet) => s.id === setId);

    if (!found && !notFound) {
      setNotFound(true);
      router.push("/");
    } else {
      setSetData(found);
    }
  }, [setId, notFound]);

  if (notFound) return <p className="p-6">Set not found</p>;

  if (!setData) return <p className="p-6">Loading set for editing...</p>;

  const handleChange = (field: string, value: string) => {
    if (!setData) return;
    setSetData({ ...setData, [field]: value });
  };

  const handleCardChange = (index: number, field: "front" | "back", value: string) => {
    if (!setData) return;
    const newCards = [...setData.cards];
    newCards[index][field] = value;
    setSetData({ ...setData, cards: newCards });
  };

  const handleDeleteCard = (index: number) => {
    if (!setData) return;
    const newCards = [...setData.cards];
    newCards.splice(index, 1);
    setSetData({ ...setData, cards: newCards });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">✏️ Edit Flashcard Set</h1>

      <SetNameInput
        value={setData.name}
        onChange={(value: string) => handleChange("name", value)}
        error={}
      />

      <SetDescriptionInput
        value={setData.description ?? ""}
        onChange={(value: string) => handleChange("description", value)}
      />

      <h2 className="text-xl font-semibold mb-4 text-blue-600">🧠 Cards</h2>

      {setData.cards.map((card, index) => (
        <FlashcardInput
          key={card.id}
          index={index}
          card={card}
          error={ }
          onChange={(field, value) => handleCardChange(index, field, value)}
          onDelete={() => handleDeleteCard(index)}
        />
      ))}
      <CardFormActions onAddCard={ } onSaveSet={ } />
    </div>
  );
}
