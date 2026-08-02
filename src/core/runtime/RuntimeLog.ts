export interface RuntimeLog {
  id: string;
  timestamp: number;
  message: string;
  level: "info" | "pass" | "warn" | "fail";
}
