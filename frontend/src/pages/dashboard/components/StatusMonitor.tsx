export default function StatusMonitor() {
  return (
    <div>
      <div className="font-[600] dark:text-gray-200">Camera Status Monitor</div>
      <div
        className="monitoring relative w-[100%] border border-gray-300 dark:border-gray-500 rounded-[10px]
      p-5 mb-10 grid gap-4"
      >
        <div className=" dark:text-gray-300">
          Camera Monitoring
          <div className="absolute right-5 top-5 text-[12px] flex gap-2">
            <div className="bg-gray-300 rounded-[5px] px-[4px]">142 Online</div>
            <div className="text-red-500 bg-gray-300 rounded-[5px] px-[4px]">
              8 Issues
            </div>
          </div>
        </div>
        <table className="w-full border-collapse text-sm">
          <thead className="">
            <tr className="border-b border-gray-300 dark:border-gray-500 dark:text-gray-200 text-left font-[700]">
              <th className="px-4 py-2">Camera ID</th>
              <th className="px-4 py-2">Name & Location</th>
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Quality</th>
              <th className="px-4 py-2">Uptime</th>
              <th className="px-4 py-2">Maintenance</th>
              <th className="px-4 py-2">Signal</th>
              <th className="px-4 py-2">Options</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900">
              <td className="px-4 py-2 text-left font-[500] dark:text-gray-300">
                CAM-001
              </td>
              <td className="px-4 py-2 text-left font-[500] dark:text-gray-300">
                Main Entrance{" "}
                <div className="text-gray-400">Building A - Floor 1</div>
              </td>
              <td className="px-4 py-2 text-left dark:text-gray-300">
                TechCorp HQ
              </td>
              <td className="px-4 py-2 text-left">
                <div className="bg-green-200 text-green-500 w-fit px-2 rounded-[5px]">
                  Online
                </div>
              </td>
              <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                1080p <div className="text-gray-600"> 2 mins ago</div>
              </td>
              <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                99.2%
                <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-green-500 after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
              </td>
              <td className="px-4 py-2 text-left ">
                <div className="text-green-500 bg-green-200 w-fit px-2 rounded-[5px]">
                  Good
                </div>
              </td>
              <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                95%
              </td>
              <td className="px-4 py-2 items-center">
                <div className=" cursor-pointer w-fit px-2 pb-2 rounded-2xl hover:bg-gray-300 dark:text-gray-200">
                  ...
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900">
              <td className="px-4 py-2 text-left font-[500] dark:text-gray-300">
                CAM-002
              </td>
              <td className="px-4 py-2 text-left font-[500] dark:text-gray-300">
                Parking Lot West{" "}
                <div className="text-gray-400">Outdoor - Section B</div>
              </td>
              <td className="px-4 py-2 text-left dark:text-gray-300">
                TechCorp HQ
              </td>
              <td className="px-4 py-2 text-left">
                <div className="bg-green-200 text-green-500 w-fit px-2 rounded-[5px]">
                  Online
                </div>
              </td>
              <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                4K <div className="text-gray-600"> 1 mins ago</div>
              </td>
              <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                99.8%
                <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-green-500 after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
              </td>
              <td className="px-4 py-2 text-left ">
                <div className="text-green-500 bg-green-200 w-fit px-2 rounded-[5px]">
                  Good
                </div>
              </td>
              <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                88%
              </td>
              <td className="px-4 py-2 items-center">
                <div className=" cursor-pointer w-fit px-2 pb-2 rounded-2xl hover:bg-gray-300 dark:text-gray-200">
                  ...
                </div>
              </td>
            </tr>
            <tr className="border-b border-gray-300 dark:border-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900">
              <td className="px-4 py-2 text-left font-[500] dark:text-gray-300">
                CAM-003
              </td>
              <td className="px-4 py-2 text-left font-[500] dark:text-gray-300">
                Storage Room{" "}
                <div className="text-gray-400">Warehouse - Level 2</div>
              </td>
              <td className="px-4 py-2 text-left dark:text-gray-300">
                RetailPlus Store
              </td>
              <td className="px-4 py-2 text-left">
                <div className="bg-red-200 text-red-500 w-fit px-2 rounded-[5px]">
                  Offline 2 alerts
                </div>
              </td>
              <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                720p <div className="text-gray-600"> 2 hours ago</div>
              </td>
              <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                87.3%
                <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-red-500 after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
              </td>
              <td className="px-4 py-2 text-left ">
                <div className="text-red-500 bg-red-200 w-fit px-2 rounded-[5px]">
                  Poor
                </div>
              </td>
              <td className="px-4 py-2 text-left font-[600] dark:text-gray-200">
                0%
              </td>
              <td className="px-4 py-2 items-center">
                <div className=" cursor-pointer w-fit px-2 pb-2 rounded-2xl hover:bg-gray-300 dark:text-gray-200">
                  ...
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
