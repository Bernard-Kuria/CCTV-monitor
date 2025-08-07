// components
import Nav from "../../glob-components/Nav.tsx";
import HealthPerformance from "./components/HealthPerformance.tsx";
import OverviewSummary from "./components/OverviewSummary.tsx";
import StatusMonitor from "./components/StatusMonitor.tsx";

export default function Dashboard() {
  return (
    <div className="pt-18 dark:bg-neutral-900">
      <Nav />
      <div className="summary-area px-[10%] pt-10 grid gap-5">
        <OverviewSummary />
        <HealthPerformance />
        <StatusMonitor />
      </div>
    </div>
  );
}
