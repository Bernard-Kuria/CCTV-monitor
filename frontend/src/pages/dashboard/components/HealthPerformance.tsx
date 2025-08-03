export default function HealthPerformance() {
  return (
    <div>
      <div className="font-[600] my-4 dark:text-gray-200">
        System Health & Performance
      </div>
      <div className="inline-flex flex-wrap gap-3 w-[100%]">
        <div className="online text-sm w-[350px] border border-gray-300 dark:border-gray-500 p-5 rounded-2xl flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Online Cameras</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            142
            <div className="text-green-500 text-[12px] px-2 rounded-[5px] bg-gray-300 m-[5px]">
              +2
            </div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-green-500 after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] border border-gray-300 dark:border-gray-500 p-5 rounded-2xl flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">System Health</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            98.9%
            <div className="text-green-500 text-[12px] px-2 rounded-[5px] bg-gray-300 m-[5px]">
              +2
            </div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-green-500 after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] border border-gray-300 dark:border-gray-500 p-5 rounded-2xl flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Active Alerts</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            3
            <div className="text-red-500 text-[12px] px-2 rounded-[5px] bg-gray-300 m-[5px]">
              +2
            </div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-red-500 after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] border border-gray-300 dark:border-gray-500 p-5 rounded-2xl flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Avg Response Time</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            1.2s
            <div className="text-orange-500 text-[12px] px-2 rounded-[5px] bg-gray-300 m-[5px]">
              +2
            </div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-orange-500 after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] border border-gray-300 dark:border-gray-500 p-5 rounded-2xl flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Maintenance Due</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            12
            <div className="text-red-500 text-[12px] px-2 rounded-[5px] bg-gray-300 m-[5px]">
              +2
            </div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-red-500 after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] border border-gray-300 dark:border-gray-500 p-5 rounded-2xl flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Active Clients</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            28
            <div className="text-green-500 text-[12px] px-2 rounded-[5px] bg-gray-300 m-[5px]">
              +2
            </div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-green-500 after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
      </div>
    </div>
  );
}
