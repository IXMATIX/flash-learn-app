// components/SetNameInput.tsx

interface SetNameInputProps {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

export default function SetNameInput({ value, onChange, error }: SetNameInputProps) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Name of the Set *"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-3 border rounded text-lg ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />
      {error && <p className="text-red-600 mt-1 text-sm">{error}</p>}
    </div>
  );
}