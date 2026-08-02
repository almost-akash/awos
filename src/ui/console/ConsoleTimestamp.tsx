import { formatRuntimeTime } from "@/lib/runtimeTime";

interface ConsoleTimestampProps {
  timestamp: number;
}

export function ConsoleTimestamp({ timestamp }: ConsoleTimestampProps) {
  return (
    <span className="w-24 shrink-0 text-neutral-500">
      {formatRuntimeTime(timestamp)}
    </span>
  );
}
