// modules
import { useReducer, useState, useEffect } from "react";

// components
import SubSectionNav from "./SubSectionNav";
import TaskSorter from "./Sorter";
import GradientHeaderComponent from "./GradientHeader";

// types & context
import {
  SubSectionContext,
  SorterContext,
  ThemeContext,
  GradientContext,
  type SectionProps,
  type GradientHeaderProps,
  type element,
  type optionsProps,
  type ActionType,
  type Props,
} from "./globalContext";

export default function GlobalProvider({ children }: Props) {
  // *********** Sub-Section ***********
  const [sectionProps, setSectionProps] = useState<SectionProps>({
    sections: [""],
  });

  function reducer(_: string, action: ActionType) {
    return action.payload;
  }

  const [activeSection, setActiveSection] = useReducer(reducer, "");

  function handleSectionChange(section: string) {
    setActiveSection({ type: section, payload: section });
  }

  useEffect(() => {
    if (sectionProps.sections.length > 0 && !activeSection) {
      setActiveSection({ type: "INIT", payload: sectionProps.sections[0] });
    }
  }, [sectionProps.sections, activeSection]);

  const SectionNav = () => (
    <SubSectionNav
      sections={sectionProps.sections}
      activeSection={activeSection}
      handleSectionChange={handleSectionChange}
    />
  );

  // *********** Sorter ***********
  const [message, setMessage] = useState<string>("Search camera...");

  const [options, setOptions] = useState<optionsProps>({
    selector1: [],
    selector2: [],
  });

  const [el, setEl] = useState<element>({
    elements: [<div></div>],
  });

  function Sorter() {
    return <TaskSorter message={message} options={options} {...el} />;
  }

  // *********** Gradient Header ***********
  const [headerProps, setHeaderProps] = useState<GradientHeaderProps>({
    fromColor: "from-indigo-500/20",
    toColor: "to-pink-500/40",
    title: "Welcome!",
    subTitle: "Here's your dashboard",
    sideButtons: [
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Click me
      </button>,
      <button className="px-4 py-2 bg-blue-500 text-white rounded">
        Click me
      </button>,
    ],
    cards: [
      {
        icon: ["fas", "bolt"],
        color: ["bg-blue-500", "text-blue-500"],
        cardTitle: "Active Clients",
        cardValue: "123",
        cardAdditionalInfo: "All monitored",
      },
      {
        icon: ["far", "camera"],
        color: ["bg-green-500", "text-green-500"],
        cardTitle: "Total Cameras",
        cardValue: "182",
        cardAdditionalInfo: "91.6% online",
      },
      {
        icon: ["fas", "arrow-trend-up"],
        color: ["bg-purple-500", "text-purple-500"],
        cardTitle: "System Uptime",
        cardValue: "99.2%",
        cardAdditionalInfo: "Last 30 days",
      },
      {
        icon: ["fas", "triangle-exclamation"],
        color: ["bg-orange-500", "text-orange-500"],
        cardTitle: "Active Alerts",
        cardValue: "3",
        cardAdditionalInfo: "Requires attention",
      },
    ],
  });

  const GradientHeader = () => <GradientHeaderComponent {...headerProps} />;

  // *********** Dark Theme ***********

  const [theme, setTheme] = useState<"bright" | "dark">("bright");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark" || stored === "bright") {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <SubSectionContext.Provider
      value={{
        setSectionProps,
        activeSection,
        SectionNav,
        handleSectionChange,
      }}
    >
      <SorterContext.Provider
        value={{
          messageProps: { message, setMessage },
          setOptions,
          Sorter,
          el,
          setEl,
        }}
      >
        <GradientContext.Provider
          value={{ headerProps, setHeaderProps, GradientHeader }}
        >
          <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
          </ThemeContext.Provider>
        </GradientContext.Provider>
      </SorterContext.Provider>
    </SubSectionContext.Provider>
  );
}
