// modules
import { useContext, useEffect } from "react";

// components
import {
  LineContext,
  PieContext,
  BarContext,
} from "../../../glob-components/charts/ChartContext";

//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DashSection() {
  const lineContext = useContext(LineContext);
  const pieContext = useContext(PieContext);
  const barContext = useContext(BarContext);

  if (!lineContext || !pieContext || !barContext) {
    throw new Error("context must be used within a provider");
  }

  const { LineGraph, setLineProps } = lineContext;
  const { PieDoughnut, setPieProps } = pieContext;
  const { BarGraph, setBarProps } = barContext;

  useEffect(() => {
    setLineProps({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: [98.5, 98, 99.2, 99, 99.8, 99.5],
    });
  }, [setLineProps]);

  useEffect(() => {
    setPieProps({ pieData: [80, 15, 5] });
  }, [setPieProps]);

  useEffect(() => {
    setBarProps({
      labels: [
        "1/1/2024",
        "1/8/2024",
        "1/15/2024",
        "1/22/2024",
        "1/29/2024",
        "2/5/2024",
        "2/12/2024",
      ],
      dataset: [
        {
          label: "Critical",
          data: [0, 1, 2, 1, 3, 2, 0],
          backgroundColor: "rgb(255, 20, 60)",
          stack: "Stack 0",
        },
        {
          label: "High",
          data: [1, 2, 0, 3, 1, 4, 2],
          backgroundColor: "rgb(255, 205, 22)",
          stack: "Stack 0",
        },
        {
          label: "Low",
          data: [2, 1, 3, 0, 2, 1, 4],
          backgroundColor: "rgb(255, 99, 71)",
          stack: "Stack 0",
        },
        {
          label: "Medium",
          data: [4, 3, 2, 1, 5, 2, 3],
          backgroundColor: "rgb(50, 205, 50)",
          stack: "Stack 0",
        },
        {
          label: "Resolved",
          data: [7, 5, 4, 6, 8, 7, 9],
          backgroundColor: "rgb(80, 25, 235)",
          stack: "Stack 1",
        },
      ],
    });
  }, []);

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
          <BarGraph />
        </div>
      </div>
    </div>
  );
}
