import Nav from "../../glob-components/Nav";
import { GradientContext } from "../../glob-components/header-gradient/GradientUserContext";
import { useContext, useEffect } from "react";
import ClientSorter from "./components/ClientSorter";
import Client from "./components/Client";

export default function Clients() {
  const arr = [1, 2, 3, 4];
  const context = useContext(GradientContext);

  if (!context) {
    throw new Error("Dashboard must be used within a GradientHeaderProvider");
  }

  const { GradientHeader, setHeaderProps } = context;

  useEffect(() => {
    setHeaderProps({
      fromColor: "from-blue-300/50",
      toColor: "to-purple-400/60",
      title: "Client Management",
      subTitle:
        "Manage relationships, monitor installations, and track performance across all your clients.",
      sideButtons: [
        <div className="cursor-pointer text-sm bg-linear-45 from-blue-500 to-purple-600 text-white px-4 py-1 h-8 rounded-[6px] grid items-center hover:bg-linear-45 hover:from-blue-700 hover:to-purple-800 hover:duration-300 dark:text-black">
          + Add New Client
        </div>,
      ],
      cards: [
        {
          icon: ["fas", "people-group"],
          color: ["bg-blue-500", "text-blue-500"],
          cardTitle: "Active Clients",
          cardValue: "3",
        },
        {
          icon: ["fas", "arrow-trend-up"],
          color: ["bg-green-500", "text-green-500"],
          cardTitle: "Total Revenue",
          cardValue: "$109,050",
        },
        {
          icon: ["far", "camera"],
          color: ["bg-purple-500", "text-purple-500"],
          cardTitle: "Total Cameras",
          cardValue: "182",
        },
        {
          icon: ["fas", "bolt"],
          color: ["bg-orange-500", "text-orange-500"],
          cardTitle: "Avg Uptime",
          cardValue: "96.0%",
        },
      ],
    });
  }, []);
  return (
    <div className="pt-18 dark:bg-neutral-900">
      <Nav />
      <div className="clients-area px-[10%] pt-10 grid gap-5">
        <GradientHeader />
        <ClientSorter />

        <ul className="flex flex-wrap gap-2">
          {arr.map(() => (
            <Client />
          ))}
        </ul>
      </div>
    </div>
  );
}
