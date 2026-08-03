import { CommandContext } from "./CommandContext";
import { CommandResult } from "./CommandResult";

export interface Command {
  readonly name: string;
  readonly description: string;

  execute(context: CommandContext, args: string[]): CommandResult;
}
