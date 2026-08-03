import { OrionSnapshot, OrionState } from "@/core/services";
import { OrionMessageRow } from "./OrionMessageRow";

interface OrionPanelProps {
  snapshot: Readonly<OrionSnapshot>;
}

export function OrionPanel({ snapshot }: OrionPanelProps) {
  return (
    <section className="rounded-lg border border-neutral-900 bg-neutral-950 p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xs uppercase tracking-[0.35em] text-cyan-400">
          ORION
        </h2>

        <div className="flex items-center gap-2">
          <div
            className={`h-2.5 w-2.5 rounded-full ${
              snapshot.state === OrionState.ONLINE
                ? "bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.75)]"
                : "bg-neutral-600"
            }`}
          />

          <span className="font-runtime text-xs uppercase tracking-[0.2em] text-neutral-400">
            {snapshot.state}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        {snapshot.messages.map((message) => (
          <OrionMessageRow key={message.id} message={message} />
        ))}
      </div>
    </section>
  );
}
