import { Command } from "../Command";
import { CommandContext } from "../CommandContext";
import { CommandResult } from "../CommandResult";

export class HelpCommand implements Command {
  readonly name = "help";
  readonly description = "Display available commands.";
  constructor(private readonly commands: readonly Command[]) {}

  execute(_context: CommandContext, _args: string[]): CommandResult {
    return {
      lines: [
        "Available Commands",
        "",
        ...this.commands.map(
          (command) => `${command.name.padEnd(12)} ${command.description}`,
        ),
      ],
    };
  }
}
