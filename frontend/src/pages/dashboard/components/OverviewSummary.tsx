import LineGraph from "../../../glob-components/charts/Line";
import PieGraph from "../../../glob-components/charts/Pie";

export default function OverviewSummary() {
  return (
    <>
      <div className="welcome-text mb-5">
        <h1 className="font-[600] text-2xl">Welcome back, admin</h1>
        <h3 className="text-gray-500 text-sm mt-1">
          Monitor and manage all camera systems across your client locations
          from one centralized platform.
        </h3>
      </div>

      <div className="overview flex gap-5 h-[400px]">
        <div className="sys-overview border border-gray-300 rounded-[10px] w-[60%] p-5">
          <h2 className="my-2">System Overview</h2>
          <div className="overview-content">
            <ul className="flex justify-between items-center mb-5">
              <li>
                <h3 className="text-[13px] text-gray-500">Total Cameras</h3>
                <div className="flex items-center gap-2 mt-2">
                  <h1 className="font-[600] text-[22px] leading-none">155</h1>
                  <h4 className="text-green-500 bg-gray-200 rounded-2xl text-[13px] text-center px-2 mt-1">
                    +3 this week
                  </h4>
                </div>
              </li>
              <li>
                <h3 className="text-[13px] text-gray-500">System Uptime</h3>
                <div className="flex items-center gap-2 mt-2">
                  <h1 className="font-[600] text-[22px] leading-none">99.1%</h1>
                  <h4 className="text-blue-500 bg-gray-200 rounded-2xl text-[13px] text-center px-2 mt-1">
                    24h avg
                  </h4>
                </div>
              </li>
              <li>
                <h3 className="text-[13px] text-gray-500">Active Alerts</h3>
                <div className="flex items-center gap-2 mt-2">
                  <h1 className="font-[600] text-[22px] leading-none">3</h1>
                  <h4 className="text-red-500 bg-gray-200 rounded-2xl text-[13px] text-center px-2 mt-1">
                    Needs attention
                  </h4>
                </div>
              </li>
            </ul>
            <div>
              <div className="text-[13px] font-[600]">System Uptime (24h)</div>
              <div className="graph h-[200px] w-[100%]">
                <LineGraph />
              </div>
            </div>
          </div>
        </div>

        <div className="camera-status border border-gray-300 bg-transparent rounded-[10px] w-[40%] px-5 ">
          <h1>Camera Status</h1>
          <div className="general-status">
            <div className="online mb-3">
              <h3 className="text-gray-500 text-sm w-[100%] relative">
                Online
                <div className="text-black absolute right-0 top-0 font-[600]">
                  142
                </div>
              </h3>
              <div className="h-2 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-black after:absolute after:w-[70%] after:h-full after:left-0 after:content-['']"></div>
            </div>
            <div className="offline mb-3">
              <h3 className="text-gray-500 text-sm w-[100%] relative">
                Offline
                <div className="text-black absolute right-0 top-0 font-[600]">
                  142
                </div>
              </h3>
              <div className="h-2 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-black after:absolute after:w-[50%] after:h-full after:left-0 after:content-['']"></div>
            </div>
            <div className="maintenance mb-3">
              <h3 className="text-gray-500 text-sm w-[100%] relative">
                Maintenance
                <div className="text-black absolute right-0 top-0 font-[600]">
                  142
                </div>
              </h3>
              <div className="h-2 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-black after:absolute after:w-[20%] after:h-full after:left-0 after:content-['']"></div>
            </div>
          </div>
          <div className="flex justify-center h-[50%]">
            <PieGraph />
          </div>
        </div>
      </div>
    </>
  );
}
