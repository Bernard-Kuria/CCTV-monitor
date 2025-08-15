import { useState, type ReactNode } from "react";

import { LineContext, type LineProps } from "./LineUserContext";
import LineGraphComponent from "./Line"; // renamed to avoid clash

type Props = { children: ReactNode };

export function LineProvider({ children }: Props) {
  const [lineProps, setLineProps] = useState<LineProps>({
    data: [98.5, 98, 99.2, 99, 99.8, 99.5],
  });

  const LineGraph = () => <LineGraphComponent {...lineProps} />;

  return (
    <LineContext.Provider value={{ lineProps, setLineProps, LineGraph }}>
      {children}
    </LineContext.Provider>
  );
}
