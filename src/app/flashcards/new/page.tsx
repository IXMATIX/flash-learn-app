"use client";
import CardFormActions from "@/components/InputsFlashcard/CardFormActions";
import FlashcardInput from "@/components/InputsFlashcard/FlashcardInput";
import SetDescriptionInput from "@/components/InputsFlashcard/SetDescriptionInput";
import SetNameInput from "@/components/InputsFlashcard/SetNameInput";
import { useState } from "react";

export default function CreateFlashcardSetPage() {
  const [setName, setSetName] = useState("");
  const [setDescription, setSetDescription] = useState("");
  const [flashcards, setFlashcards] = useState([
    // Example initial flashcard; adjust as needed
    { question: "", answer: "" }
  ]);

  // Handler for updating a flashcard at a given index
  const handleFlashcardChange = (index, field, value) => {
    setFlashcards(prev =>
      prev.map((card, i) =>
        i === index ? { ...card, [field]: value } : card
      )
    );
  };

  // Handler for adding a new flashcard
  const handleAddFlashcard = () => {
    setFlashcards(prev => [...prev, { question: "", answer: "" }]);
  };

  // Handler for removing a flashcard
  const handleRemoveFlashcard = (index) => {
    setFlashcards(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📚 Create a new set of flashcards</h1>
      <SetNameInput
        value={setName}
        onChange={e => setSetName(e.target.value)}
      />
      <SetDescriptionInput
        value={setDescription}
        onChange={e => setSetDescription(e.target.value)}
      />
      <FlashcardInput
        flashcards={flashcards}
        onFlashcardChange={handleFlashcardChange}
        onAddFlashcard={handleAddFlashcard}
        onRemoveFlashcard={handleRemoveFlashcard}
      />
      <CardFormActions
        setName={setName}
        setDescription={setDescription}
        flashcards={flashcards}
      />
    </div>
  );
}
