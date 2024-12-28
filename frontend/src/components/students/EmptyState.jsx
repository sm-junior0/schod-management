import React from 'react';

export const EmptyState = ({ onAddStudent }) => (
  <div className="flex flex-col items-center justify-center py-12">
    <div className="w-64 h-64 mb-8">
      <img
        src="https://raw.githubusercontent.com/shadcn/ui/main/apps/www/public/examples/tasks-empty.svg"
        alt="No students"
        className="w-full h-full"
      />
    </div>
    <h2 className="text-2xl font-semibold mb-2">No students at this time</h2>
    <p className="text-gray-600 mb-6">
      Students will appear here after they enroll in your school.
    </p>
    <button
      onClick={onAddStudent}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
    >
      Add Students
    </button>
  </div>
);
