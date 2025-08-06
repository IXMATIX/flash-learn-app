interface FlashcardNavigationProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function FlashcardNavigation({
  current,
  total,
  onPrev,
  onNext,
}: FlashcardNavigationProps) {
  return (
    <div className="flex justify-between mt-6">
      <button
        onClick={onPrev}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        disabled={current === 0}
      >
        ⬅️ Previous
      </button>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        disabled={current === total - 1 || total === 0}
      >
        Next ➡️
      </button>
    </div>
  );
}
