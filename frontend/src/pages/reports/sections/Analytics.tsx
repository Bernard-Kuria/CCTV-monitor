import {
  type IconPrefix,
  type IconName,
} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Analytics() {
  const data = [
    {
      client: "TexhCorp HQ",
      uptime: "99.5",
      info: {
        cameras: ["far", "camera", 45 + " cameras"],
        incidents: ["fas", "triangle-exclamation", 2 + " incidents"],
        profit: ["fas", "sack-dollar", "$" + 27000],
        stability: ["fas", "arrow-trend-up", "stable"],
      },
    },
    {
      client: "RetailPlus",
      uptime: "98.2",
      info: {
        cameras: ["far", "camera", 38 + " cameras"],
        incidents: ["fas", "triangle-exclamation", 6 + " incidents"],
        profit: ["fas", "sack-dollar", "$" + 19000],
        stability: ["fas", "arrow-trend-up", "stable"],
      },
    },
    {
      client: "OfficeMax",
      uptime: "97.8",
      info: {
        cameras: ["far", "camera", 32 + " cameras"],
        incidents: ["fas", "triangle-exclamation", 7 + " incidents"],
        profit: ["fas", "sack-dollar", "$" + 12800],
        stability: ["fas", "arrow-trend-up", "stable"],
      },
    },
    {
      client: "SecureBank",
      uptime: "98.9",
      info: {
        cameras: ["far", "camera", 67 + " cameras"],
        incidents: ["fas", "triangle-exclamation", 1 + " incidents"],
        profit: ["fas", "sack-dollar", "$" + 50250],
        stability: ["fas", "arrow-trend-up", "stable"],
      },
    },
  ];

  return (
    <>
      {data.map((item, index) => (
        <div
          key={index}
          className="component-border p-5 relative hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-700 duration-300"
        >
          <div className="grid gap-5">
            <div className="relative">
              <div>
                <h2 className="text-bold">{item.client}</h2>
              </div>
            </div>

            <div className="relative flex text-normal">
              {Object.entries(item.info).map(([item, value]) => (
                <div key={item} className="flex flex-1 items-center gap-1">
                  <FontAwesomeIcon
                    icon={[value[0] as IconPrefix, value[1] as IconName]}
                  />
                  <div className="mini-text-normal">{value[2]}</div>
                </div>
              ))}
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-600 rounded relative overflow-hidden">
              <div
                className="absolute left-0 top-0 h-full bg-black dark:bg-gray-200"
                style={{ width: `${item.uptime}%` }}
              ></div>
            </div>
          </div>
          <div className="absolute right-5 top-5 grid gap-1 w-[100px] text-normal">
            <div className="flex justify-center items-center bg-black text-white rounded-[6px] text-[12px] dark:bg-white dark:text-black">
              {item.uptime}% uptime
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
