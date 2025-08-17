import { useState, type ReactNode } from "react";
import {
  LineContext,
  type LineProps,
  PieContext,
  type PieProps,
} from "./ChartContext";

import Doughnut from "./Doughnut";
import LineGraphComponent from "./LineShaded";

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

  return (
    <LineContext.Provider value={{ lineProps, setLineProps, LineGraph }}>
      <PieContext.Provider value={{ pieProps, setPieProps, PieDoughnut }}>
        {children}
      </PieContext.Provider>
    </LineContext.Provider>
  );
}
