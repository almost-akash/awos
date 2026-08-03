import { KeyboardEvent, useState } from "react";

interface TerminalInputProps {
  onSubmit(command: string): void;
}

export function TerminalInput({ onSubmit }: TerminalInputProps) {
  const [value, setValue] = useState("");

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key !== "Enter") {
      return;
    }

    const command = value.trim();

    if (!command) {
      return;
    }

    onSubmit(command);

    setValue("");
  }

  return (
    <div className="flex items-center gap-3 font-runtime">
      <span className="text-cyan-400">{">"}</span>

      <input
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        className="flex-1 bg-transparent outline-none"
        spellCheck={false}
      />
    </div>
  );
}
