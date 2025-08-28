type ProgressBarProps = {
  value: number;
  style?: "default";
  bgColor?: string;
  darkBgColor?: string;
  progressColor?: string;
  darkProgressColor?: string;
  height?: string;
};

export default function ProgressBar({
  value,
  style,
  bgColor,
  darkBgColor,
  progressColor,
  darkProgressColor,
  height,
}: ProgressBarProps) {
  if (style === "default") {
    bgColor = "bg-gray-300";
    darkBgColor = "bg-gray-600";
    progressColor = "bg-black";
    darkProgressColor = "bg-gray-200";
    height = "h-[8px]";
  }
  return (
    <div
      className={`${height} ${bgColor} dark:${darkBgColor} rounded relative overflow-hidden`}
    >
      <div
        className={`absolute left-0 top-0 h-full ${progressColor} dark:${darkProgressColor}`}
        style={{ width: `${value * 100}%` }}
      ></div>
    </div>
  );
}
