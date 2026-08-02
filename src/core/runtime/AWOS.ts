import { RuntimeKernel } from "./RuntimeKernel";
import { RuntimeState } from "./RuntimeState";
import { BootSequence } from "./lifecycle/BootSequence";
import { RuntimeContainer, RuntimeServices } from "../services";
import { RuntimeStep } from "./RuntimeStep";

export class AWOS {
  private readonly container = new RuntimeContainer();

  constructor() {
    this.container.register(RuntimeServices.Kernel, new RuntimeKernel());
  }

  private get kernel() {
    return this.container.resolve<RuntimeKernel>(RuntimeServices.Kernel);
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

  async step(step: RuntimeStep) {
    this.kernel.update({ currentStep: step });
    this.kernel.appendLog({
      id: crypto.randomUUID(),
      timestamp: new Date(),
      level: "info",
      message: step.title,
    });
    if (step.state) {
      this.transition(step.state);
    }
    if (step.delay) {
      await this.wait(step.delay);
    }
  }

  wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
