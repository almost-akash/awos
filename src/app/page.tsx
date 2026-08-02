"use client";

import { RuntimeState } from "@/core/runtime";
import { useRuntime } from "@/hooks/useRuntime";
import { BootScreen } from "@/ui/boot/BootScreen";
import { BootHeader } from "@/ui/boot/BootHeader";

export default function Home() {
  const { snapshot, boot } = useRuntime();

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      {snapshot.state === RuntimeState.POWER_OFF ? (
        <div className="space-y-10 text-center">
          <BootHeader />
          <button
            onClick={boot}
            className="rounded-lg border border-neutral-700 px-8 py-3 hover:bg-neutral-900"
          >
            Power On
          </button>
        </div>
      ) : (
        <BootScreen snapshot={snapshot} />
      )}
    </main>
  );
}
