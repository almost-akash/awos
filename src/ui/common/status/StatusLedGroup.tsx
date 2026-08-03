import { StatusLed } from "./StatusLed";

interface StatusLedGroupProps {
  active: number;
  total: number;
}
export function StatusLedGroup({ active, total }: StatusLedGroupProps) {
  return (
    <div className="flex gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <StatusLed key={index} active={index < active} />
      ))}
    </div>
  );
}
