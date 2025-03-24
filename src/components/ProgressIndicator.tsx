interface ProgressIndicatorProps {
  progress: number;
}

export default function ProgressIndicator({
  progress,
}: ProgressIndicatorProps) {
  return (
    <div className={`w-full h-1.5 bg-gray-300/40 rounded-r-md overflow-hidden`}>
      <div
        style={{ width: `${progress}%` }}
        className={`bg-primary h-full transition-all duration-300`}
      ></div>
    </div>
  );
}
