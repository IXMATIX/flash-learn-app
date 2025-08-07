"use client";
import FlashcardInput from "@/components/InputsFlashcard/FlashcardInput";
import CardFormActions from "@/components/InputsFlashcard/CardFormActions";
import SetDescriptionInput from "@/components/InputsFlashcard/SetDescriptionInput";
import SetNameInput from "@/components/InputsFlashcard/SetNameInput";

export default function EditFlashcardSetPage() {

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">✏️ Edit Flashcard Set</h1>

      <SetNameInput
        value={}
        onChange={() =>()}
        error={}
      />

      <SetDescriptionInput
        value={}
        onChange={() => ()}
      />

      <h2 className="text-xl font-semibold mb-4 text-blue-600">🧠 Cards</h2>

      
        <FlashcardInput
          key={}
          index={}
          card={}
          error={}
          onChange={() => ()}
          onDelete={() => ()}
        />

      <CardFormActions onAddCard={} onSaveSet={} />
    </div>
  );
}
