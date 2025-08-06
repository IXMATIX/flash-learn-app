"use client";
import { Trash2 } from "lucide-react";
import { Flashcard } from "@/lib/types";

interface FlashcardInputProps {
  index: number;
  card: Flashcard;
  error?: string;
  onChange: (field: "front" | "back", value: string) => void;
  onDelete: () => void;
}

export default function FlashcardInput({
  index,
  card,
  onChange,
  onDelete,
}: FlashcardInputProps) {
  return (
    <div className="mb-5 border p-4 rounded-lg bg-blue-50">
      <div className="mb-2">
        <input
          type="text"
          placeholder={`Frente #${index + 1}`}
          value={card.front}
          onChange={(e) => onChange("front", e.target.value)}
          className={`w-full p-2 border rounded`}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder={`Back #${index + 1}`}
          value={card.back}
          onChange={(e) => onChange("back", e.target.value)}
          className={`w-full p-2 border rounded`}
        />
      </div>

      <button
        onClick={onDelete}
        className="text-red-600 hover:text-red-800 flex items-center gap-1 mt-2 text-sm"
      >
        <Trash2 className="w-4 h-4" />
        Delete Card
      </button>
    </div>
  );
}
