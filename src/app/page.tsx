"use client";

import { RuntimeState } from "@/core/runtime";
import { useRuntime } from "@/hooks/useRuntime";

import { BootHeader } from "@/ui/boot/BootHeader";
import { BootScreen } from "@/ui/boot/BootScreen";

export default function Home() {
  const { runtime, snapshot, boot } = useRuntime();

  const orion = runtime.getServices().orion.snapshot();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      {snapshot.state === RuntimeState.POWER_OFF ? (
        <div className="space-y-10 text-center">
          <BootHeader />

          <button
            onClick={boot}
            className="rounded-lg border border-neutral-700 px-8 py-3 transition-colors hover:bg-neutral-900"
          >
            Power On
          </button>
        </div>
      ) : (
        <BootScreen runtime={snapshot} orion={orion} awos={runtime} />
      )}
    </main>
  );
}
