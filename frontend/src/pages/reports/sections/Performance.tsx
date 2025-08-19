// modules
// import { useContext, useEffect } from "react";

// components
// import {
//   LineContext,
//   PieContext,
// } from "../../../glob-components/charts/ChartContext";

//assets
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LineNonShaded } from "../../../glob-components/charts/LineNonShaded";
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

const analysis = [
  {
    textColor: "text-blue-600",
    icon: ["far", "clock"],
    value: "3.2 hrs",
    valueInfo: "Avg Resolution Time",
    description: "↓ 0.8hrs vs last month",
  },
  {
    textColor: "text-green-600",
    icon: ["fas", "shield"],
    value: "99.7%",
    valueInfo: "Security Uptime",
    description: "↑ 0.2% Improvement",
  },
  {
    textColor: "text-purple-600",
    icon: ["fas", "bolt"],
    value: "847",
    valueInfo: "Events Processed",
    description: "This month",
  },
];

export default function Performance() {
  //   const lContext = useContext(LineContext);=

  //   if (!lContext || !pContext) {
  //     throw new Error("context must be used within a provider");
  //   }

  //   const { LineGraph } = lContext;

  //   useEffect(() => {
  //     setLineProps({
  //       labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //       data: [98.5, 98, 99.2, 99, 99.8, 99.5],
  //     });
  //   }, [setLineProps]);

  const metrics = [
    { name: "Resolution Rate", value: 96.2 },
    { name: "First Response", value: 89.5 },
    { name: "SLA Compliance", value: 94.8 },
    { name: "Client Satisfaction", value: 98.1 },
  ];

  return (
    <div className="grid gap-10">
      <div className="flex gap-5">
        <div className="component-border p-5 w-[60%] h-fit">
          <div className="h-[50px]">
            <div className="flex gap-2">
              <h2 className="text-bold">Response Time Analytics</h2>
            </div>
            <h4 className="text-normal">
              Average response times for different incident types
            </h4>
          </div>
          <div className="pl-10">
            <LineNonShaded />
          </div>
        </div>

        <div className="component-border p-5 w-[40%]">
          <div className="h-[50px]">
            <div className="flex gap-2">
              <h2 className="text-bold">Performance Metrics</h2>
            </div>
            <h4 className="text-normal">Key performance indicators</h4>
          </div>
          {metrics.map((metric, index) => (
            <div key={index} className="mb-4">
              <div className="relative text-bold">
                {metric.name}
                <span className="absolute right-0">{metric.value}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded relative overflow-hidden">
                <div
                  className="absolute left-0 top-0 h-full bg-black dark:bg-gray-200"
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={`grid grid-cols-${analysis.length} gap-5`}>
        {analysis.map((item, index) => (
          <div
            key={index}
            className="component-border grid grid-cols-1 text-center h-30 p-5"
          >
            <div>
              <FontAwesomeIcon
                className={`${item.textColor} text-[22px]`}
                icon={[item.icon[0] as IconPrefix, item.icon[1] as IconName]}
              />
            </div>
            <div className="text-[20px] font-bold dark:text-gray-200">
              {item.value}
            </div>
            <div className="mini-text-normal">{item.valueInfo}</div>
            <div className={`text-[11px] ${item.textColor}`}>
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
