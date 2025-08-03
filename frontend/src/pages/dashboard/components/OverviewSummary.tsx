import LineGraph from "../../../glob-components/charts/Line";
import PieGraph from "../../../glob-components/charts/Pie";

export default function OverviewSummary() {
  return (
    <>
      <div className="welcome-text mb-5">
        <h1 className="font-[600] text-2xl dark:text-gray-200">
          Welcome back, admin
        </h1>
        <h3 className="text-gray-500 text-sm mt-1">
          Monitor and manage all camera systems across your client locations
          from one centralized platform.
        </h3>
      </div>

      <div className="overview flex gap-5 h-[400px]">
        <div className="sys-overview border border-gray-300 dark:border-gray-500 rounded-[10px] w-[60%] p-5">
          <h2 className="mb-2 dark:text-gray-300">System Overview</h2>
          <div className="overview-content">
            <ul className="flex justify-between items-center mb-5">
              <li>
                <h3 className="text-[13px] text-gray-500">Total Cameras</h3>
                <div className="flex items-center gap-2 mt-2">
                  <h1 className="font-[600] text-[22px] leading-none dark:text-gray-200">
                    155
                  </h1>
                  <h4 className="text-green-500 bg-gray-200 dark:bg-gray-300 rounded-2xl text-[13px] text-center px-2 mt-1">
                    +3 this week
                  </h4>
                </div>
              </li>
              <li>
                <h3 className="text-[13px] text-gray-500">System Uptime</h3>
                <div className="flex items-center gap-2 mt-2">
                  <h1 className="font-[600] text-[22px] leading-none dark:text-gray-200">
                    99.1%
                  </h1>
                  <h4 className="text-blue-500 bg-gray-200 dark:bg-gray-300 rounded-2xl text-[13px] text-center px-2 mt-1">
                    24h avg
                  </h4>
                </div>
              </li>
              <li>
                <h3 className="text-[13px] text-gray-500">Active Alerts</h3>
                <div className="flex items-center gap-2 mt-2">
                  <h1 className="font-[600] text-[22px] leading-none dark:text-gray-200">
                    3
                  </h1>
                  <h4 className="text-red-500 bg-gray-200 dark:bg-gray-300 rounded-2xl text-[13px] text-center px-2 mt-1">
                    Needs attention
                  </h4>
                </div>
              </li>
            </ul>
            <div>
              <div className="text-[13px] font-[600] dark:text-gray-300">
                System Uptime (24h)
              </div>
              <div className="graph h-[200px] w-[100%]">
                <LineGraph />
              </div>
            </div>
          </div>
        </div>

        <div className="camera-status border border-gray-300 dark:border-gray-500 bg-transparent rounded-[10px] w-[40%] p-5">
          <h1 className="mb-2 dark:text-gray-300">Camera Status</h1>
          <div className="general-status">
            <div className="online mb-3">
              <h3 className="text-gray-500 text-sm w-[100%] relative">
                Online
                <div className="text-black absolute right-0 top-0 font-[600] dark:text-gray-300">
                  142
                </div>
              </h3>
              <div className="h-2 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-black after:absolute after:w-[70%] after:h-full after:left-0 after:content-['']"></div>
            </div>
            <div className="offline mb-3">
              <h3 className="text-gray-500 text-sm w-[100%] relative">
                Offline
                <div className="text-black absolute right-0 top-0 font-[600] dark:text-gray-300">
                  142
                </div>
              </h3>
              <div className="h-2 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-black after:absolute after:w-[50%] after:h-full after:left-0 after:content-['']"></div>
            </div>
            <div className="maintenance mb-3">
              <h3 className="text-gray-500 text-sm w-[100%] relative">
                Maintenance
                <div className="text-black absolute right-0 top-0 font-[600] dark:text-gray-300">
                  142
                </div>
              </h3>
              <div className="h-2 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-black after:absolute after:w-[20%] after:h-full after:left-0 after:content-['']"></div>
            </div>
          </div>
          <div className="flex justify-center h-[50%] mt-8">
            <PieGraph />
          </div>
        </div>
      </div>
    </>
  );
}
