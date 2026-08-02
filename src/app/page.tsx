"use client";

import { RuntimeState } from "@/runtime";
import { useRuntime } from "@/hooks/useRuntime";
import { BootScreen } from "@/components/boot/BootScreen";

export default function Home() {
  const { state, boot } = useRuntime();

  return (
    <main className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="space-y-10">
        <BootScreen state={state} />
        {state === RuntimeState.POWER_OFF && (
          <button
            onClick={boot}
            className="w-full rounded-md bg-white py-3 text-black transition hover:opacity-90"
          >
            Power ON
          </button>
        )}
        {state === RuntimeState.READY && (
          <p className="text-center font-mono text-green-400">Runtime Ready</p>
        )}
      </div>
    </main>
  );
}
