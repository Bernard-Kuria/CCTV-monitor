import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../glob-components/Nav";
import CameraView from "./components/CameraView";
import CamSorter from "./components/CamSorter";
import { GradientContext } from "../../glob-components/header-gradient/GradientUserContext";
import { useContext, useEffect } from "react";

export default function Feed() {
  const context = useContext(GradientContext);

  if (!context) {
    throw new Error("Dashboard must be used within a GradientHeaderProvider");
  }

  const { GradientHeader, setHeaderProps } = context;

  useEffect(() => {
    setHeaderProps({
      fromColor: "from-blue-500/20",
      toColor: "to-cyan-500/40",
      title: "Live Camera Monitoring",
      subTitle:
        "Real-time surveillance feeds with health status indicators and instant alerts across all client locations.",
      sideButtons: [
        <div className="px-2 py-[1px] bg-white dark:bg-black/40 dark:text-white rounded-[5px]">
          <FontAwesomeIcon className="w-5 h-5" icon={["fas", "gear"]} /> Camera
          Settings
        </div>,
        <div className="px-2 py-[1px] bg-blue-500 text-white hover:bg-blue-600 dark:bg-black/40 dark:text-white rounded-[5px]">
          + Add Camera
        </div>,
      ],
      cards: [
        {
          icon: ["far", "eye"],
          color: ["bg-green-500", "text-green-500"],
          cardTitle: "Active Clients",
          cardValue: "142",
          cardAdditionalInfo: "91.6% uptime",
        },
        {
          icon: ["fas", "triangle-exclamation"],
          color: ["bg-red-500", "text-red-500"],
          cardTitle: "Offline Alerts",
          cardValue: "182",
          cardAdditionalInfo: "91.6% online",
        },
        {
          icon: ["fas", "wifi"],
          color: ["bg-blue-500", "text-blue-500"],
          cardTitle: "Network Status",
          cardValue: "Stable",
          cardAdditionalInfo: "Low Latency",
        },
        {
          icon: ["fas", "triangle-exclamation"],
          color: ["bg-purple-500", "text-purple-500"],
          cardTitle: "Active Feeds",
          cardValue: "38",
          cardAdditionalInfo: "Currently viewing",
        },
      ],
    });
  }, []);

  return (
    <div className="pt-18 dark:bg-neutral-900">
      <Nav />
      <div className="feed-area px-[10%] pt-10 grid gap-5">
        <GradientHeader />
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
