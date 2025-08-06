"use client";
import CardFormActions from "@/components/InputsFlashcard/CardFormActions";
import FlashcardInput from "@/components/InputsFlashcard/FlashcardInput";
import SetDescriptionInput from "@/components/InputsFlashcard/SetDescriptionInput";
import SetNameInput from "@/components/InputsFlashcard/SetNameInput";

export default function CreateFlashcardSetPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">📚 Create a new set of flashcards</h1>
      <SetNameInput/>
      <SetDescriptionInput/>
      <FlashcardInput/>
      <CardFormActions />
    </div>
  );
}
