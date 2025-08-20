import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import type { barProps } from "../ChartContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"bar"> = {
  plugins: {
    legend: { position: "bottom" as const },
    tooltip: {
      callbacks: {
        afterBody: (context) => {
          const dataIndex = context[0].dataIndex;
          const datasets = context[0].chart.data.datasets;

          return datasets.map((ds) => {
            const value = (ds.data as number[])[dataIndex];
            return `${ds.label}: ${value}`;
          });
        },
      },
    },
  },
  responsive: true,
  scales: {
    x: { stacked: true },
    y: { stacked: true },
  },
};

export function BarChart({ labels, dataset }: barProps) {
  const data = { labels, datasets: dataset.map((ds) => ({ ...ds })) };
  return <Bar options={options} data={data} />;
}
