import { RuntimeState } from "@/runtime";
import { BootStatus } from "./BootStatus";

interface BootScreenProps {
  state: RuntimeState;
}

export function BootScreen({ state }: BootScreenProps) {
  return (
    <div className="flex flex-col items-center gap-8">
      <h1 className="text-6xl font-bold tracking-widest">AWOS</h1>
      <p className="font-mono text-neutral-400">
        AI Workbench Operating System
      </p>
      <BootStatus state={state} />
    </div>
  );
}
