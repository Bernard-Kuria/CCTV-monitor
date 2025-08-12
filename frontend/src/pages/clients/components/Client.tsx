import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Client() {
  return (
    <div className="component-border mini-text-normal w-[350px] p-5 grid gap-4 shadow-md hover:shadow-gray-400 hover:translate-y-[-4px] duration-400 dark:bg-black/30 dark:hover:shadow-black/80">
      <div className="client-image-and-status flex items-center relative">
        <div className="profile w-[40px] h-[40px] mr-2 border rounded-[50%]">
          <img src="image" alt="" />
        </div>
        <div className="name-indurstry">
          <h2 className="mini-text-bold">Sarah Chen</h2>
          <h3>TechCorp HQ</h3>
        </div>
        <div className="absolute right-0 top-0 inline-flex">
          <div className="shaded-texts">high</div>
          <div className="shaded-texts">active</div>
        </div>
      </div>
      <div className="contacts grid gap-1">
        <div className="location">
          <FontAwesomeIcon icon={["fas", "location-pin"]} className="" /> San
          Francisco, CA
        </div>
        <div className="email">
          <FontAwesomeIcon icon={["far", "envelope"]} /> sarah.chen@techcorp.com
        </div>
        <div className="phone">
          <FontAwesomeIcon icon={["fas", "phone"]} /> (555) 123-4567
        </div>
      </div>
      <hr />
      <div className="status grid gap-2">
        <div className="title-text relative">
          Camera Status{" "}
          <div className="progress-ratio absolute right-0 top-0 text-black">
            43/45
          </div>
        </div>
        <div className="progress-bar after:w-[calc(43/45*100%)]"></div>
        <div className="flex gap-2">
          <div>Uptime: 95.6%</div>
          <div>Revenue: $27,000</div>
        </div>
      </div>
      <div className="maintenance-due relative px-2 py-1 bg-gray-300 bordered-text flex items-center gap-1 text-black">
        <FontAwesomeIcon icon={["far", "clock"]} /> Next Maintenance{" "}
        <div className="absolute right-2">4/15/2024</div>
      </div>
      <div className="flex gap-1">
        <button className="bordered-text flex-1 hover:bg-gray-200 cursor-pointer  dark:text-white dark:hover:text-black">
          <FontAwesomeIcon icon={["far", "eye"]} /> View Details
        </button>
        <div className="h-6 px-1 rounded hover:bg-gray-200 cursor-pointer dark:text-white dark:hover:text-black">
          <FontAwesomeIcon
            className="h-full mr-1"
            icon={["far", "pen-to-square"]}
          />
          Edit
        </div>
      </div>
    </div>
  );
}
