import Nav from "../../glob-components/Nav";
import { GradientContext } from "../../glob-components/header-gradient/GradientUserContext";
import { useContext, useEffect, useReducer } from "react";

// Sections
import TaskManagement from "./sections/TaskManagement";
import CalenderView from "./sections/CalenderView";
import Technicians from "./sections/Technicians";
import Analytics from "./sections/Analytics";

// Components
import SectionNav from "./components/SectionNav";
import TaskSorter from "./components/TaskSorter";

const SECTIONS = {
  TASKMANAGEMENT: "taskmanagement",
  CALENDERVIEW: "calenderview",
  TECHNICIANS: "technicians",
  ANALYTICS: "analytics",
};

type ActionType = { type: string; payload: string };

function reducer(state: string, action: ActionType) {
  switch (action.type) {
    case SECTIONS.TASKMANAGEMENT:
      return action.payload;
    case SECTIONS.CALENDERVIEW:
      return action.payload;
    case SECTIONS.TECHNICIANS:
      return action.payload;
    case SECTIONS.ANALYTICS:
      return action.payload;
    default:
      return state;
  }
}

export default function Maintenance() {
  const [activeSection, setActiveSection] = useReducer(
    reducer,
    SECTIONS.TASKMANAGEMENT
  );

  function handleSectionChange(section: string) {
    setActiveSection({ type: section, payload: section });
  }

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
      <div className="feed-area px-[10%] pt-10 grid gap-5 pb-10">
        <GradientHeader />
        <SectionNav
          activeSection={activeSection}
          handleSectionChange={handleSectionChange}
        />
        <TaskSorter />
        {activeSection === SECTIONS.TASKMANAGEMENT && <TaskManagement />}
        {activeSection === SECTIONS.CALENDERVIEW && <CalenderView />}
        {activeSection === SECTIONS.TECHNICIANS && <Technicians />}
        {activeSection === SECTIONS.ANALYTICS && <Analytics />}
      </div>
    </div>
  );
}
