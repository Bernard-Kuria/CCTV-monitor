import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../glob-components/Nav";
import CameraView from "./components/CameraView";
import { GradientContext } from "../../glob-components/header-gradient/GradientUserContext";
import { useContext, useEffect } from "react";
import { SorterContext } from "../../glob-components/sort/SorterContext";
import type { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core";

const tags = [
  { color: "text-black", name: "Cameras", icon: ["far", "camera"], value: 6 },
  {
    color: "text-(--green-primary)",
    name: "Online",
    icon: ["fas", "wifi"],
    value: 3,
  },
  {
    color: "text-(--red-primary)",
    name: "Offline",
    icon: ["fas", "wifi"],
    value: 2,
  },
  {
    color: "text-(--orange-primary)",
    name: "Error",
    icon: ["fas", "triangle-exclamation"],
    value: 0,
  },
  {
    color: "text-(--blue-primary)",
    name: "Connecting",
    icon: ["fas", "bolt"],
    value: 1,
  },
];

export default function Feed() {
  const Headercontext = useContext(GradientContext);
  const Sortercontext = useContext(SorterContext);

  if (!Headercontext || !Sortercontext) {
    throw new Error("Context must be used within a Provider");
  }

  const { GradientHeader, setHeaderProps } = Headercontext;
  const { messageProps, setOptions, Sorter, setEl } = Sortercontext;

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

  useEffect(() => {
    messageProps.setMessage("");
    setOptions({
      selector1: ["All Status", "Online", "Offline", "Error", "Connecting"],
      selector2: [
        "All Clients",
        "TechCorp HQ",
        "RetailPlus Store",
        "OfficeMax Central",
        "SecureBank Downtown",
      ],
    });
    setEl({
      elements: [
        <div className="flex gap-[10px] items-center">
          <button className="button">Auto-refresh</button>
          <div className="mini-text-normal">| Grid:</div>
          <button className="button">2x2</button>
          <button className="button">3x3</button>
          <button className="button">4x4</button>
        </div>,
      ],
    });
  }, []);

  return (
    <div className="pt-18 dark:bg-neutral-900">
      <Nav />
      <div className="feed-area px-[10%] pt-10 grid gap-5">
        <GradientHeader />
        <Sorter />
        <ul className="flex gap-1">
          {tags.map((tag) => (
            <li className={`shaded-texts ${tag.color} relative`}>
              <FontAwesomeIcon
                className=""
                icon={[tag.icon[0] as IconPrefix, tag.icon[1] as IconName]}
              />{" "}
              {tag.value} {tag.name}
              {tag.name === "Offline" && (
                <div className="absolute w-4 h-px bg-(--red-primary) rotate-45 top-[2px] left-[10px] origin-left"></div>
              )}
            </li>
          ))}
        </ul>
        <CameraView />
      </div>
    </div>
  );
}
