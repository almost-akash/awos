import { RuntimeLogLevel } from "@/core/runtime/RuntimeLogLevel";

interface ConsoleLevelProps {
  level: RuntimeLogLevel;
}

const COLORS: Record<RuntimeLogLevel, string> = {
  [RuntimeLogLevel.INFO]: "text-cyan-400",
  [RuntimeLogLevel.PASS]: "text-emerald-400",
  [RuntimeLogLevel.WARN]: "text-amber-400",
  [RuntimeLogLevel.FAIL]: "text-red-400",
};

const LABELS: Record<RuntimeLogLevel, string> = {
  [RuntimeLogLevel.INFO]: "INFO",
  [RuntimeLogLevel.PASS]: "PASS",
  [RuntimeLogLevel.WARN]: "WARN",
  [RuntimeLogLevel.FAIL]: "FAIL",
};

export function ConsoleLevel({ level }: ConsoleLevelProps) {
  return (
    <span className={`w-16 shrink-0 font-semibold uppercase ${COLORS[level]}`}>
      {LABELS[level]}
    </span>
  );
}
