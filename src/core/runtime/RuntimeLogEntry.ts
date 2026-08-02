import { RuntimeLogLevel } from "./RuntimeLogLevel";

export interface RuntimeLogEntry {
  id: string;
  timestamp: number;
  level: RuntimeLogLevel;
  message: string;
}
