import { createContext, type JSX } from "react";

export type SectionProps = {
  sections: string[];
};

export type ActiveSectionType = {
  activeSection: string;
};

export type handleSectionChange = (section: string) => void;

export type SubSectionContextType = {
  setSectionProps: (props: SectionProps) => void;
  activeSection: string;
  SectionNav: () => JSX.Element;
  handleSectionChange: handleSectionChange;
};

export const SubSectionContext = createContext<SubSectionContextType | null>(
  null
);
