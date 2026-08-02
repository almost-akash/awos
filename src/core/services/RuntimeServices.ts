export const RuntimeServices = {
  Kernel: Symbol("RuntimeKernel"),
  Orion: Symbol("Orion"),
  Theme: Symbol("ThemeEngine"),
  Audio: Symbol("AudioEngine"),
  Diagnostics: Symbol("DiagnosticsEngine"),
  ModuleManager: Symbol("ModuleManager"),
} as const;

export type RuntimeServiceToken =
  (typeof RuntimeServices)[keyof typeof RuntimeServices];
