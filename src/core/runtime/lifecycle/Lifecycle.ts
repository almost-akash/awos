import { AWOS } from "../AWOS";

export interface Lifecycle {
  execute(runtime: AWOS): Promise<void>;
}
