import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ClientSorter() {
  return (
    <div className="mini-text-normal component-border flex h-[60px] items-center justify-between p-5">
      <div className="flex gap-[20px]">
        <div className="input camera-search flex gap-1 items-center focus-within:border-2 focus-within:shadow-md shadow-gray-500">
          <FontAwesomeIcon className="text-gray-400" icon="magnifying-glass" />
          <input
            type="text"
            placeholder="Search clients..."
            className="focus:outline-none"
          />
        </div>

        <select name="" id="" className="selector">
          <option value="">All Status</option>
          <option value="">Online</option>
          <option value="">Offline</option>
          <option value="">Error</option>
          <option value="">Connecting</option>
        </select>
      </div>

      <div className="flex items-center shaded-texts px-2 gap-1">
        <FontAwesomeIcon
          icon={["fas", "filter"]}
          className="text-[11px] text-black relative mb-1"
        />
        4 Results
      </div>
    </div>
  );
}
