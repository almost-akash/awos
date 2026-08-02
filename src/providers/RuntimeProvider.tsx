"use client";

import { createContext, useContext, useMemo, useState, ReactNode } from "react";

import { AWOS, RuntimeState } from "@/core/runtime";

interface RuntimeContextValue {
  runtime: AWOS;
  state: RuntimeState;
  boot: () => Promise<void>;
}

const RuntimeContext = createContext<RuntimeContextValue | null>(null);

export function RuntimeProvider({ children }: { children: ReactNode }) {
  const runtime = useMemo(() => new AWOS(), []);

  const [state, setState] = useState(runtime.getState());

  async function boot() {
    await runtime.boot(setState);
  }

  return (
    <RuntimeContext.Provider
      value={{
        runtime,
        state,
        boot,
      }}
    >
      {children}
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
