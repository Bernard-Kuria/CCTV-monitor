import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options: ChartOptions<"line"> = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      min: 0,
      max: 8,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Average Response Time (hours)",
      data: [4.1, 4, 4.2, 4, 4.2, 4.3, 4.1],
      borderColor: "rgb(30,144,255)",
      backgroundColor: "rgba(30,144,255,0.5)",
    },
  ],
};

export function LineNonShaded() {
  return <Line options={options} data={data} />;
}
