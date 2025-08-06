// components/SetNameInput.tsx

interface SetNameInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SetNameInput({ value, onChange}: SetNameInputProps) {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Name of the Set *"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-3 border rounded text-lg`}
      />
    </div>
  );
}
