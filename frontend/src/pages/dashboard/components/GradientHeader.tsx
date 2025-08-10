import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function GradientHeader() {
  return (
    <header className="p-8 h-60 bg-linear-135 from-indigo-500/20 to-pink-500/40 rounded-2xl border-1 border-indigo-500/10 dark:from-indigo-800/80 dark:to-pink-800/60 dark:border-indigo-800/40 dark:border-1 leading-relaxed">
      <div className="">
        <div className="welcome-text mb-5 relative">
          <h1 className="section-title">Welcome back, admin! 👋</h1>
          <h3 className="text-[15px] dark:text-white">
            Monitor and manage all camera systems across your client locations
            from one centralized control center.
          </h3>
          <div className="flex gap-2 text-[12px] absolute right-0 top-2 dark:text-white items-center">
            <div className="px-2 py-[1px] bg-white dark:bg-black/40 dark:text-white rounded-[5px]">
              <FontAwesomeIcon className="w-5 h-5" icon={["fas", "shield"]} />{" "}
              System Secure
            </div>
            <div className="px-2 py-[1px] bg-white dark:bg-black/40 dark:text-white rounded-[5px]">
              <FontAwesomeIcon className="w-5 h-5" icon={["fas", "bolt"]} /> All
              Systems Operational
            </div>
          </div>
        </div>
      </div>

      <ul className="cards flex justify-between w-full">
        <li className="card flex items-center leading-tight">
          <FontAwesomeIcon
            className="text-[15px] p-2 rounded-[10px] bg-blue-500 mr-2 text-white"
            icon={["fas", "bolt"]}
          />
          <div>
            <h4 className="mini-text-normal">Active Clients</h4>
            <h1 className="text-values">4</h1>
            <h5 className="text-[12px] text-blue-500">All monitored</h5>
          </div>
        </li>
        <li className="card flex items-center leading-tight">
          <FontAwesomeIcon
            className="text-[15px] p-2 rounded-[10px] bg-blue-500 mr-2 text-white"
            icon={["fas", "bolt"]}
          />
          <div>
            <h4 className="mini-text-normal">Active Clients</h4>
            <h1 className="text-values">4</h1>
            <h5 className="text-[12px] text-blue-500">All monitored</h5>
          </div>
        </li>
        <li className="card flex items-center leading-tight">
          <FontAwesomeIcon
            className="text-[15px] p-2 rounded-[10px] bg-blue-500 mr-2 text-white"
            icon={["fas", "bolt"]}
          />
          <div>
            <h4 className="mini-text-normal">Active Clients</h4>
            <h1 className="text-values">4</h1>
            <h5 className="text-[12px] text-blue-500">All monitored</h5>
          </div>
        </li>
        <li className="card flex items-center leading-tight">
          <FontAwesomeIcon
            className="text-[15px] p-2 rounded-[10px] bg-blue-500 mr-2 text-white"
            icon={["fas", "bolt"]}
          />
          <div>
            <h4 className="mini-text-normal">Active Clients</h4>
            <h1 className="text-values">4</h1>
            <h5 className="text-[12px] text-blue-500">All monitored</h5>
          </div>
        </li>
      </ul>
    </header>
  );
}
