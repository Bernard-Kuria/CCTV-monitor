import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProgressBar from "../../../glob-components/ProgressBar";
import { clients, devices } from "../../../data";
import { timeAgoIntl } from "../../../hooks/timeCalculation";

export default function StatusMonitor() {
  return (
    <div>
      <div className="font-[600] dark:text-gray-200">Camera Status Monitor</div>
      <div
        className="monitoring relative w-[100%] component-border
      p-5 mb-10 grid gap-4"
      >
        <div className=" dark:text-gray-300">
          Camera Monitoring
          <div className="absolute right-5 top-5 text-[12px] flex gap-2">
            {["online", "offline", "maintenance"].map((status) => {
              const count = devices.filter((d) => d.status === status).length;

              return (
                <div
                  key={status}
                  className={`shaded-texts ${
                    status === "maintenance"
                      ? "text-(--orange-primary)"
                      : status === "offline"
                      ? "text-(--red-primary)"
                      : "text-(--green-primary)"
                  }`}
                >
                  {count} {status.charAt(0).toUpperCase() + status.slice(1)}
                </div>
              );
            })}
          </div>
        </div>
        <table className="w-full border-collapse text-sm">
          <thead className="">
            <tr className="border-b border-gray-300 dark:border-gray-500 dark:text-gray-200 text-left font-[700]">
              {[
                "Camera ID",
                "Name & Location",
                "Client",
                "Status",
                "Quality",
                "Uptime",
                "Maintenance",
                "Signal",
                "Options",
              ].map((tableColTitle) => (
                <th key={tableColTitle} scope="col" className="px-4 py-2">
                  {tableColTitle}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {devices.map((device, index) => {
              const statusClass =
                device.uptime_percentage >= 90
                  ? "text-(--green-primary) bg-(--green-light)"
                  : "text-(--red-primary) bg-(--red-light)";

              const statusText =
                device.uptime_percentage >= 90 ? "Good" : "Poor";

              const deviceStatus =
                device.status === "online"
                  ? "bg-(--green-light) text-(--green-primary)"
                  : device.status === "maintenance"
                  ? "bg-(--orange-light) text-(--orange-primary)"
                  : "bg-(--red-light) text-(--red-primary)";
              return (
                <tr
                  key={index}
                  className="border-b border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900"
                >
                  <td className="px-4 py-2 text-left font-[500] dark:text-gray-300">
                    CAM-{String(device.id).padStart(3, "0")}
                  </td>
                  <td className="px-4 py-2 text-left font-[500] dark:text-gray-300">
                    {device.location}
                  </td>
                  <td className="px-4 py-2 text-left dark:text-gray-300">
                    {
                      clients.find((client) => client.id === device.client_id)
                        ?.name
                    }
                  </td>
                  <td className="px-4 py-2 text-left">
                    <div
                      className={`flex ${deviceStatus}  w-fit px-2 rounded-[5px]`}
                    >
                      <div className="relative w-[20px]">
                        <FontAwesomeIcon
                          className="relative"
                          icon={["fas", "wifi"]}
                        />
                        {device.status === "offline" && (
                          <div className="absolute w-full h-px bg-(--red-primary) rotate-45 top-[2px] left-[2px] origin-left"></div>
                        )}
                      </div>{" "}
                      {device.status}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                    {device.quality}{" "}
                    <div className="text-gray-600">
                      {" "}
                      {timeAgoIntl(device.last_active)}
                    </div>
                  </td>
                  <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                    {device.uptime_percentage}%
                    <ProgressBar
                      value={device.uptime_percentage / 100}
                      bgColor="bg-gray-300"
                      darkBgColor="bg-gray-600"
                      progressColor={
                        device.uptime_percentage >= 90
                          ? "bg-(--green-primary)"
                          : "bg-(--red-primary)"
                      }
                      darkProgressColor={
                        device.uptime_percentage >= 90
                          ? "bg-(--green-primary)"
                          : "bg-(--red-primary)"
                      }
                      height="h-[4px]"
                    />
                  </td>
                  <td className="px-4 py-2 text-left ">
                    <div className={`${statusClass}  w-fit px-2 rounded-[5px]`}>
                      {statusText}
                    </div>
                  </td>
                  <td
                    className={`relative px-4 py-2 text-left font-[600] before:absolute before:bottom-6 before:left-0 before:w-[7px] before:h-[7px] ${
                      device.uptime_percentage >= 90
                        ? "before:bg-(--green-secondary)"
                        : "before:bg-(--red-secondary)"
                    } before:rounded-[50%] dark:text-gray-200`}
                  >
                    {device.signal_strength}%
                  </td>
                  <td className="px-4 py-2 items-center">
                    <div className=" cursor-pointer w-fit px-2 pb-2 rounded-2xl hover:bg-gray-300 dark:text-gray-200">
                      ...
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
