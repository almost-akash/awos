import { TerminalEntry } from "./types";

interface TerminalLineProps {
  entry: TerminalEntry;
}

export function TerminalLine({ entry }: TerminalLineProps) {
  return (
    <div className="flex items-center gap-3 font-runtime text-sm">
      <span className="select-none text-cyan-400">{">"}</span>

      <span className="text-neutral-200">{entry.text}</span>
    </div>
  );
}
