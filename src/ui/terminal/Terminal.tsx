"use client";

import { useState } from "react";

import { TerminalEntry } from "./types";
import { TerminalHistory } from "./TerminalHistory";
import { TerminalInput } from "./TerminalInput";

export function Terminal() {
  const [history, setHistory] = useState<TerminalEntry[]>([]);

  function handleCommand(command: string) {
    setHistory((previous) => [
      ...previous,
      {
        id: crypto.randomUUID(),
        text: command,
      },
    ]);
  }

  return (
    <section className="rounded-lg border border-neutral-900 bg-neutral-950 p-6">
      <div className="mb-6">
        <h2 className="text-xs uppercase tracking-[0.35em] text-cyan-400">
          COMMAND CONSOLE
        </h2>
      </div>
      <TerminalHistory history={history} />
      <div className="mt-4">
        <TerminalInput onSubmit={handleCommand} />
      </div>
    </section>
  );
}
