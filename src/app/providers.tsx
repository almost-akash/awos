"use client";

import { ReactNode } from "react";
import { RuntimeProvider } from "@/providers/RuntimeProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <RuntimeProvider>{children}</RuntimeProvider>;
}
