import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

export default function Analytics() {
  const analysis = [
    {
      textColor: "text-green-600",
      icon: ["far", "circle-check"],
      value: "0",
      valueInfo: "Completed This Month",
    },
    {
      textColor: "text-orange-600",
      icon: ["far", "clock"],
      value: "194",
      valueInfo: "Avg Duration (min",
    },
    {
      textColor: "text-blue-600",
      icon: ["fas", "arrow-trend-up"],
      value: "92%",
      valueInfo: "On-Time Completion",
    },
    {
      textColor: "text-purple-600",
      icon: ["fas", "bolt"],
      value: "$5,080",
      valueInfo: "Total Cost",
    },
  ];
  return (
    <div className="grid gap-5">
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
          </div>
        ))}
      </div>

      <div className="component-border p-5 h-100">
        <div className="text-normal">
          <div className="text-bold">Maintenance Performance</div>
          <div>Track completion rate and efficiency metrics over time</div>
        </div>
        <div className="grid justify-center items-center text-center translate-y-[100%] dark:text-gray-200">
          <div>
            <FontAwesomeIcon
              className={"text-values"}
              icon={["fas", "arrow-trend-up"]}
            />
          </div>
          Advanced analytics charts coming soon...
          <br />
          Track performance trends, cost analysis, and efficiency metrics
        </div>
      </div>
    </div>
  );
}
