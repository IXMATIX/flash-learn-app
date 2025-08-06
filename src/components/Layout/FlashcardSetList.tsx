import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { FlashcardSet } from "@/lib/types";

interface Props {
  sets: FlashcardSet[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function FlashcardSetList({ sets, onEdit, onDelete }: Props) {
  const router = useRouter();

  if (sets.length === 0) {
    return (
      <p className="text-gray-500 text-lg text-center mt-12">
        No sets created yet. Start by creating one!
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {sets.map((set) => (
        <div
          key={set.id}
          className="group bg-white border border-gray-200 p-5 rounded-lg shadow hover:shadow-md transition flex flex-col gap-2 hover:border-blue-500"
        >
          <Link href={`/flashcards/${set.id}`} className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
              {set.name}
            </h2>
            <p className="text-gray-600">{set.description}</p>
            <p className="text-sm text-gray-500 mt-1">
              {set.cards.length} card{set.cards.length !== 1 && "s"}
            </p>
          </Link>

          <div className="mt-4 flex justify-end gap-4">
            <button
              onClick={() => onEdit(set.id)}
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <Pencil className="w-4 h-4" />
              Edit
            </button>
            <button
              onClick={() => onDelete(set.id)}
              className="text-red-600 hover:text-red-800 flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
