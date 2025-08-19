import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TaskManagement() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      {arr.map((_, index) => (
        <div
          key={index}
          className="component-border p-5 relative hover:shadow-lg hover:shadow-gray-300 dark:hover:shadow-gray-700 duration-300"
        >
          <div className="w-[calc(100%-100px)]  grid gap-5">
            <div className="relative">
              <ul className="flex gap-1">
                <li className="shaded-texts">scheduled</li>
                <li className="shaded-texts">medium</li>
                <li className="shaded-texts">routine</li>
              </ul>
              <div>
                <h2 className="text-bold">Quarterly Camera Inspection</h2>
                <h3 className="text-normal">
                  Routine inspection and cleaning pf all camera systems
                </h3>
              </div>
            </div>

            <div className="relative flex gap-[25%] text-normal">
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={["fas", "location-pin"]} />
                <div>
                  <div className="mini-text-bold">TexhCorp HQ</div>
                  <div className="">Building A- All Floors</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={["far", "calendar-days"]} />
                <div>
                  <div className="mini-text-bold">Scheduled</div>
                  <div className="">3/15/2024</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <FontAwesomeIcon icon={["far", "clock"]} />
                <div>
                  <div className="mini-text-bold">Duration</div>
                  <div className="">240 min</div>
                </div>
              </div>
            </div>
            <div>
              <div className="relative mini-text-normal">
                Preparation{" "}
                <div className="absolute right-0 top-0 mini-text-normal">
                  {" "}
                  Ready to start
                </div>
              </div>
              <div className="progress-bar after:w-[calc(8/155*100%)]"></div>
            </div>
            <div className="relative flex gap-2 items-center">
              <div className="profile"></div>
              <div>
                <div className="mini-text-bold">John Martinez</div>
                <div className="mini-text-normal">Assigned Technician</div>
              </div>
              <div className="absolute right-0 top-0 flex gap-10">
                <div className="mini-text-normal">
                  <FontAwesomeIcon icon={["far", "camera"]} /> 45 cameras
                </div>
                <div className="mini-text-bold">$450</div>
              </div>
            </div>
          </div>
          <div className="absolute right-5 top-5 grid gap-1 w-[100px] text-normal">
            <button className="bright-button flex items-center gap-1 cursor-pointer">
              <FontAwesomeIcon icon={["far", "file"]} />
              Details
            </button>
            <button className="button flex items-center gap-1">
              {" "}
              <FontAwesomeIcon icon={["far", "circle-play"]} /> Start Task
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
