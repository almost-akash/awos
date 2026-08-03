export function BootHeader() {
  return (
    <header className="space-y-4 text-center">
      <div className="mx-auto h-px w-96 bg-neutral-800" />

      <h1 className="text-5xl font-bold tracking-[0.45em]">AWOS</h1>

      ...

      <p className="text-neutral-400">Artificial Workbench Operating System</p>

      <p className="font-runtime text-xs uppercase tracking-[0.35em] text-neutral-400">
        AWOS Runtime
      </p>
      <p className="font-runtime text-xs uppercase tracking-[0.35em] text-neutral-600">
        Build v1.0.0-dev
      </p>

      <div className="mx-auto h-px w-96 bg-neutral-800" />
    </header>
  );
}
