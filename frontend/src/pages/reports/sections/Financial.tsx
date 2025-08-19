// modules
import { useContext, useEffect } from "react";

// components
import { BarContext } from "../../../glob-components/charts/ChartContext";

//assets

export default function Financial() {
  const barContext = useContext(BarContext);

  if (!barContext) {
    throw new Error("context must be used within a provider");
  }

  const { BarGraph, setBarProps } = barContext;

  useEffect(() => {
    setBarProps({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      dataset: [
        {
          label: "Total Revenue",
          data: [7000, 5000, 4000, 6000, 8000, 7000, 9000],
          backgroundColor: "rgb(80, 25, 235)",
          stack: "Stack 2",
        },
        {
          label: "Maintenance",
          data: [2000, 1000, 3000, 2500, 2000, 1000, 4000],
          backgroundColor: "rgb(255, 99, 71)",
          stack: "Stack 0",
        },
        {
          label: "New Installations",
          data: [4000, 3000, 2000, 1000, 5000, 2000, 3000],
          backgroundColor: "rgb(50, 205, 50)",
          stack: "Stack 1",
        },
      ],
    });
  }, []);

  return (
    <div className="grid gap-10">
      <div className="component-border w-full p-10 ">
        <BarGraph />
      </div>
    </div>
  );
}
