import { cameras } from "../data";

export function SystemHealthCalc() {
  const systemHealth = Math.round(
    cameras.reduce((acc, d) => {
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
    }, 0) / cameras.length
  );

  return systemHealth;
}

function getShortMonthName(monthNumber: number) {
  // Create a Date object. The month parameter is 0-indexed in Date,
  // so subtract 1 from the input monthNumber if it's 1-indexed (Jan=1, Feb=2, etc.).
  // We set the day and year to arbitrary values as only the month is relevant.
  const date = new Date(2000, monthNumber - 1, 1);

  // Use toLocaleString to format the date and extract the month name.
  // 'en-US' specifies the locale for English (United States).
  // { month: 'short' } specifies that we want the short month name (e.g., Jan, Feb).
  return date.toLocaleString("en-US", { month: "short" });
}

export function SystemHealthByMonth(month: number, year?: string): number {
  const targetYear = year ? parseInt(year, 10) : new Date().getFullYear();

  const date = new Date(`${getShortMonthName(month)} 01, ${targetYear}`);
  const targetMonth = date.getMonth();

  const activeThisMonth = cameras.filter(
    (camera) =>
      camera.last_active.getMonth() === targetMonth &&
      camera.last_active.getFullYear() === targetYear
  );

  if (activeThisMonth.length === 0) {
    return 0;
  }

  const totalScore = activeThisMonth.reduce((acc, d) => {
    let score = 0;

    if (d.status === "online") score += 40;
    else if (d.status === "maintenance") score += 20;

    score += (d.uptime_percentage / 100) * 40;

    score += (d.signal_strength / 100) * 20;

    return acc + score;
  }, 0);

  const systemHealth = Math.round(totalScore / activeThisMonth.length);
  return systemHealth;
}
