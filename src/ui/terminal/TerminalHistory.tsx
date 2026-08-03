import { TerminalEntry } from "./types";
import { TerminalLine } from "./TerminalLine";

interface TerminalHistoryProps {
  history: readonly TerminalEntry[];
}

export function TerminalHistory({ history }: TerminalHistoryProps) {
  return (
    <div className="space-y-2">
      {history.map((entry) => (
        <TerminalLine key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
