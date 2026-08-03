import { TerminalEntry } from "./types";

interface TerminalLineProps {
  entry: TerminalEntry;
}

export function TerminalLine({ entry }: TerminalLineProps) {
  if (entry.kind === "input") {
    return (
      <div className="flex items-center gap-3 font-runtime text-sm">
        <span className="text-cyan-400">{">"}</span>
        <span className="text-neutral-200">{entry.text}</span>
      </div>
    );
  }

  return (
    <div className="pl-6 font-runtime text-sm text-neutral-400">
      {entry.text}
    </div>
  );
}
