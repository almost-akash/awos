import { RuntimeSnapshot } from "@/core/runtime";
import { BootHeader } from "./BootHeader";
import { BootJournal } from "./BootJournal";
import { BootStatusPanel } from "./BootStatusPanel";

interface Props {
  snapshot: Readonly<RuntimeSnapshot>;
}

export function BootScreen({ snapshot }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <BootHeader />

      <BootStatusPanel snapshot={snapshot} />

      <BootJournal logs={snapshot.logs} />
    </div>
  );
}
