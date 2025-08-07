import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HealthPerformance() {
  return (
    <div>
      <div className="font-[600] my-4 dark:text-gray-200">
        System Health & Performance
      </div>
      <div className="inline-flex flex-wrap gap-3 w-[100%]">
        <div className="online text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="relative font-[600] dark:text-gray-300">
            Online Cameras
            <FontAwesomeIcon
              className="text-gray-400 absolute right-0"
              icon={["far", "camera"]}
            />
          </h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            142
            <div className="text-(--green-primary) shaded-texts">
              <FontAwesomeIcon className="" icon={["fas", "arrow-trend-up"]} />{" "}
              +2
            </div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">98.9%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--green-primary) after:absolute after:w-[98.9%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="sys-health text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="relative font-[600] dark:text-gray-300">
            System Health
            <FontAwesomeIcon
              className="text-gray-400 absolute right-0"
              icon={["fas", "shield"]}
            />
          </h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            98.9%
            <div className="text-(--green-primary) shaded-texts">
              <FontAwesomeIcon className="" icon={["fas", "arrow-trend-up"]} />{" "}
              +0.3%
            </div>
          </h3>
          <div className="text-gray-500">vs yesterday</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--green-primary) after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="active-alerts text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="relative font-[600] dark:text-gray-300">
            Active Alerts
            <FontAwesomeIcon
              className="text-gray-400 absolute right-0"
              icon={["fas", "triangle-exclamation"]}
            />
          </h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            3
            <div className="text-(--red-primary) shaded-texts">
              <FontAwesomeIcon className="" icon={["fas", "arrow-trend-up"]} />{" "}
              -2
            </div>
          </h3>
          <div className="text-gray-500">requiring attention</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">1.9%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--red-primary) after:absolute after:w-[1.9%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="avg-res-time text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="relative font-[600] dark:text-gray-300">
            Avg Response Time
            <FontAwesomeIcon
              className="text-gray-400 absolute right-0"
              icon={["far", "clock"]}
            />
          </h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            1.2s
            <div className="text-(--orange-primary) shaded-texts">
              <FontAwesomeIcon className="" icon={["fas", "arrow-trend-up"]} />{" "}
              -0.3s
            </div>
          </h3>
          <div className="text-gray-500">camera feed load</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">85%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--orange-primary) after:absolute after:w-[85%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="maintenance-due text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="relative font-[600] dark:text-gray-300">
            Maintenance Due
            <FontAwesomeIcon
              className="text-gray-400 absolute right-0"
              icon={["far", "circle-check"]}
            />
          </h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            12
            <div className="text-(--red-primary) shaded-texts">
              <FontAwesomeIcon
                className=""
                icon={["fas", "arrow-trend-down"]}
              />{" "}
              +4
            </div>
          </h3>
          <div className="text-gray-500">camera this month</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">7.7%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--red-primary) after:absolute after:w-[7.7%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="relative font-[600] dark:text-gray-300">
            Active Clients
            <FontAwesomeIcon
              className="text-gray-400 absolute right-0"
              icon={["fas", "people-group"]}
            />
          </h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            28
            <div className="text-(--green-primary) shaded-texts">
              <FontAwesomeIcon className="" icon={["fas", "arrow-trend-up"]} />{" "}
              +1
            </div>
          </h3>
          <div className="text-gray-500">monitoring locations</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">100%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--green-primary) after:absolute after:w-[100%] after:h-full after:left-0 after:content-['']"></div>
        </div>
      </div>
    </div>
  );
}
