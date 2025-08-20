import type { Point } from "chart.js";
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
type LineDataSets = {
  label: string;
  data: (number | Point | null)[];
  borderColor: string;
  backgroundColor: string;
};

type y = {
  min: number;
  max: number;
  ticks: {
    callback: (value: number | string) => string;
  };
};

export type LineProps = {
  labels: string[];
  datasets: LineDataSets[];
  drawOnChartArea?: boolean;
  scales?: {
    y?: y;
  };
};

export type LineContextType = {
  lineProps: LineProps;
  setLineProps: (props: LineProps) => void;
  LineGraph: () => JSX.Element;
};

// Bar chart Props
type datasetType = {
  label: string;
  data: number[];
  backgroundColor: string;
  stack: string;
};

export type barProps = {
  labels: string[];
  dataset: datasetType[];
};

export type BarContextType = {
  barProps: barProps;
  setBarProps: (props: barProps) => void;
  BarGraph: () => JSX.Element;
};

export const LineContext = createContext<LineContextType | null>(null);
export const PieContext = createContext<PieContextType | null>(null);
export const BarContext = createContext<BarContextType | null>(null);
