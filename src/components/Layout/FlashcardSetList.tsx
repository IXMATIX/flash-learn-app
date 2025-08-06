import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";


export default function FlashcardSetList({ }) {

  return (
    <div className="grid gap-6 sm:grid-cols-2">
        <div
          className="group bg-white border border-gray-200 p-5 rounded-lg shadow hover:shadow-md transition flex flex-col gap-2 hover:border-blue-500"
        >
          <Link href={"#"} className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600">
              
            </h2>
            <p className="text-gray-600"></p>
            <p className="text-sm text-gray-500 mt-1">
              
            </p>
          </Link>

          <div className="mt-4 flex justify-end gap-4">
            <button
              
              className="text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <Pencil className="w-4 h-4" />
              Edit
            </button>
            <button
              
              className="text-red-600 hover:text-red-800 flex items-center gap-1"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
    </div>
  );
}
