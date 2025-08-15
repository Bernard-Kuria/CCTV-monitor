import { createContext, type JSX } from "react";

export type LineProps = {
  data: number[];
};

export type LineContextType = {
  lineProps: LineProps;
  setLineProps: (props: LineProps) => void;
  LineGraph: () => JSX.Element;
};

export const LineContext = createContext<LineContextType | null>(null);
