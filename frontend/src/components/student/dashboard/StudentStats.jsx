import React from 'react';

export const StudentStats = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm text-gray-600 mb-2">Current Class</h3>
        <p className="text-2xl font-semibold">{data.currentClass}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm text-gray-600">Discipline Cases</h3>
          <button className="text-blue-600 text-sm hover:underline">View cases</button>
        </div>
        <p className="text-2xl font-semibold">{data.disciplineCases}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-sm text-gray-600">Previous Term Improvement</h3>
          <button className="text-blue-600 text-sm hover:underline">View Report Card</button>
        </div>
        <p className="text-2xl font-semibold">{data.previousTermImprovement}%</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-sm text-gray-600 mb-2">Current Term Progress</h3>
        <p className="text-2xl font-semibold">{data.currentTermProgress}%</p>
      </div>
    </div>
  );
};
