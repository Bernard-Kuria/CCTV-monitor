export default function HealthPerformance() {
  return (
    <div>
      <div className="font-[600] my-4">System Health & Performance</div>
      <div className="online text-sm w-[350px] border border-gray-300 p-5 rounded-2xl flex flex-col gap-2">
        <h1 className="font-[600]">Online Cameras</h1>
        <h3 className="flex text-2xl items-center">
          142
          <div className="text-green-500 text-[12px] px-2 rounded-[5px] bg-gray-300">
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
  );
}
