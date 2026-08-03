export interface TerminalEntry {
  id: string;
  text: string;
  kind: "input" | "output";
}
