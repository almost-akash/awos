"use client";

import { RuntimeState } from "@/runtime";
import { useRuntime } from "@/hooks/useRuntime";

export default function Home() {
  const { state, boot } = useRuntime();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-neutral-950 text-white">
      <h1 className="text-5xl font-bold">AI Workbench</h1>

      <p className="text-neutral-400">
        Runtime State: <strong>{state}</strong>
      </p>

      {state === RuntimeState.POWER_OFF && (
        <button
          onClick={boot}
          className="rounded-md bg-white px-6 py-3 text-black transition hover:scale-105"
        >
          Power On
        </button>
      )}
    </main>
  );
}
