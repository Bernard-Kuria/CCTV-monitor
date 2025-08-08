import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Camera() {
  return (
    <div className="flex component-border relative p-5">
      <div className="h-full text-(--green-primary) text-[12px] mr-2">
        <FontAwesomeIcon
          className="p-1 bg-gray-300 rounded-[5px]"
          icon="wifi"
        />
      </div>
      <div className="mini-text-normal text-gray-500 leading-relaxed">
        <div className="flex gap-1 text-sm text-black dark:text-white">
          Main Entrance
          <div className="bordered-text text-(--green-secondary) text-[11px]">
            online
          </div>
        </div>
        <div>
          <FontAwesomeIcon
            className="h-full text-gray-300 text-[12px]"
            icon={["far", "building"]}
          />
          TechCorp HQ
        </div>
        <div>
          <FontAwesomeIcon
            className="h-full text-gray-300 text-[12px]"
            icon={["fas", "location-pin"]}
          />
          Building A - Floor 1
        </div>
        <div>IP: 192.168.1.101 | Port: 554</div>
        <div>Last ping: 8/8/2025, 2:49:34 AM</div>
      </div>
      <div className="absolute top-5 right-5 flex gap-2 text-sm">
        <button className="bordered-text h-6 hover:bg-gray-200 cursor-pointer dark:text-white dark:hover:text-black">
          <FontAwesomeIcon
            className="h-full text-[12px] mr-1"
            icon={["far", "eye"]}
          />
          View
        </button>
        <button className="bordered-text h-6 hover:bg-gray-200 cursor-pointer dark:text-white dark:hover:text-black">
          <FontAwesomeIcon
            className="h-full text-[12px] mr-1"
            icon={["far", "pen-to-square"]}
          />
          Edit
        </button>
        <button className="bordered-text h-6 hover:bg-gray-200 cursor-pointer text-(--red-secondary)">
          <FontAwesomeIcon
            className="h-full text-[12px] mr-1"
            icon={["far", "trash-can"]}
          />
          Delete
        </button>
      </div>
    </div>
  );
}
