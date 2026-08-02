export function formatRuntimeTime(milliseconds: number) {
  const total = Math.round(milliseconds);

  const minutes = Math.floor(total / 60000);
  const seconds = Math.floor((total % 60000) / 1000);
  const ms = total % 1000;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
    2,
    "0",
  )}.${String(ms).padStart(3, "0")}`;
}
