import { createContext, type JSX, type ReactNode } from "react";
export type Props = { children: ReactNode };

// ********** SorterContext **********
export type SorterProps = {
  message: string;
  options: optionsProps;
};

type messageProps = {
  message: string;
  setMessage: (props: string) => void;
};

export type element = {
  elements:
    | [ReactNode]
    | [ReactNode, ReactNode]
    | [ReactNode, ReactNode, ReactNode]
    | [ReactNode, ReactNode, ReactNode, ReactNode];
};

export type optionsProps = { selector1: string[]; selector2?: string[] };

export type SorterContextType = {
  messageProps: messageProps;
  setOptions: (
    props:
      | { selector1: string[] }
      | { selector1: string[]; selector2: string[] }
      | { selector1: string[]; selector2: string[]; selector3: string[] }
  ) => void;
  Sorter: () => JSX.Element;
  el: element;
  setEl: (props: element) => void;
};

export const SorterContext = createContext<SorterContextType | null>(null);

// ********** SubSectionContext *********
export type ActionType = { type: string; payload: string };

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

// ********** GradientContext **********
export type GradientHeaderProps = {
  fromColor: string;
  toColor: string;
  title: string;
  subTitle: string;
  sideButtons: [ReactNode] | [ReactNode, ReactNode];
  cards: [
    {
      icon: [string, string];
      color: [string, string];
      cardTitle: string;
      cardValue: string | number;
      cardAdditionalInfo?: string;
    },
    {
      icon: [string, string];
      color: [string, string];
      cardTitle: string;
      cardValue: string | number;
      cardAdditionalInfo?: string;
    },
    {
      icon: [string, string];
      color: [string, string];
      cardTitle: string;
      cardValue: string | number;
      cardAdditionalInfo?: string;
    },
    {
      icon: [string, string];
      color: [string, string];
      cardTitle: string;
      cardValue: string | number;
      cardAdditionalInfo?: string;
    }
  ];
};

export type GradientContextType = {
  headerProps: GradientHeaderProps;
  setHeaderProps: (props: GradientHeaderProps) => void;
  GradientHeader: () => JSX.Element;
};

export const GradientContext = createContext<GradientContextType | null>(null);

// ********** ThemeContext **********
type ThemeContextType = {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<"bright" | "dark">>;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
