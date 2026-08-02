import { RuntimeLogLevel } from "@/core/runtime/RuntimeLogLevel";

interface ConsoleLevelProps {
  level: RuntimeLogLevel;
}

const COLORS: Record<RuntimeLogLevel, string> = {
  [RuntimeLogLevel.INFO]: "font-normal text-cyan-400",
  [RuntimeLogLevel.PASS]: "font-bold text-emerald-400",
  [RuntimeLogLevel.WARN]: "font-semibold text-amber-400",
  [RuntimeLogLevel.FAIL]: "font-bold text-red-400",
};

const LABELS: Record<RuntimeLogLevel, string> = {
  [RuntimeLogLevel.INFO]: "INFO",
  [RuntimeLogLevel.PASS]: "PASS",
  [RuntimeLogLevel.WARN]: "WARN",
  [RuntimeLogLevel.FAIL]: "FAIL",
};

export function ConsoleLevel({ level }: ConsoleLevelProps) {
  return (
    <span className={`w-16 shrink-0 uppercase ${COLORS[level]}`}>
      {LABELS[level]}
    </span>
  );
}
