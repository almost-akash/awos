"use client";

import { ReactNode } from "react";
import { RuntimeProvider } from "@/components/runtime/RuntimeProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <RuntimeProvider>{children}</RuntimeProvider>;
}
