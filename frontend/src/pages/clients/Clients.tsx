import { useContext, useEffect } from "react";
import Nav from "../../glob-components/Nav";
import {
  GradientContext,
  SorterContext,
} from "../../glob-components/globalContext";
import Client from "./components/Client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Clients() {
  const arr = [1, 2, 3, 4];
  const Headercontext = useContext(GradientContext);
  const Sortercontext = useContext(SorterContext);

  if (!Headercontext || !Sortercontext) {
    throw new Error("Context must be used within a Provider");
  }

  const { GradientHeader, setHeaderProps } = Headercontext;
  const { messageProps, setOptions, Sorter, setEl } = Sortercontext;

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

  useEffect(() => {
    messageProps.setMessage("Search camera...");
    setOptions({
      selector1: ["All Status", "Active", "Inactive", "Pending"],
    });
    setEl({
      elements: [
        <div className="flex items-center shaded-texts px-2 gap-1">
          <FontAwesomeIcon
            icon={["fas", "filter"]}
            className="text-[11px] text-black relative mb-1"
          />
          4 Results
        </div>,
      ],
    });
  }, []);

  return (
    <div className="page-style">
      <Nav />
      <GradientHeader />
      <Sorter />

      <ul className="flex flex-wrap gap-2">
        {arr.map((_, index) => (
          <div key={index}>
            <Client />
          </div>
        ))}
      </ul>
    </div>
  );
}
