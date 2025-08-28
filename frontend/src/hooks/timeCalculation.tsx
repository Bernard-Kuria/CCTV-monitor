export function timeAgoIntl(date: Date) {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const diff = date.getTime() - Date.now();
  const seconds = Math.round(diff / 1000);

  const ranges = {
    year: 3600 * 24 * 365,
    month: 3600 * 24 * 30,
    week: 3600 * 24 * 7,
    day: 3600 * 24,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  for (const unit of Object.keys(ranges) as (keyof typeof ranges)[]) {
    if (Math.abs(seconds) >= ranges[unit] || unit === "second") {
      return rtf.format(Math.round(seconds / ranges[unit]), unit);
    }
  }
}
