import { RuntimeSnapshot } from "@/core/runtime";
import { BootHeader } from "./BootHeader";
import { BootJournal } from "./BootJournal";

interface Props {
  snapshot: Readonly<RuntimeSnapshot>;
}

export function BootScreen({ snapshot }: Props) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <BootHeader />

      <BootJournal logs={snapshot.logs} />
    </div>
  );
}
