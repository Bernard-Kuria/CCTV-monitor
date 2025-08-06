export default function HealthPerformance() {
  return (
    <div>
      <div className="font-[600] my-4 dark:text-gray-200">
        System Health & Performance
      </div>
      <div className="inline-flex flex-wrap gap-3 w-[100%]">
        <div className="online text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Online Cameras</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            142
            <div className="text-(--green-primary) shaded-texts">+2</div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--green-primary) after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">System Health</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            98.9%
            <div className="text-(--green-primary) shaded-texts">+2</div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--green-primary) after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Active Alerts</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            3<div className="text-(--red-primary) shaded-texts">+2</div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--red-primary) after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Avg Response Time</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            1.2s
            <div className="text-(--orange-primary) shaded-texts">+2</div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--orange-primary) after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Maintenance Due</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            12
            <div className="text-(--red-primary) shaded-texts">+2</div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--red-primary) after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
        <div className="online text-sm w-[350px] component-border p-5 flex flex-col gap-2">
          <h1 className="font-[600] dark:text-gray-300">Active Clients</h1>
          <h3 className="flex text-2xl items-center dark:text-gray-200">
            28
            <div className="text-(--green-primary) shaded-texts">+2</div>
          </h3>
          <div className="text-gray-500">of 155 total cameras</div>
          <h3 className="text-gray-500 text-sm w-[100%] relative">
            Health
            <div className="text-gray-500 absolute right-0 top-0">91.6%</div>
          </h3>
          <div className="h-1 w-full rounded-2xl bg-gray-300 relative overflow-hidden after:bg-(--green-primary) after:absolute after:w-[91.6%] after:h-full after:left-0 after:content-['']"></div>
        </div>
      </div>
    </div>
  );
}
