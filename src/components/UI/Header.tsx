import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#4255ff] text-white py-4 shadow">
      <div className="max-w-5xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          🧠 FlashLearn
        </Link>

        <nav className="space-x-4">
          <Link href="/flashcards/new" className="hover:underline">
            New Set
          </Link>
        </nav>
      </div>
    </header>
  );
}
