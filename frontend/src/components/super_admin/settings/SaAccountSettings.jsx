import React, { useState } from "react";
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

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

const themeColors = [
  { name: "white", value: "#FFFFFF" },
  { name: "blue", value: "#4169E1" },
  { name: "red", value: "#DC143C" },
  { name: "purple", value: "#663399" },
  { name: "indigo", value: "#4B0082" },
  { name: "black", value: "#000000" },
  { name: "orange", value: "#FFA500" },
  { name: "yellow", value: "#FFD700" },
  { name: "pink", value: "#FF69B4" },
  { name: "gray", value: "#808080" },
  { name: "cyan", value: "#00CED1" },
  { name: "magenta", value: "#FF00FF" },
];

const chartData = {
  labels: ["2015", "2016", "2017", "2018", "2019", "2020"],
  datasets: [
    {
      label: "Approved",
      data: [20, 25, 35, 45, 35, 25],
      borderColor: "#4CAF50",
      tension: 0.4,
    },
    {
      label: "Submitted",
      data: [15, 30, 25, 40, 30, 20],
      borderColor: "#2196F3",
      tension: 0.4,
    },
  ],
};

export function LineChart({ data }) {
  return <Line options={options} data={data} />;
}

export function SaAccountSettings({ onBack }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-8">
      <h1 className="text-2xl font-semibold">Account Settings</h1>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg border">
              <div>
                <h3 className="font-medium">Name, Location, Role</h3>
                <p className="text-sm text-gray-500">Update your personal information</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg border">
              <div>
                <h3 className="font-medium">Theme mode</h3>
                <p className="text-sm text-gray-500">Choose your preferred theme</p>
              </div>
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={(e) => setIsDarkMode(e.target.checked)}
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg border">
              <div>
                <h3 className="font-medium">Data and Privacy</h3>
                <p className="text-sm text-gray-500">Manage your data preferences</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">General Preferences</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-100 rounded-lg border">
              <div>
                <h3 className="font-medium">Language</h3>
                <p className="text-sm text-gray-500">Select your preferred language</p>
              </div>
              <select defaultValue="en" className="border p-2 rounded">
                <option value="en">English (US)</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
              </select>
            </div>

            <div className="p-4 bg-gray-100 rounded-lg border">
              <h3 className="font-medium mb-4">Theme</h3>
              <div className="flex flex-wrap gap-2">
                {themeColors.map((color) => (
                  <button
                    key={color.name}
                    className="w-8 h-8 rounded-full border-2 border-gray-200 focus:outline-none"
                    style={{ backgroundColor: color.value }}
                    aria-label={`Select ${color.name} theme`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <div className="p-6 bg-gray-100 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Claims Over the Years</h3>
            <div className="h-[300px]">
              <LineChart data={chartData} />
            </div>
          </div>

          <div className="p-6 bg-blue-600 text-white rounded-lg">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold mb-2">Schools Admin</h3>
                <div className="text-4xl font-bold mb-4">120</div>
                <p className="text-sm opacity-90">N. of Admins</p>

                <div className="mt-6">
                  <div className="text-4xl font-bold mb-1">1.4k</div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">No. of Schools</span>
                    <span className="text-sm bg-white/20 px-2 py-0.5 rounded">+15%</span>
                  </div>
                </div>
              </div>

              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                  />
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-500 flex items-center justify-center text-sm">
                  +100
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SaAccountSettings;
