import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../glob-components/Nav";
import Camera from "./components/Camera";
import { GradientContext } from "../../glob-components/globalContext";
import { useContext, useEffect } from "react";

export default function Management() {
  const context = useContext(GradientContext);

  if (!context) {
    throw new Error("Dashboard must be used within a GradientHeaderProvider");
  }

  const { GradientHeader, setHeaderProps } = context;

  useEffect(() => {
    setHeaderProps({
      fromColor: "from-slate-500/20",
      toColor: "to-zinc-500/40",
      title: "Camera Management",
      subTitle:
        "Configure, organize, and maintain all camera systems with advanced RTSP management and health monitoring.",
      sideButtons: [
        <div className="px-2 py-[1px] bg-white dark:bg-black/40 dark:text-white rounded-[5px]">
          <FontAwesomeIcon className="w-5 h-5" icon={["fas", "gear"]} /> System
          Config
        </div>,
        <div className="px-2 py-[1px] bg-white font-bold dark:bg-black/40 dark:text-white rounded-[5px]">
          + Add New Camera
        </div>,
      ],
      cards: [
        {
          icon: ["far", "camera"],
          color: ["bg-blue-500", "text-blue-500"],
          cardTitle: "Total Cameras",
          cardValue: "155",
          cardAdditionalInfo: "Acros 4 locations",
        },
        {
          icon: ["far", "circle-check"],
          color: ["bg-green-500", "text-green-500"],
          cardTitle: "Configured",
          cardValue: "147",
          cardAdditionalInfo: "Ready for use",
        },
        {
          icon: ["fas", "arrow-trend-up"],
          color: ["bg-orange-500", "text-orange-500"],
          cardTitle: "RTSP Streams",
          cardValue: "142",
          cardAdditionalInfo: "Active connections",
        },
        {
          icon: ["fas", "gear"],
          color: ["bg-purple-500", "text-purple-500"],
          cardTitle: "Maintenance Due",
          cardValue: "12",
          cardAdditionalInfo: "This month",
        },
      ],
    });
  }, []);

  return (
    <div className="page-style">
      <Nav />
      <GradientHeader />
      <div className="relative">
        <h1 className="section-title">Camera Management</h1>
        <h3 className="text-normal">
          Add, edit, and monitor all camera installations across your client
          locations.
        </h3>
        <button className="button absolute right-0 top-0">+ Add Camera</button>
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
  );
}
