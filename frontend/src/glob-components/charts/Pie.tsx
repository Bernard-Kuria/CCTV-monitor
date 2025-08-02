import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type TooltipItem,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieGraph() {
  const data = {
    labels: ["Online", "Offline", "Maintenance"],
    datasets: [
      {
        data: [80, 15, 5],
        backgroundColor: [
          "rgba(0, 255, 179, 0.9)",
          "rgba(54, 162, 235, 0.9)",
          "rgba(255, 206, 86, 0.9)",
        ],
        borderColor: "#fff",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: "60%",
    animation: {
      duration: 1000,
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (context: TooltipItem<"doughnut">) {
            const label = context.label || "";
            const value = context.raw ?? 0;
            return `${label}: ${value} cameras`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
