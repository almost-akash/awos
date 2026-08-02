import { RuntimeKernel } from "./RuntimeKernel";
import { RuntimeState } from "./RuntimeState";

export class AWOS {
  private kernel = new RuntimeKernel();

  subscribe = this.kernel.subscribe.bind(this.kernel);

  getSnapshot = this.kernel.getSnapshot.bind(this.kernel);

  async boot() {
    this.kernel.update({ state: RuntimeState.BOOTING });

    await this.delay(1000);

    this.kernel.update({ state: RuntimeState.INITIALIZING });

    await this.delay(1000);

    this.kernel.update({ state: RuntimeState.READY, bootTime: new Date() });
  }

  private delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
