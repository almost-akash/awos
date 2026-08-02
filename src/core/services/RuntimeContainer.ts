import { RuntimeServiceToken } from "./RuntimeServices";

export class RuntimeContainer {
  private readonly services = new Map<RuntimeServiceToken, unknown>();

  register<T>(token: RuntimeServiceToken, instance: T): void {
    if (this.services.has(token)) {
      throw new Error("Service already registered.");
    }

    this.services.set(token, instance);
  }

  resolve<T>(token: RuntimeServiceToken): T {
    const service = this.services.get(token);

    if (!service) {
      throw new Error("Requested service is not registered.");
    }
    return service as T;
  }

  has(token: RuntimeServiceToken): boolean {
    return this.services.has(token);
  }
}
