import { OrionMessage } from "./OrionMessage";
import { OrionState } from "./OrionState";

export interface OrionSnapshot {
  state: OrionState;
  messages: readonly OrionMessage[];
}
