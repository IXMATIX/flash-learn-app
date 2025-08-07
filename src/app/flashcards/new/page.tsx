"use client";
import { useState } from "react";
import { Flashcard } from "@/lib/types";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import FlashcardInput from "@/components/InputsFlashcard/FlashcardInput";
import SetNameInput from "@/components/InputsFlashcard/SetNameInput";
import SetDescriptionInput from "@/components/InputsFlashcard/SetDescriptionInput";
import CardFormActions from "@/components/InputsFlashcard/CardFormActions";
import { toast } from "react-toastify";

export default function CreateFlashcardSetPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const [cards, setCards] = useState<Flashcard[]>([
    { id: uuidv4(), front: "", back: "" },
  ]);
  const [errors, setErrors] = useState<{ name?: string; cards: string[] }>({
    cards: [],
  });

  const handleCardChange = (index: number, field: "front" | "back", value: string) => {
    const newCards = [...cards];
    newCards[index][field] = value;
    setCards(newCards);
  };

  const addCard = () => {
    setCards([...cards, { id: uuidv4(), front: "", back: "" }]);
  };

  const handleDeleteCard = (index: number) => {
    setCards(cards.filter((_, i) => i !== index));
  };

  const validate = () => {
    const newErrors = { name: "", cards: [] as string[] };

    if (name.trim() === "") {
      newErrors.name = "The set name is required.";
    }

    if (cards.length === 0) {
      return false;
    }

    cards.forEach((card, i) => {
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

    const newSet = {
      id: uuidv4(),
      name,
      description,
      cards,
    };

    const existing = JSON.parse(localStorage.getItem("flashcardSets") || "[]");
    localStorage.setItem("flashcardSets", JSON.stringify([...existing, newSet]));

    toast.success("Set saved successfully! 🎉");

    router.push("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📚 Create a new set of flashcards</h1>
      <SetNameInput value={name} onChange={setName} error={errors.name} />
      <SetDescriptionInput value={description} onChange={setDescription} />
      <h2 className="text-xl font-semibold mb-4 text-blue-600">🧠 Cards</h2>
      {cards.map((card, index) => (
        <FlashcardInput
          key={card.id}
          index={index}
          card={card}
          error={errors.cards[index]}
          onChange={(field, value) => handleCardChange(index, field, value)}
          onDelete={() => handleDeleteCard(index)}
        />
      ))}
      <CardFormActions onAddCard={addCard} onSaveSet={handleSubmit} />
    </div>
  );
}
