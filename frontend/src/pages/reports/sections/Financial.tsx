// modules
import { useContext, useEffect } from "react";

// components
import { BarContext } from "../../../glob-components/charts/ChartContext";

//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export default function Financial() {
  const analysis = [
    {
      textColor: "text-green-600",
      icon: ["fas", "arrow-trend-up"],
      title: "Monthly Recurring Revenue",
      value: "%" + 15200,
      valueInfo: "↑" + 8.3 + "%" + "growth",
    },
    {
      textColor: "text-orange-600",
      icon: ["fas", "people-group"],
      title: "Average Contract Value",
      value: "%" + 27262,
      valueInfo: "4 active clients",
    },
    {
      textColor: "text-blue-600",
      icon: ["fas", "chart-pie"],
      title: "Profit Margin",
      value: 34.7 + "%",
      valueInfo: "↑" + 2.1 + "%" + "increase",
    },
  ];
  const barContext = useContext(BarContext);

  if (!barContext) {
    throw new Error("context must be used within a provider");
  }

  const { BarGraph, setBarProps } = barContext;

  useEffect(() => {
    setBarProps({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      dataset: [
        {
          label: "Total Revenue",
          data: [7000, 5000, 4000, 6000, 8000, 7000, 9000],
          backgroundColor: "rgb(80, 25, 235)",
          stack: "Stack 2",
        },
        {
          label: "Maintenance",
          data: [2000, 1000, 3000, 2500, 2000, 1000, 4000],
          backgroundColor: "rgb(255, 99, 71)",
          stack: "Stack 0",
        },
        {
          label: "New Installations",
          data: [4000, 3000, 2000, 1000, 5000, 2000, 3000],
          backgroundColor: "rgb(50, 205, 50)",
          stack: "Stack 1",
        },
      ],
    });
  }, []);

  return (
    <div className="grid gap-10">
      <div className="component-border w-full p-10 ">
        <BarGraph />
      </div>

      <div className={`grid grid-cols-${analysis.length} gap-5`}>
        {analysis.map((item, index) => (
          <div
            key={index}
            className="component-border flex justify-between h-30 p-5 items-center"
          >
            <div>
              <div className="mini-text-normal">{item.title}</div>
              <div className="text-[20px] font-bold dark:text-gray-200">
                {item.value}
              </div>
              <div className={`${item.textColor} text-[12px]`}>
                {item.valueInfo}
              </div>
            </div>
            <div className="">
              <FontAwesomeIcon
                className={`${item.textColor} text-[22px]`}
                icon={[item.icon[0] as IconPrefix, item.icon[1] as IconName]}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
