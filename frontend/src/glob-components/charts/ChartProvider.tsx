import { useState, type ReactNode } from "react";
import {
  LineContext,
  type LineProps,
  PieContext,
  type PieProps,
  BarContext,
  type barProps,
} from "./ChartContext";

import Doughnut from "./Doughnut";
import LineGraphComponent from "./LineShaded";
import { BarChart } from "./BarChart";

type Props = { children: ReactNode };

export function ChartProvider({ children }: Props) {
  // Line state
  const [lineProps, setLineProps] = useState<LineProps>({
    data: [98.5, 98, 99.2, 99, 99.8, 99.5],
    labels: ["00:00", "04:00", "08:00", "12:00", "16:00", "20:00"],
  });

  const LineGraph = () => <LineGraphComponent {...lineProps} />;

  // Pie state
  const [pieProps, setPieProps] = useState<PieProps>({ pieData: [80, 15, 5] });

  const PieDoughnut = () => <Doughnut {...pieProps} />;

  // Bar state

  const [barProps, setBarProps] = useState<barProps>({
    labels: [
      "1/1/2024",
      "1/8/2024",
      "1/15/2024",
      "1/22/2024",
      "1/29/2024",
      "2/5/2024",
      "2/12/2024",
    ],
    dataset: [
      {
        label: "Critical",
        data: [0, 1, 2, 1, 3, 2, 0],
        backgroundColor: "rgb(255, 20, 60)",
        stack: "Stack 0",
      },
      {
        label: "High",
        data: [1, 2, 0, 3, 1, 4, 2],
        backgroundColor: "rgb(255, 205, 22)",
        stack: "Stack 0",
      },
      {
        label: "Low",
        data: [2, 1, 3, 0, 2, 1, 4],
        backgroundColor: "rgb(255, 99, 71)",
        stack: "Stack 0",
      },
      {
        label: "Medium",
        data: [4, 3, 2, 1, 5, 2, 3],
        backgroundColor: "rgb(50, 205, 50)",
        stack: "Stack 0",
      },
      {
        label: "Resolved",
        data: [7, 5, 4, 6, 8, 7, 9],
        backgroundColor: "rgb(80, 25, 235)",
        stack: "Stack 1",
      },
    ],
  });

  const BarGraph = () => <BarChart {...barProps} />;

  return (
    <LineContext.Provider value={{ lineProps, setLineProps, LineGraph }}>
      <PieContext.Provider value={{ pieProps, setPieProps, PieDoughnut }}>
        <BarContext.Provider value={{ barProps, setBarProps, BarGraph }}>
          {children}
        </BarContext.Provider>
      </PieContext.Provider>
    </LineContext.Provider>
  );
}
