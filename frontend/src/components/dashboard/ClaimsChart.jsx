import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
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

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      align: "end",
      labels: {
        boxWidth: 8,
        usePointStyle: true,
        pointStyle: "circle",
        padding: 20,
        color: "#64748b",
      },
    },
    tooltip: {
      backgroundColor: "#fff",
      titleColor: "#1e293b",
      bodyColor: "#64748b",
      borderColor: "#e2e8f0",
      borderWidth: 1,
      padding: 12,
      displayColors: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(0, 0, 0, 0.04)",
        border: false,
      },
      ticks: {
        color: "#64748b",
        padding: 8,
        stepSize: 10,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: "#64748b",
        padding: 8,
      },
    },
  },
  elements: {
    line: {
      tension: 0.4,
      borderWidth: 2,
      fill: true,
    },
    point: {
      radius: 0,
      hitRadius: 8,
      hoverRadius: 4,
    },
  },
};

const labels = ["2015", "2016", "2017", "2018", "2019", "2020"];

const data = {
  labels,
  datasets: [
    {
      label: "Approved",
      data: [30, 35, 25, 45, 35, 40],
      borderColor: "#22C55E",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
    },
    {
      label: "Submitted",
      data: [25, 30, 20, 40, 30, 35],
      borderColor: "#3B82F6",
      backgroundColor: "rgba(59, 130, 246, 0.1)",
    },
  ],
};

export const ClaimsChart = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">
          Claims Over the Years
        </h2>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
            2018
          </span>
          <span className="text-gray-300">•</span>
          <span>35</span>
        </div>
      </div>
      <div className="h-[300px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
