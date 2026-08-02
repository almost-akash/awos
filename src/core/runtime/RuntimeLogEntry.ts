export type RuntimeLogLevel = "info" | "success" | "warning" | "error";

export interface RuntimeLogEntry {
  id: string;
  timestamp: Date;
  level: RuntimeLogLevel;
  message: string;
}
