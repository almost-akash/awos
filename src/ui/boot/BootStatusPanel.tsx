import { RuntimeSnapshot } from "@/core/runtime/RuntimeSnapshot";
import { RuntimeState } from "@/core/runtime/RuntimeState";
import { Cursor } from "@/ui/common/Cursor";
import { StatusLedGroup } from "@/ui/common/status/StatusLedGroup";

interface Props {
  snapshot: Readonly<RuntimeSnapshot>;
}

const TOTAL_BOOT_STEPS = 7;

export function BootStatusPanel({ snapshot }: Props) {
  const completed = snapshot.logs.length;

  return (
    <section className="space-y-5 rounded-lg border border-neutral-900 bg-neutral-950 p-6">
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-[0.35em] text-neutral-500">
          System Initialization
        </p>

        <h2 className="font-runtime text-2xl font-medium text-white">
          {snapshot.currentStep?.title ?? "Waiting..."}

          {snapshot.state !== RuntimeState.READY && <Cursor />}
        </h2>
      </div>

      <StatusLedGroup active={completed} total={TOTAL_BOOT_STEPS} />

      <p className="font-runtime text-xs tracking-[0.15em] text-neutral-500">
        {completed} / {TOTAL_BOOT_STEPS} Runtime Services Online
      </p>
    </section>
  );
}
