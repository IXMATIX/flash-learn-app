import Link from "next/link";
import { PlusCircle, Layers3 } from "lucide-react";

export default function HeaderSection() {
  return (
    <div className="flex items-center justify-between mb-6 sm:flex-row flex-col gap-4">
      <h1 className="text-4xl font-bold text-gray-800 flex items-center gap-2">
        <Layers3 className="w-8 h-8 text-blue-600" />
        My Flashcards
      </h1>
      <Link
        href="/flashcards/new"
        className="flex items-center gap-2 px-4 py-2 bg-[#4255ff] text-white rounded hover:bg-blue-700 transition"
      >
        <PlusCircle className="w-5 h-5" />
        New Set
      </Link>
    </div>
  );
}
