// components/CardFormActions.tsx

interface CardFormActionsProps {
  onAddCard: () => void;
  onSaveSet: () => void;
}

export default function CardFormActions({ onAddCard, onSaveSet }: CardFormActionsProps) {
  return (
    <div className="flex justify-between items-center mt-6">
      <button
        type="button"
        onClick={onAddCard}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
      >
        ➕ Add Card
      </button>

      <button
        type="button"
        onClick={onSaveSet}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        💾 Save Set
      </button>
    </div>
  );
}
