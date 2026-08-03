interface StatusLedProps {
  active: boolean;
}

export function StatusLed({ active }: StatusLedProps) {
  return (
    <div
      className={`h-3 w-3 rounded-full transition-all duration-300 ${
        active
  ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)] scale-110"
  : "bg-neutral-700"
      }`}
    />
  );
}
