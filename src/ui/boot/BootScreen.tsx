import { RuntimeSnapshot } from "@/core/runtime";
import { OrionSnapshot } from "@/core/services";
import { Terminal } from "@/ui/terminal";
import { BootHeader } from "./BootHeader";
import { BootJournal } from "./BootJournal";
import { BootStatusPanel } from "./BootStatusPanel";
import { AWOS } from "@/core/runtime";
import { OrionPanel } from "@/ui/orion";

interface BootScreenProps {
  runtime: Readonly<RuntimeSnapshot>;
  orion: Readonly<OrionSnapshot>;
  awos: AWOS;
}

export function BootScreen({ runtime, orion, awos }: BootScreenProps) {
  return (
    <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
      <BootHeader />

      <BootStatusPanel snapshot={runtime} />

      <BootJournal logs={runtime.logs} />

      <OrionPanel snapshot={orion} />

      <Terminal runtime={awos} />
    </div>
  );
}
