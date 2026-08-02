import { RuntimeState } from "./RuntimeState";

export interface RuntimeSnapshot {
  state: RuntimeState;
  version: string;
  bootTime: Date | null;
  activeModule: string | null;
  theme: string;
}
