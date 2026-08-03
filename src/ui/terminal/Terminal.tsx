"use client";

import { useState, useMemo } from "react";
import { AWOS } from "@/core/runtime";
import { Shell } from "@/core/shell/Shell";
import { TerminalEntry } from "./types";
import { TerminalHistory } from "./TerminalHistory";
import { TerminalInput } from "./TerminalInput";

interface TerminalProps {
  runtime: AWOS;
}
export function Terminal({ runtime }: TerminalProps) {
  const shell = useMemo(() => new Shell(runtime), [runtime]);

  const [history, setHistory] = useState<TerminalEntry[]>([]);

  function execute(command: string) {
    const result = shell.execute(command);

    if (result.lines.includes("__CLEAR__")) {
      setHistory([]);
      return;
    }

    const entries: TerminalEntry[] = [
      {
        id: crypto.randomUUID(),
        text: command,
        kind: "input",
      },

      ...result.lines.map((line) => ({
        id: crypto.randomUUID(),
        text: line,
        kind: "output" as const,
      })),
    ];

    setHistory((previous) => [...previous, ...entries]);
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
        <TerminalInput onSubmit={execute} />
      </div>
    </section>
  );
}
