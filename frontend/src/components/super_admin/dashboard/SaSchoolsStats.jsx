import React from "react";

export const SaSchoolsStats = () => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">Schools Admin</h3>
          <p className="text-blue-200 text-sm">% of Admin</p>
        </div>
        <span className="text-2xl font-bold">120</span>
      </div>

      <div className="mb-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Schools in total</span>
          <span>+15%</span>
        </div>
        <div className="text-3xl font-bold">1.4k</div>
      </div>

      <div className="flex -space-x-2">
        {[1, 2, 3].map((i) => (
          <img
            key={i}
            src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces&q=${i}`}
            alt={`Admin ${i}`}
            className="w-8 h-8 rounded-full border-2 border-blue-600"
          />
        ))}
      </div>
    </div>
  );
};
