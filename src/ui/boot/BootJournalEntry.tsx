import { RuntimeLogEntry } from "@/core/runtime/RuntimeLogEntry";
import { ConsoleRow } from "@/ui/console/ConsoleRow";

interface Props {
  entry: RuntimeLogEntry;
}

export function BootJournalEntry({ entry }: Props) {
  return (
    <ConsoleRow timestamp={entry.timestamp} level={entry.level}>
      {entry.message}
    </ConsoleRow>
  );
}
