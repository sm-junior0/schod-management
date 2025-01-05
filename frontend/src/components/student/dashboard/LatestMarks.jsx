import React from 'react';

const marks = [
  { subject: 'Mathematics', marks: 90, weights: 100, status: 'PASS', comments: 'Keep it up!' },
  { subject: 'Physics', marks: 90, weights: 100, status: 'PASS', comments: 'Keep it up!' },
  { subject: 'Java', marks: 90, weights: 100, status: 'PASS', comments: 'Keep it up!' },
  { subject: 'PHP', marks: 90, weights: 100, status: 'PASS', comments: 'Keep it up!' },
];

export const LatestMarks = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <table className="min-w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Lesson</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Marks</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Weights</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
            <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Comments</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {marks.map((mark, index) => (
            <tr key={index}>
              <td className="px-6 py-4 text-sm text-gray-900">{mark.subject}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{mark.marks}</td>
              <td className="px-6 py-4 text-sm text-gray-900">{mark.weights}</td>
              <td className="px-6 py-4 text-sm">
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  {mark.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">{mark.comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
