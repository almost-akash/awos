import { ReactNode } from "react";
import { RuntimeLogLevel } from "@/core/runtime/RuntimeLogLevel";
import { ConsoleLevel } from "./ConsoleLevel";
import { ConsoleTimestamp } from "./ConsoleTimestamp";

interface ConsoleRowProps {
  timestamp: number;
  level: RuntimeLogLevel;
  children: ReactNode;
}

export function ConsoleRow({ timestamp, level, children }: ConsoleRowProps) {
  return (
    <div className="flex items-center gap-4 font-mono text-sm leading-6">
      <ConsoleTimestamp timestamp={timestamp} />

      <ConsoleLevel level={level} />

      <span className="flex-1 text-neutral-200">{children}</span>
    </div>
  );
}
