import { useContext, useEffect } from "react";
import {
  LineContext,
  PieContext,
} from "../../../glob-components/charts/ChartContext";

export default function OverviewSummary() {
  const lContext = useContext(LineContext);
  const pContext = useContext(PieContext);

  if (!lContext) {
    throw new Error("LineGraph must be used within a LineGraphProvider");
  }

  if (!pContext) {
    throw new Error("PieDoughnut must be used within a PieDoughnutProvider");
  }

  const { LineGraph, setLineProps } = lContext;
  const { PieDoughnut, setPieProps } = pContext;

  useEffect(() => {
    setLineProps({
      labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
      data: [98.5, 98, 99.2, 99, 99.8, 99.5],
    });
  }, [setLineProps]);

  useEffect(() => {
    setPieProps({ pieData: [80, 15, 5] });
  }, [setPieProps]);

  return (
    <>
      <div className="overview flex gap-5 h-[400px]">
        <div className="sys-overview border border-gray-300 dark:border-gray-500 rounded-[10px] w-[60%] p-5">
          <h2 className="mb-2 dark:text-gray-300">System Overview</h2>
          <div className="overview-content">
            <ul className="flex justify-between items-center mb-5">
              <li>
                <h3 className="mini-text-normal">Total Cameras</h3>
                <div className="flex items-center gap-2 mt-2">
                  <h1 className="text-values leading-none">155</h1>
                  <h4 className="text-(--green-primary) shaded-texts">
                    +3 this week
                  </h4>
                </div>
              </li>
              <li>
                <h3 className="mini-text-normal">System Uptime</h3>
                <div className="flex items-center gap-2 mt-2">
                  <h1 className="text-values leading-none">99.1%</h1>
                  <h4 className="text-(--blue-primary) shaded-texts">
                    24h avg
                  </h4>
                </div>
              </li>
              <li>
                <h3 className="mini-text-normal">Active Alerts</h3>
                <div className="flex items-center gap-2 mt-2">
                  <h1 className="text-values leading-none">3</h1>
                  <h4 className="text-red-500 shaded-texts">Needs attention</h4>
                </div>
              </li>
            </ul>
            <div>
              <div className="mini-text-bold">System Uptime (24h)</div>
              <div className="graph h-[200px] w-[100%]">
                <LineGraph />
              </div>
            </div>
          </div>
        </div>

        <div className="camera-status border border-gray-300 dark:border-gray-500 bg-transparent rounded-[10px] w-[40%] p-5">
          <h1 className="mb-2 dark:text-gray-300">Camera Status</h1>
          <div className="general-status">
            <div className="online mb-3">
              <h3 className="text-normal w-[100%] relative">
                Online
                <div className="text-bold absolute right-0 top-0 dark:text-gray-300">
                  142
                </div>
              </h3>
              <div className="progress-bar after:w-[calc(142/155*100%)]"></div>
            </div>
            <div className="offline mb-3">
              <h3 className="text-normal w-[100%] relative">
                Offline
                <div className="text-bold absolute right-0 top-0 dark:text-gray-300">
                  8
                </div>
              </h3>
              <div className="progress-bar after:w-[calc(8/155*100%)]"></div>
            </div>
            <div className="maintenance mb-3">
              <h3 className="text-normal w-[100%] relative">
                Maintenance
                <div className="text-bold absolute right-0 top-0 dark:text-gray-300">
                  5
                </div>
              </h3>
              <div className="progress-bar after:w-[calc(5/155*100%)]"></div>
            </div>
          </div>
          <div className="flex justify-center h-[50%] mt-8">
            <PieDoughnut />
          </div>
        </div>
      </div>
    </>
  );
}
