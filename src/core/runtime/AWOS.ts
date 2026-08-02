import { RuntimeKernel } from "./RuntimeKernel";
import { RuntimeState } from "./RuntimeState";
import { BootSequence } from "./lifecycle/BootSequence";
import { RuntimeContainer, RuntimeServices } from "../services";
import { RuntimeStep } from "./RuntimeStep";
import { RuntimeLogLevel } from "./RuntimeLogLevel";

export class AWOS {
  private sessionStart = performance.now();
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

  public async step(step: RuntimeStep) {
    this.kernel.setCurrentStep(step);
    this.log(step.title, step.level ?? RuntimeLogLevel.INFO);
    if (step.state) {
      this.transition(step.state);
    }
    if (step.delay) {
      await this.wait(step.delay);
    }
  }

  private log(message: string, level: RuntimeLogLevel) {
    this.kernel.appendLog({
      id: crypto.randomUUID(),
      timestamp: performance.now() - this.sessionStart,
      level,
      message,
    });
  }

  wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
