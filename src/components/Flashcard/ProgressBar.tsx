interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = total > 0 ? ((current + 1) / total) * 100 : 0;

  return (
    <div className="mt-4">
      <div className="w-full bg-gray-200 h-2 rounded">
        <div
          data-testid="progress-bar"
          className="bg-blue-500 h-2 rounded transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-sm text-gray-500 mt-1">
        Card {current + 1} of {total}
      </p>
    </div>
  );
}
