import { RuntimeState } from "./RuntimeState";

export interface RuntimeStep {
  title: string;
  description?: string;
  delay?: number;
  state?: RuntimeState;
}
