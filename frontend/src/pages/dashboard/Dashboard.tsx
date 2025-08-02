// components
import Nav from "../../glob-components/Nav.tsx";
import HealthPerformance from "./components/HealthPerformance.tsx";
import OverviewSummary from "./components/OverviewSummary.tsx";

export default function Dashboard() {
  return (
    <div className="pt-18 h-1000">
      <Nav />
      <div className="summary-area px-[10%] pt-10">
        <OverviewSummary />
        <HealthPerformance />
      </div>
    </div>
  );
}
