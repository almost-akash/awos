import { RuntimeKernel } from "./RuntimeKernel";
import { RuntimeState } from "./RuntimeState";
import { BootSequence } from "./lifecycle/BootSequence";

export class AWOS {
  private kernel = new RuntimeKernel();

  subscribe = this.kernel.subscribe.bind(this.kernel);
  getSnapshot = this.kernel.getSnapshot.bind(this.kernel);

  async boot() {
    await new BootSequence().execute(this);
  }

  transition(state: RuntimeState) {
    this.kernel.update({
      state,
      bootTime:
        state === RuntimeState.READY
          ? new Date()
          : this.kernel.getSnapshot().bootTime,
    });
  }

  wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
