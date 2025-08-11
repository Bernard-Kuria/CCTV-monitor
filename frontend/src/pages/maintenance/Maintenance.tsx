import Nav from "../../glob-components/Nav";
import { GradientContext } from "../../glob-components/header-gradient/GradientUserContext";
import { useContext, useEffect } from "react";

export default function Maintenance() {
  const context = useContext(GradientContext);

  if (!context) {
    throw new Error("Dashboard must be used within a GradientHeaderProvider");
  }

  const { GradientHeader, setHeaderProps } = context;

  useEffect(() => {
    setHeaderProps({
      fromColor: "from-orange-300/50",
      toColor: "to-yellow-400/60",
      title: "Maintenance Management",
      subTitle:
        "Schedule, track, and manage maintenance tasks across all your CCTV installations.",
      sideButtons: [
        <div className="cursor-pointer text-sm bg-linear-45 from-orange-500 to-yellow-600 text-white px-4 py-1 h-8 rounded-[6px] grid items-center hover:bg-linear-45 hover:from-orange-700 hover:to-yellow-800 hover:duration-300 dark:text-black">
          + Schedule Maintenance
        </div>,
      ],
      cards: [
        {
          icon: ["fas", "triangle-exclamation"],
          color: ["bg-red-500", "text-red-500"],
          cardTitle: "Urgent Tasks",
          cardValue: "2",
        },
        {
          icon: ["far", "clock"],
          color: ["bg-orange-500", "text-orange-500"],
          cardTitle: "Overdue",
          cardValue: "1",
        },
        {
          icon: ["far", "calendar-days"],
          color: ["bg-blue-500", "text-blue-500"],
          cardTitle: "Scheduled",
          cardValue: "2",
        },
        {
          icon: ["far", "circle-check"],
          color: ["bg-green-500", "text-green-500"],
          cardTitle: "Completed",
          cardValue: "0",
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
