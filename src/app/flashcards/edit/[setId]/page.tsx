"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FlashcardSet } from "@/lib/types";
import { v4 as uuidv4 } from "uuid";

import FlashcardInput from "@/components/InputsFlashcard/FlashcardInput";
import CardFormActions from "@/components/InputsFlashcard/CardFormActions";
import SetDescriptionInput from "@/components/InputsFlashcard/SetDescriptionInput";
import SetNameInput from "@/components/InputsFlashcard/SetNameInput";

export default function EditFlashcardSetPage() {
  const [notFound, setNotFound] = useState(false);
  const { setId } = useParams();
  const router = useRouter();
  const [setData, setSetData] = useState<FlashcardSet | null>(null);
  const [errors, setErrors] = useState<{ name?: string; cards: string[] }>({
    cards: [],
  });

  useEffect(() => {
    const sets = JSON.parse(localStorage.getItem("flashcardSets") || "[]");
    const found = sets.find((s: FlashcardSet) => s.id === setId);

    if (!found) {
      router.push("/");
    } else {
      setSetData(found);
    }
  }, [setId]);


  // If setData is null after redirect, show "Set not found"
  if (!setData) return <p className="p-6">Set not found</p>;

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

  const handleAddCard = () => {
    if (!setData) return;
    setSetData({
      ...setData,
      cards: [...setData.cards, { id: uuidv4(), front: "", back: "" }],
    });
  };

  const handleDeleteCard = (index: number) => {
    if (!setData) return;
    const newCards = [...setData.cards];
    newCards.splice(index, 1);
    setSetData({ ...setData, cards: newCards });
  };

  const validate = () => {
    if (!setData) return false;

    const newErrors = { name: "", cards: [] as string[] };

    if (setData.name.trim() === "") {
      newErrors.name = "The set name is required.";
    }

    if (setData.cards.length === 0) {
      return false;
    }

    setData.cards.forEach((card, i) => {
      if (card.front.trim() === "" || card.back.trim() === "") {
        newErrors.cards[i] = `Complete card #${i + 1}`;
      } else {
        newErrors.cards[i] = "";
      }
    });

    setErrors(newErrors);
    const hasErrors = newErrors.name || newErrors.cards.some(Boolean);
    return !hasErrors;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const sets = JSON.parse(localStorage.getItem("flashcardSets") || "[]");
    const updatedSets = sets.map((s: FlashcardSet) =>
      s.id === setData!.id ? setData : s
    );

    localStorage.setItem("flashcardSets", JSON.stringify(updatedSets));

    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  if (!setData) return <p className="p-6">Loading set for editing...</p>;

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">✏️ Edit Flashcard Set</h1>

      <SetNameInput
        value={setData.name}
        onChange={(value: string) => handleChange("name", value)}
        error={errors.name}
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
          error={errors.cards[index]}
          onChange={(field, value) => handleCardChange(index, field, value)}
          onDelete={() => handleDeleteCard(index)}
        />
      ))}

      <CardFormActions onAddCard={handleAddCard} onSaveSet={handleSubmit} />
    </div>
  );
}
