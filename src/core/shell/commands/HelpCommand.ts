import { Command } from "../Command";
import { CommandContext } from "../CommandContext";
import { CommandResult } from "../CommandResult";
import { ShellRegistry } from "../ShellRegistry";

export class HelpCommand implements Command {
  readonly name = "help";
  readonly description = "Display available commands.";

  constructor(private readonly registry: ShellRegistry) {}

  execute(_context: CommandContext, _args: string[]): CommandResult {
    return {
      lines: [
        "Available Commands",
        "",
        ...this.registry
          .all()
          .map(
            (command) => `${command.name.padEnd(12)} ${command.description}`,
          ),
      ],
    };
  }
}
