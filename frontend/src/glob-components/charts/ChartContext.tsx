import { createContext, type JSX } from "react";

// Pie Chart Props
export type PieProps = {
  pieData: number[];
};

type PieContextType = {
  pieProps: PieProps;
  setPieProps: (props: PieProps) => void;
  PieDoughnut: () => JSX.Element;
};

// Line Chart Props
export type LineProps = {
  labels: string[];
  data: number[];
};

export type LineContextType = {
  lineProps: LineProps;
  setLineProps: (props: LineProps) => void;
  LineGraph: () => JSX.Element;
};

export const LineContext = createContext<LineContextType | null>(null);
export const PieContext = createContext<PieContextType | null>(null);
