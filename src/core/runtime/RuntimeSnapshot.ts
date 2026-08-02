import { RuntimeState } from "./RuntimeState";
import { RuntimeStep } from "./RuntimeStep";
import { RuntimeLogEntry } from "./RuntimeLogEntry";

export interface RuntimeSnapshot {
  state: RuntimeState;
  version: string;
  bootTime: Date | null;
  activeModule: string | null;
  theme: string;
  currentStep: RuntimeStep | null;
  logs: readonly RuntimeLogEntry[];
}
