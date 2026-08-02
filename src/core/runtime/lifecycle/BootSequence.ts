import { Lifecycle } from "./Lifecycle";
import { AWOS } from "../AWOS";
import { RuntimeState } from "../RuntimeState";
import { RuntimeLogLevel } from "../RuntimeLogLevel";
export class BootSequence implements Lifecycle {
  async execute(runtime: AWOS): Promise<void> {
    await runtime.step({
      title: "Power Stable",
      state: RuntimeState.BOOTING,
      delay: 500,
    });

    await runtime.step({
      title: "Runtime Kernel Online",
      delay: 400,
    });

    await runtime.step({
      title: "Loading Theme Engine",
      delay: 350,
    });

    await runtime.step({
      title: "Initializing ORION",
      state: RuntimeState.INITIALIZING,
      delay: 700,
    });

    await runtime.step({
      title: "Diagnostics Online",
      delay: 400,
    });

    await runtime.step({
      title: "Module Registry Online",
      delay: 350,
    });

    await runtime.step({
      title: "Runtime Ready",
      state: RuntimeState.READY,
      level: RuntimeLogLevel.SUCCESS,
    });
  }
}
