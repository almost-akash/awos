import { RuntimeLogLevel } from "./RuntimeLogLevel";

export interface RuntimeLogEntry {
  id: string;
  timestamp: Date;
  level: RuntimeLogLevel;
  message: string;
}
