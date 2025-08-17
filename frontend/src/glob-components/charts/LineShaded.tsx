import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart,
  registerables,
  Filler,
  type ChartData,
  type ChartOptions,
} from "chart.js";
import { type LineProps } from "./ChartContext";

Chart.register(...registerables, Filler);

export default function LineGraph({ data, labels }: LineProps) {
  const [chartData, setChartData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    // Create an offscreen canvas to generate the gradient
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, -100, 0, 400);
    gradient.addColorStop(0, "rgba(0, 255, 179, 2)");
    gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Uptime",
          data: data,
          fill: true,
          backgroundColor: gradient,
          borderColor: "rgba(0, 255, 179, 1)",
          tension: 0.4,
          pointRadius: 0,
          pointHitRadius: 10,
        },
      ],
    });
  }, []);

  const options: ChartOptions<"line"> = {
    maintainAspectRatio: false,
    responsive: true,
    animation: {
      duration: 1000,
      easing: "linear",
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        backgroundColor: "#000",
        titleColor: "#0ff",
        bodyColor: "#fff",
        padding: 10,
        borderColor: "#0ff",
        borderWidth: 1,
        callbacks: {
          label: (context) => {
            const label = context.dataset.label || "";
            const value = context.formattedValue;
            return `${label}: ${value}%`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          drawTicks: true,
          drawOnChartArea: false,
        },
        ticks: {
          callback: (_val, index) => labels[index] ?? "",
          maxRotation: 0,
          autoSkip: false,
          font: {
            size: 14,
          },
        },
      },
      y: {
        min: 95,
        max: 100,
        grid: {
          drawTicks: true,
          drawOnChartArea: false,
        },
        ticks: {
          callback: (value) =>
            [95, 97, 99, 100].includes(+value) ? value.toString() : "",
          stepSize: 1,
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return <>{chartData && <Line data={chartData} options={options} />}</>;
}
