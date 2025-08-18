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

const labels = [
  "1/1/2024",
  "1/8/2024",
  "1/15/2024",
  "1/22/2024",
  "1/29/2024",
  "2/5/2024",
  "2/12/2024",
];

const data = {
  labels,
  datasets: [
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
};

export function StackedBar() {
  return <Bar options={options} data={data} />;
}
