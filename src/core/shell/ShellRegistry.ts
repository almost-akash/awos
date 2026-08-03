import { Command } from "./Command";

export class ShellRegistry {
  private readonly commands = new Map<string, Command>();

  register(command: Command) {
    this.commands.set(command.name, command);
  }

  get(name: string) {
    return this.commands.get(name);
  }

  all(): Command[] {
    return [...this.commands.values()];
  }
}
