import { RuntimeLogEntry } from "@/core/runtime/RuntimeLogEntry";
import { BootJournalEntry } from "./BootJournalEntry";
import { useEffect, useRef } from "react";

interface Props {
  logs: readonly RuntimeLogEntry[];
}

export function BootJournal({ logs }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [logs]);

  return (
    <section
      className="
      max-h-80
      w-full
      overflow-y-auto
      rounded-lg
      border
      border-neutral-900
      bg-neutral-950
      p-6
      font-mono
      "
    >
      <div className="space-y-2">
        {logs.map((entry) => (
          <BootJournalEntry key={entry.id} entry={entry} />
        ))}
      </div>
      <div ref={bottomRef} />
    </section>
  );
}
