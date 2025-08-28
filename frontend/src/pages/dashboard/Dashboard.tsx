import { useContext, useEffect } from "react";
import Nav from "../../glob-components/Nav.tsx";
import HealthPerformance from "./components/HealthPerformance.tsx";
import OverviewSummary from "./components/OverviewSummary.tsx";
import StatusMonitor from "./components/StatusMonitor.tsx";
import { GradientContext } from "../../glob-components/globalContext.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
  const context = useContext(GradientContext);

  if (!context) {
    throw new Error("Dashboard must be used within a GradientHeaderProvider");
  }

  const { GradientHeader, setHeaderProps } = context;

  useEffect(() => {
    setHeaderProps({
      fromColor: "from-indigo-500/20",
      toColor: "to-pink-500/40",
      title: "Welcome back, admin! 👋",
      subTitle:
        "Monitor and manage all camera systems across your client locations from one centralized control center.",
      sideButtons: [
        <div className="px-2 py-[1px] bg-white dark:bg-black/40 dark:text-white rounded-[5px]">
          <FontAwesomeIcon className="w-5 h-5" icon={["fas", "shield"]} />{" "}
          System Secure
        </div>,
        <div className="px-2 py-[1px] bg-white dark:bg-black/40 dark:text-white rounded-[5px]">
          <FontAwesomeIcon className="w-5 h-5" icon={["fas", "bolt"]} /> All
          Systems Operational
        </div>,
      ],
      cards: [
        {
          icon: ["fas", "bolt"],
          color: ["bg-blue-500", "text-blue-500"],
          cardTitle: "Active Clients",
          cardValue: "123",
          cardAdditionalInfo: "All monitored",
        },
        {
          icon: ["far", "camera"],
          color: ["bg-green-500", "text-green-500"],
          cardTitle: "Total Cameras",
          cardValue: "182",
          cardAdditionalInfo: "91.6% online",
        },
        {
          icon: ["fas", "arrow-trend-up"],
          color: ["bg-purple-500", "text-purple-500"],
          cardTitle: "System Uptime",
          cardValue: "99.2%",
          cardAdditionalInfo: "Last 30 days",
        },
        {
          icon: ["fas", "triangle-exclamation"],
          color: ["bg-orange-500", "text-orange-500"],
          cardTitle: "Active Alerts",
          cardValue: "3",
          cardAdditionalInfo: "Requires attention",
        },
      ],
    });
  }, []);

  return (
    <div className="page-style">
      <Nav />
      <GradientHeader />
      <OverviewSummary />
      <HealthPerformance />
      <StatusMonitor />
    </div>
  );
}
