import { AWOS } from "@/core/runtime";
import { CommandResult } from "./CommandResult";
import { ShellRegistry } from "./ShellRegistry";

import { HelpCommand, ClearCommand } from "./commands";

export class Shell {
  private readonly registry = new ShellRegistry();

  constructor(private readonly runtime: AWOS) {
    this.registry.register(new ClearCommand());

    this.registry.register(new HelpCommand(this.registry.all()));
  }

  execute(input: string): CommandResult {
    const parts = input.trim().split(/\s+/);
    const commandName = parts[0].toLowerCase();
    const args = parts.slice(1);
    const command = this.registry.get(commandName);

    if (!command) {
      return {
        lines: [
          `Unknown command '${commandName}'.`,
          "",
          "Type 'help' to see available commands.",
        ],
      };
    }

    return command.execute(
      {
        runtime: this.runtime,
      },
      args,
    );
  }
}
