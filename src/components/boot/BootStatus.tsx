import { RuntimeState } from "@/runtime";

interface BootStatusProps {
  state: RuntimeState;
}

export function BootStatus({ state }: BootStatusProps) {
  const power = true;
  const runtime = state !== RuntimeState.POWER_OFF;
  const orion = state === RuntimeState.READY;

  return (
    <div className="space-y-3 rounded-lg border border-neutral-800 bg-neutral-900 p-6 font-mono text-sm">
      <Status ok={power} label="Power Stable" />

      <Status ok={runtime} label="Runtime Initialized" />

      <Status ok={orion} label="ORION Online" />
    </div>
  );
}

function Status({ ok, label }: { ok: boolean; label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className={ok ? "text-green-400" : "text-neutral-500"}>
        {ok ? "✓" : "○"}
      </span>
      <span>{label}</span>
    </div>
  );
}
