import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          🧠 FlashLearn
        </Link>

        <nav>
          <Link href="/flashcards/new">
            New Set
          </Link>
        </nav>
      </div>
    </header>
  );
}
