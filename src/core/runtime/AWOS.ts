import { RuntimeKernel } from "./RuntimeKernel";
import { RuntimeState } from "./RuntimeState";
import { BootSequence } from "./lifecycle/BootSequence";
import { RuntimeContainer } from "../services";

export class AWOS {
  private readonly container = new RuntimeContainer();

  constructor() {
    this.container.register("RuntimeKernel", new RuntimeKernel());
  }

  private get kernel() {
    return this.container.resolve<RuntimeKernel>("RuntimeKernel");
  }

  subscribe = (...args: Parameters<RuntimeKernel["subscribe"]>) =>
    this.kernel.subscribe(...args);
  getSnapshot = () => this.kernel.getSnapshot();
  async boot() {
    await new BootSequence().execute(this);
  }
  transition(state: RuntimeState) {
    const snapshot = this.kernel.getSnapshot();
    this.kernel.update({
      state,
      bootTime: state === RuntimeState.READY ? new Date() : snapshot.bootTime,
    });
  }

  wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
