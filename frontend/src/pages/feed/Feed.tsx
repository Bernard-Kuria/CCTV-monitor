import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../glob-components/Nav";
import CameraView from "./components/CameraView";
import CamSorter from "./components/CamSorter";

export default function Feed() {
  return (
    <div className="pt-18 bg-amber-50 dark:bg-neutral-900">
      <Nav />
      <div className="feed-area px-[10%] pt-10 grid gap-5">
        <div>
          <h1 className="section-title">Live Camera Feeds</h1>
          <h3 className="text-normal">
            Monitor live camera feeds from all your client locations in
            real-time with health status indicators.
          </h3>
        </div>
        <CamSorter />
        <ul className="flex gap-1">
          <li className="shaded-texts text-black">
            <FontAwesomeIcon className="" icon={["far", "camera"]} /> 6 Cameras
          </li>
          <li className="shaded-texts text-(--green-primary)">
            <FontAwesomeIcon className="" icon="wifi" /> 3 Online
          </li>
          <li className="flex shaded-texts text-(--red-primary)">
            <div className="relative">
              <FontAwesomeIcon className="" icon="wifi" />
              <div className="diagonal-line"></div>
            </div>
            2 Offline
          </li>
          <li className="shaded-texts text-(--orange-primary)">
            <FontAwesomeIcon className="" icon="triangle-exclamation" /> 0 Error
          </li>
          <li className="shaded-texts text-(--blue-primary)">
            <FontAwesomeIcon className="" icon="bolt" /> 1 Connecting
          </li>
        </ul>
        <CameraView />
      </div>
    </div>
  );
}
