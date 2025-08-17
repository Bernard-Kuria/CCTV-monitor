// modules
import { useContext, useEffect } from "react";

// components
import {
  LineContext,
  PieContext,
} from "../../../glob-components/charts/ChartContext";

//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

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
    <div>
      <div className="grid grid-cols-2 h-[300px] gap-5">
        {[
          {
            icon: ["fas", "arrow-trend-up"],
            title: "System Uptime Trend",
            desc: "Monthly uptime percentage over time",
            component: LineGraph,
          },
          {
            icon: ["fas", "chart-pie"],
            title: "Camera Status Distribution",
            desc: "Current system health overview",
            component: PieDoughnut,
          },
        ].map((item, index) => {
          const Component = item.component;
          return (
            <div key={index} className="component-border p-5">
              <div className="h-[100px]">
                <div className="flex gap-2">
                  <FontAwesomeIcon
                    icon={
                      (item.icon[0] as IconPrefix, item.icon[1] as IconName)
                    }
                  />
                  <h2 className="text-bold">{item.title}</h2>
                </div>
                <h4 className="text-normal">{item.desc}</h4>
              </div>
              <div className="h-[250px] pl-[10px]">
                <Component />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bar-graph"></div>
    </div>
  );
}
