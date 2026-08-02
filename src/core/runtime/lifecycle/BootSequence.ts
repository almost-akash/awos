import { Lifecycle } from "./Lifecycle";
import { AWOS } from "../AWOS";
import { RuntimeState } from "../RuntimeState";
export class BootSequence implements Lifecycle {
  async execute(runtime: AWOS): Promise<void> {
    await runtime.step({
      title: "Power Stable",
      state: RuntimeState.BOOTING,
      delay: 500,
    });
    await runtime.step({ title: "Loading Runtime Kernel", delay: 500 });
    await runtime.step({
      title: "Initializing ORION",
      state: RuntimeState.INITIALIZING,
      delay: 700,
    });
    await runtime.step({ title: "Loading Diagnostics", delay: 400 });
    await runtime.step({ title: "Runtime Ready", state: RuntimeState.READY });
  }
}
