import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Nav from "../../glob-components/Nav";
import { GradientContext } from "../../glob-components/header-gradient/GradientUserContext";
import { useContext, useEffect } from "react";

export default function Reports() {
  const context = useContext(GradientContext);

  if (!context) {
    throw new Error("Dashboard must be used within a GradientHeaderProvider");
  }

  const { GradientHeader, setHeaderProps } = context;

  useEffect(() => {
    setHeaderProps({
      fromColor: "from-emerald-300/50",
      toColor: "to-cyan-400/60",
      title: "Reports & Analytics",
      subTitle:
        "Comprehensive insights into system performance, uptime statistics, and business metrics.",
      sideButtons: [
        <div className="flex items-center gap-2 cursor-pointer mini-text-normal bg-white px-4 py-1 h-8 rounded-[6px] hover:bg-gray-300">
          <span className="relative inline-flex items-center">
            <FontAwesomeIcon
              icon={["fas", "arrow-down"]}
              className="text-[8px] text-black relative mb-1"
            />
            <span
              className="after:content-[''] after:block after:absolute after:left-1/2 after:-translate-x-1/2 after:top-[calc(100%-5px)] after:w-3 after:h-1 after:border after:border-black after:border-t-0 after:rounded-b-[1px]"
              aria-hidden="true"
            ></span>
          </span>
          Export Data
        </div>,
        <div className="flex items-center gap-2 cursor-pointer text-sm bg-linear-45 from-emerald-500 to-cyan-600 text-white px-4 py-1 h-8 rounded-[6px] hover:bg-linear-45 hover:from-emerald-700 hover:to-cyan-800 hover:duration-300 dark:text-black">
          <FontAwesomeIcon
            className={`text-[15px] text-white`}
            icon={["far", "calendar-days"]}
          />{" "}
          Add New Client
        </div>,
      ],
      cards: [
        {
          icon: ["fas", "arrow-trend-up"],
          color: ["bg-green-500", "text-green-500"],
          cardTitle: "System Uptime",
          cardValue: "99.3%",
          cardAdditionalInfo: "2.3% vs last month",
        },
        {
          icon: ["far", "camera"],
          color: ["bg-blue-500", "text-blue-500"],
          cardTitle: "Active Cameras",
          cardValue: "155",
          cardAdditionalInfo: "91.6% online rate",
        },
        {
          icon: ["fas", "dollar-sign"],
          color: ["bg-purple-500", "text-purple-500"],
          cardTitle: "Total Revenue",
          cardValue: "$686K",
          cardAdditionalInfo: "12.5% growth",
        },
        {
          icon: ["fas", "triangle-exclamation"],
          color: ["bg-orange-500", "text-orange-500"],
          cardTitle: "Inciidents",
          cardValue: "39",
          cardAdditionalInfo: "15% reduction",
        },
      ],
    });
  }, []);
  return (
    <div className="pt-18 dark:bg-neutral-900">
      <Nav />
      <div className="feed-area px-[10%] pt-10 grid gap-5">
        <GradientHeader />
      </div>
    </div>
  );
}
