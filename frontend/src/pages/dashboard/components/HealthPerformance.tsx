import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "../../../glob-components/ProgressBar";
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

import {
  findCamerasByStatus,
  findTotalCameras,
} from "../../../hooks/CameraHooks";

import {
  SystemHealthByMonth,
  SystemHealthCalc,
} from "../../../hooks/systemHealthCalc";

import {
  avgResponseTimeHr,
  targettedResponseTimeHr,
} from "../../../hooks/IncidentHooks";

import {
  maintenanceDue,
  prevMonthMaintenanceDue,
} from "../../../hooks/MaintenanceHooks";

import { activeClients, totalClients } from "../../../hooks/ClientsHooks";

import {
  findNotificationsBy,
  findTotalNotifications,
} from "../../../hooks/NotificationHooks";

type dataObj = {
  title: string;
  icon: string[];
  value: [number, string?];
  diff: number;
  desc: string;
};

export default function HealthPerformance() {
  const data: dataObj[] = [
    {
      title: "Online Cameras",
      icon: ["far", "camera"],
      value: [findCamerasByStatus("online")],
      diff: findTotalCameras() - findCamerasByStatus("online"),
      desc: `of ${findTotalCameras()} total cameras`,
    },
    {
      title: "System Health",
      icon: ["fas", "shield"],
      value: [SystemHealthCalc(), "%"],
      diff: SystemHealthCalc() - SystemHealthByMonth(new Date().getMonth() + 1),
      desc: `vs yesterday`,
    },
    {
      title: "Active Alerts",
      icon: ["fas", "triangle-exclamation"],
      value: [findNotificationsBy("alert")],
      diff: findTotalNotifications() - findNotificationsBy("alert"),
      desc: `requiring attention`,
    },
    {
      title: "Avg Response Time",
      icon: ["far", "clock"],
      value: [avgResponseTimeHr(), "hr"],
      diff: targettedResponseTimeHr - avgResponseTimeHr(),
      desc: `camera feed load`,
    },
    {
      title: "Maintenance Due",
      icon: ["far", "circle-check"],
      value: [maintenanceDue()],
      diff: maintenanceDue() - prevMonthMaintenanceDue(),
      desc: `This month`,
    },
    {
      title: "Active Clients",
      icon: ["fas", "people-group"],
      value: [activeClients()],
      diff: totalClients() - activeClients(),
      desc: `monitoring locations`,
    },
  ];

  return (
    <div>
      <div className="font-[600] my-4 dark:text-gray-200">
        System Health & Performance
      </div>
      <div className="inline-flex flex-wrap gap-3 w-[100%]">
        {data.map((info, index) => {
          const progress = (info.value[0] / (info.value[0] + info.diff)) * 100;
          const isPositive = !["Active Alerts", "Maintenance Due"].includes(
            info.title
          );
          const diffColor = isPositive
            ? "text-(--green-primary)"
            : "text-(--red-primary)";
          const diffIcon: IconName = isPositive
            ? "arrow-trend-up"
            : "arrow-trend-down";

          return (
            <div
              key={index}
              className="online text-sm w-[350px] component-border p-5 flex flex-col gap-2"
            >
              <h1 className="relative font-[600] dark:text-gray-300">
                {info.title}
                <FontAwesomeIcon
                  className="text-gray-400 absolute right-0"
                  icon={[info.icon[0] as IconPrefix, info.icon[1] as IconName]}
                />
              </h1>
              <div className="flex text-2xl items-center dark:text-gray-200">
                {info.value[0]}
                {info.value[1]}
                <div className={`${diffColor} shaded-texts`}>
                  <FontAwesomeIcon className="" icon={["fas", diffIcon]} />{" "}
                  {info?.diff}
                </div>
              </div>
              <div className="text-gray-500">{info.desc}</div>
              <div className="text-gray-500 text-sm w-[100%] relative">
                Health
                <div className="text-gray-500 absolute right-0 top-0">
                  {isNaN(progress) ? 0 : progress}%
                </div>
              </div>
              <ProgressBar
                value={isNaN(progress) ? 0 : progress / 100}
                bgColor="bg-gray-300"
                darkBgColor="bg-gray-600"
                progressColor={`${
                  info.title === "Active Alerts" ||
                  info.title === "Maintenance Due"
                    ? "bg-(--red-primary)"
                    : info.title === "Avg Response Time"
                    ? "bg-(--orange-primary)"
                    : "bg-(--green-primary)"
                }`}
                darkProgressColor={`${
                  info.title === "Active Alerts" ||
                  info.title === "Maintenance Due"
                    ? "bg-(--red-primary)"
                    : info.title === "Avg Response Time"
                    ? "bg-(--orange-primary)"
                    : "bg-(--green-primary)"
                }`}
                height="h-[4px]"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
