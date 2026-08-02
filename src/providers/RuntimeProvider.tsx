"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AWOS, RuntimeSnapshot } from "@/core/runtime";

interface RuntimeContextValue {
  runtime: AWOS;
  snapshot: Readonly<RuntimeSnapshot>;
  boot: () => Promise<void>;
}

const RuntimeContext = createContext<RuntimeContextValue | null>(null);

export function RuntimeProvider({ children }: { children: ReactNode }) {
  const runtime = useMemo(() => new AWOS(), []);

  const [snapshot, setSnapshot] = useState(runtime.getSnapshot());

  useEffect(() => {
    return runtime.subscribe(setSnapshot);
  }, [runtime]);

  return (
    <RuntimeContext.Provider
      value={{ runtime, snapshot, boot: () => runtime.boot() }}
    >
      {children}{" "}
    </RuntimeContext.Provider>
  );
}

export function useRuntimeContext() {
  const context = useContext(RuntimeContext);
  if (!context) {
    throw new Error("useRuntimeContext must be used inside RuntimeProvider");
  }

  return context;
}
