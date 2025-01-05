import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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
      display: false,
    },
    tooltip: {
      backgroundColor: '#fff',
      titleColor: '#1e293b',
      bodyColor: '#64748b',
      borderColor: '#e2e8f0',
      borderWidth: 1,
      padding: 12,
      displayColors: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      grid: {
        color: 'rgba(0, 0, 0, 0.04)',
      },
      ticks: {
        color: '#64748b',
        padding: 8,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#64748b',
        padding: 8,
      },
    },
  },
};

const labels = ['Term 1', 'Mid Term', 'Term 2', 'Mid Term II', 'Term 3'];
const data = {
  labels,
  datasets: [
    {
      data: [85, 82, 89, 89.4, 91],
      borderColor: '#3b82f6',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

export const PerformanceGraph = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold">Performance Graph</h2>
        <div className="text-sm text-gray-500">Mid Term II: 89.4%</div>
      </div>
      <div className="h-[300px]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
