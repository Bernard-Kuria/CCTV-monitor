import { devices } from "../data";

export function SystemHealthCalc() {
  const systemHealth = Math.round(
    devices.reduce((acc, d) => {
      let score = 0;

      // Status weight
      if (d.status === "online") score += 40;
      else if (d.status === "maintenance") score += 20;
      // offline contributes 0

      // Uptime contributes up to 40
      score += (d.uptime_percentage / 100) * 40;

      // Signal strength contributes up to 20
      score += (d.signal_strength / 100) * 20;

      return acc + score;
    }, 0) / devices.length
  );

  return systemHealth;
}

export function SystemHealthCalcPrev() {
  const systemHealth = Math.round(
    devices.reduce((acc, d) => {
      let score = 0;

      // Status weight
      if (d.status === "online") score += 40;
      else if (d.status === "maintenance") score += 20;
      // offline contributes 0

      // Uptime contributes up to 40
      score += (d.uptime_percentage_prev / 100) * 40;

      // Signal strength contributes up to 20
      score += (d.signal_strength / 100) * 20;

      return acc + score;
    }, 0) / devices.length
  );

  return systemHealth;
}
