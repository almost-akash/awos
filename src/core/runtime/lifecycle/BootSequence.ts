import { Lifecycle } from "./Lifecycle";
import { AWOS } from "../AWOS";
import { RuntimeState } from "../RuntimeState";

export class BootSequence implements Lifecycle {
  async execute(runtime: AWOS): Promise<void> {
    runtime.transition(RuntimeState.BOOTING);

    await runtime.wait(800);

    runtime.transition(RuntimeState.INITIALIZING);

    await runtime.wait(1200);

    runtime.transition(RuntimeState.READY);
  }
}
