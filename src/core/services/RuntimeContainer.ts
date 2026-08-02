export class RuntimeContainer {
  private readonly services = new Map<string, unknown>();

  register<T>(key: string, instance: T): void {
    if (this.services.has(key)) {
      throw new Error(`Service '${key}' is already registered.`);
    }

    this.services.set(key, instance);
  }

  resolve<T>(key: string): T {
    const service = this.services.get(key);

    if (!service) {
      throw new Error(`Service '${key}' was not found.`);
    }
    return service as T;
  }

  has(key: string): boolean {
    return this.services.has(key);
  }
}
