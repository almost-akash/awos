import { useRuntimeContext } from "@/providers/RuntimeProvider";

export function useRuntime() {
  return useRuntimeContext();
}
