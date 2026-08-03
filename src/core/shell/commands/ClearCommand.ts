import { Command } from "../Command";
import { CommandContext } from "../CommandContext";
import { CommandResult } from "../CommandResult";

export class ClearCommand implements Command {
  readonly name = "clear";

  readonly description = "Clear terminal history.";

  execute(_context: CommandContext, _args: string[]): CommandResult {
    return {
      lines: ["__CLEAR__"],
    };
  }
}
