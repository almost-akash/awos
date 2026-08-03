import { RuntimeSnapshot } from "@/core/runtime";
import { OrionSnapshot } from "@/core/services";

import { BootHeader } from "./BootHeader";
import { BootJournal } from "./BootJournal";
import { BootStatusPanel } from "./BootStatusPanel";

import { OrionPanel } from "@/ui/orion";

interface BootScreenProps {
  runtime: Readonly<RuntimeSnapshot>;
  orion: Readonly<OrionSnapshot>;
}

export function BootScreen({ runtime, orion }: BootScreenProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <BootHeader />

      <BootStatusPanel snapshot={runtime} />

      <BootJournal logs={runtime.logs} />

      <OrionPanel snapshot={orion} />
    </div>
  );
}
