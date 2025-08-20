// modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect } from "react";

// components
import Nav from "../../glob-components/Nav";
import { GradientContext } from "../../glob-components/header-gradient/GradientUserContext";
import { SubSectionContext } from "../../glob-components/sub-section-nav/SubSectionContext";
import { SorterContext } from "../../glob-components/sort/SorterContext";

// sections
import DashSection from "./sections/DashSection";
import Performance from "./sections/Performance";
import Analytics from "./sections/Analytics";
import Financial from "./sections/Financial";

export default function Reports() {
  const Headercontext = useContext(GradientContext);
  const Sectioncontext = useContext(SubSectionContext);
  const Sortercontext = useContext(SorterContext);

  if (!Headercontext || !Sectioncontext || !Sortercontext) {
    throw new Error("Context must be used within a Provider");
  }

  const { GradientHeader, setHeaderProps } = Headercontext;
  const { setSectionProps, activeSection, SectionNav, handleSectionChange } =
    Sectioncontext;
  const { messageProps, setOptions, Sorter, setEl } = Sortercontext;

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

  useEffect(() => {
    setSectionProps({
      sections: ["Dashboard", "Performance", "Current Analytics", "Financial"],
    });
    handleSectionChange("Dashboard");
  }, []);

  useEffect(() => {
    messageProps.setMessage("");
    setOptions({
      selector1: [
        "Last 7 Days",
        "Last 30 Days",
        "Last 3 months",
        "Last 6 months",
        "Last Year",
        "Custom Range",
      ],
      selector2: [
        "All Clients",
        "TechCorp HQ",
        "RetailPlus Store",
        "OfficeMax Central",
        "SecureBank Downtown",
      ],
      selector3: ["Overview", "Performance", "Finance", "Incidents"],
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
      <SectionNav />
      <Sorter />
      {activeSection === "Dashboard" && <DashSection />}
      {activeSection === "Performance" && <Performance />}
      {activeSection === "Current Analytics" && <Analytics />}
      {activeSection === "Financial" && <Financial />}
    </div>
  );
}
