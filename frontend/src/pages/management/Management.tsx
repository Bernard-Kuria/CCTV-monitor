import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../glob-components/Nav";
import Camera from "./components/Camera";

export default function Management() {
  return (
    <div className="pt-18 dark:bg-neutral-900">
      <Nav />
      <div className="feed-area px-[10%] pt-10 grid gap-5">
        <div className="relative">
          <h1 className="section-title">Camera Management</h1>
          <h3 className="text-normal">
            Add, edit, and monitor all camera installations across your client
            locations.
          </h3>
          <button className="button absolute right-0 top-0">
            + Add Camera
          </button>
        </div>
        <ul className="flex gap-1">
          <li className="shaded-texts text-black">
            <FontAwesomeIcon className="" icon={["far", "camera"]} /> 3 Total
            Cameras
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
          <li className="shaded-texts">
            <FontAwesomeIcon icon={["far", "building"]} /> 3 clients
          </li>
        </ul>
        <Camera />
        <Camera />
        <Camera />
      </div>
    </div>
  );
}
