import { createContext, type JSX, type ReactNode } from "react";

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
