import { RuntimeState } from "./RuntimeState";
import { RuntimeLogLevel } from "./RuntimeLogLevel";

export interface RuntimeStep {
  title: string;
  description?: string;
  delay?: number;
  state?: RuntimeState;
  level?: RuntimeLogLevel;
}
