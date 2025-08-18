// modules
import { useContext, useEffect } from "react";

// components
import {
  LineContext,
  PieContext,
} from "../../../glob-components/charts/ChartContext";

//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { StackedBar } from "../../../glob-components/charts/StackedBar";

export default function DashSection() {
  const lContext = useContext(LineContext);
  const pContext = useContext(PieContext);

  if (!lContext || !pContext) {
    throw new Error("context must be used within a provider");
  }

  const { LineGraph, setLineProps } = lContext;
  const { PieDoughnut, setPieProps } = pContext;

  useEffect(() => {
    setLineProps({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [98.5, 98, 99.2, 99, 99.8, 99.5],
    });
  }, [setLineProps]);

  useEffect(() => {
    setPieProps({ pieData: [80, 15, 5] });
  }, [setPieProps]);

  return (
    <div className="grid gap-10">
      <div className="grid grid-cols-2 h-[400px] gap-5">
        <div className="component-border p-5">
          <div className="h-[100px]">
            <div className="flex gap-2">
              <FontAwesomeIcon icon={["fas", "arrow-trend-up"]} />
              <h2 className="text-bold">System Uptime Trend</h2>
            </div>
            <h4 className="text-normal">Monthly uptime percentage over time</h4>
          </div>
          <div className="h-[250px]">
            <LineGraph />
          </div>
        </div>

        <div className="component-border p-5">
          <div className="h-[100px]">
            <div className="flex gap-2">
              <FontAwesomeIcon icon={["fas", "chart-pie"]} />
              <h2 className="text-bold">Camera Status Distribution</h2>
            </div>
            <h4 className="text-normal">Current system health overview</h4>
          </div>
          <div className="h-[250px]">
            <PieDoughnut />
          </div>
        </div>
      </div>

      <div className="component-border p-5 h-[600px]">
        <div className="h-[50px]">
          <div className="flex gap-2">
            <FontAwesomeIcon icon={["fas", "chart-column"]} />
            <h2 className="text-bold">Incident tracking and Resolution</h2>
          </div>
          <h4 className="text-normal">
            Weekly incident reports and resolution rates
          </h4>
        </div>
        <div className="pl-10">
          <StackedBar />
        </div>
      </div>
    </div>
  );
}
