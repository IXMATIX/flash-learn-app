// components/SetDescriptionInput.tsx

interface SetDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SetDescriptionInput({ value, onChange }: SetDescriptionInputProps) {
  return (
    <div className="mb-6">
      <textarea
        placeholder="Description"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded text-lg"
      />
    </div>
  );
}
