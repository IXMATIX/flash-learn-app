"use client";
import { Trash2 } from "lucide-react";


export default function FlashcardInput({}) {
  return (
    <div className="mb-5 border p-4 rounded-lg bg-blue-50">
      <div className="mb-2">
        <input
          type="text"
          placeholder="Front"
    
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Back #"
    
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        className="text-red-600 hover:text-red-800 flex items-center gap-1 mt-2 text-sm"
      >
        <Trash2 className="w-4 h-4" />
        Delete Card
      </button>
    </div>
  );
}
