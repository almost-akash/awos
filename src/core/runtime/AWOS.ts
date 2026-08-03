import { RuntimeKernel } from "./RuntimeKernel";
import { RuntimeState } from "./RuntimeState";
import { BootSequence } from "./lifecycle/BootSequence";
import { RuntimeContainer, RuntimeServices } from "../services";
import { RuntimeStep } from "./RuntimeStep";
import { RuntimeLogLevel } from "./RuntimeLogLevel";
import { ServiceContainer } from "@/core/services";

export class AWOS {
  private readonly sessionStart = performance.now();

  private readonly container = new RuntimeContainer();
  private readonly services = new ServiceContainer();
  private readonly bootSequence = new BootSequence();

  constructor() {
    this.container.register(RuntimeServices.Kernel, new RuntimeKernel());
  }

  private get kernel() {
    return this.container.resolve<RuntimeKernel>(RuntimeServices.Kernel);
  }

  public getServices(): Readonly<ServiceContainer> {
    return this.services;
  }

  subscribe = (...args: Parameters<RuntimeKernel["subscribe"]>) =>
    this.kernel.subscribe(...args);

  getSnapshot = () => this.kernel.getSnapshot();

  public async boot() {
    await this.bootSequence.execute(this);
    this.services.orion.initialize();
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

  private wait(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
