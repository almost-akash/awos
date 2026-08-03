import { OrionMessage } from "./OrionMessage";
import { OrionSnapshot } from "./OrionSnapshot";
import { OrionState } from "./OrionState";

export class Orion {
  private readonly startedAt = performance.now();
  private state = OrionState.OFFLINE;
  private readonly messages: OrionMessage[] = [];

  public initialize(): void {
    this.state = OrionState.INITIALIZING;
    this.log("ORION Initializing...");
    this.state = OrionState.ONLINE;
    this.log("Knowledge Base Loaded");
    this.log("Runtime Connected");
    this.log("Awaiting Instructions");
  }

  public snapshot(): OrionSnapshot {
    return {
      state: this.state,
      messages: [...this.messages],
    };
  }

  private log(message: string): void {
    this.messages.push({
      id: crypto.randomUUID(),
      timestamp: Math.round(performance.now() - this.startedAt),
      message,
    });
  }
}
