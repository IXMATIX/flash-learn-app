"use client";
import { useState } from "react";
import { Flashcard } from "@/lib/types";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import FlashcardInput from "@/components/InputsFlashcard/FlashcardInput";
import SetNameInput from "@/components/InputsFlashcard/SetNameInput";
import SetDescriptionInput from "@/components/InputsFlashcard/SetDescriptionInput";
import CardFormActions from "@/components/InputsFlashcard/CardFormActions";

export default function CreateFlashcardSetPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cards, setCards] = useState<Flashcard[]>([
    { id: uuidv4(), front: "", back: "" },
  ]);

  const router = useRouter();

  const handleCardChange = (index: number, field: "front" | "back", value: string) => {

  };

  const addCard = () => {
    setCards([...cards, { id: uuidv4(), front: "", back: "" }]);
  };

  const handleSubmit = () => {

  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📚 Create a new set of flashcards</h1>
      <SetNameInput value={name} onChange={setName}/>
      <SetDescriptionInput value={description} onChange={setDescription} />
      <h2 className="text-xl font-semibold mb-4 text-blue-600">🧠 Cards</h2>
      {cards.map((card, index) => (
        <FlashcardInput
          key={card.id}
          index={index}
          card={card}
          onChange={(field, value) => handleCardChange(index, field, value)}
          onDelete={() => (index)}
        />
      ))}
      <CardFormActions onAddCard={addCard} onSaveSet={handleSubmit} />
    </div>
  );
}
