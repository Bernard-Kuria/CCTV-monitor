import { incidents } from "../data";

export const targettedResponseTimeHr = 50;

export function avgResponseTimeHr() {
  const responseTimes = incidents
    .filter((i) => i.resolved_at !== null && i.detected_at !== null) // strict check
    .map((i) => +i.resolved_at! - +i.detected_at!); // non-null assertion (!)

  if (responseTimes.length === 0) return 0; // avoid NaN

  const avgResponseTimeMs =
    responseTimes.reduce((acc, t) => acc + t, 0) / responseTimes.length;

  return Math.round(avgResponseTimeMs / 3600000); // in minutes
}
