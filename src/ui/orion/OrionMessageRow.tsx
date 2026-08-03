import { OrionMessage } from "@/core/services";
import { formatRuntimeTime } from "@/lib/runtimeTime";

interface OrionMessageRowProps {
  message: OrionMessage;
}

export function OrionMessageRow({ message }: OrionMessageRowProps) {
  return (
    <div className="flex items-center gap-4 font-runtime text-sm">
      <span className="w-24 shrink-0 text-neutral-500">
        {formatRuntimeTime(message.timestamp)}
      </span>

      <span className="text-neutral-200">{message.message}</span>
    </div>
  );
}
