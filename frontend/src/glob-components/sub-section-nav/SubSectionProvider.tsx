import { useReducer, useState, useEffect, type ReactNode } from "react";
import { SubSectionContext, type SectionProps } from "./SubSectionContext";
import SubSectionNav from "./SubSectionNav";

type ActionType = { type: string; payload: string };
type Props = { children: ReactNode };

export default function SubSectionProvider({ children }: Props) {
  const [sectionProps, setSectionProps] = useState<SectionProps>({
    sections: [""],
  });

  function reducer(state: string, action: ActionType) {
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

  return (
    <SubSectionContext.Provider
      value={{
        setSectionProps,
        activeSection,
        SectionNav,
      }}
    >
      {children}
    </SubSectionContext.Provider>
  );
}
