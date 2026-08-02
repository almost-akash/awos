import { listeners } from "process";
import { RuntimeSnapshot } from "./RuntimeSnapshot";
import { RuntimeState } from "./RuntimeState";

type Listener = (snapshot: Readonly<RuntimeSnapshot>) => void;

export class RuntimeKernel {
  private snapshot: RuntimeSnapshot = {
    state: RuntimeState.POWER_OFF,
    version: "1.0.0",
    bootTime: null,
    activeModule: null,
    theme: "midnight",
  };

  private listeners = new Set<Listener>();

  subscribe(listener: Listener) {
    this.listeners.add(listener);
    listener(this.getSnapshot());

    return () => {
      this.listeners.delete(listener);
    };
  }

  getSnapshot(): Readonly<RuntimeSnapshot> {
    return Object.freeze({ ...this.snapshot });
  }

  update(partial: Partial<RuntimeSnapshot>) {
    this.snapshot = {
      ...this.snapshot,
      ...partial,
    };

    this.notify();
  }

  private notify() {
    const snapshot = this.getSnapshot();

    this.listeners.forEach((listener) => listener(snapshot));
  }
}
