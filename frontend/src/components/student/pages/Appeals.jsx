import React from 'react';

const appealsData = [
  {
    id: 1,
    appealId: '98933',
    lessonName: 'Mathematics',
    category: 'CAT',
    marksObtained: '10/10',
    status: 'Approved'
  },
  {
    id: 2,
    appealId: '98933',
    lessonName: 'Mathematics',
    category: 'CAT',
    marksObtained: '10/10',
    status: 'Approved'
  },
  {
    id: 3,
    appealId: '98933',
    lessonName: 'Mathematics',
    category: 'CAT',
    marksObtained: '10/10',
    status: 'Approved'
  },
  {
    id: 4,
    appealId: '98933',
    lessonName: 'Mathematics',
    category: 'CAT',
    marksObtained: '10/10',
    status: 'Approved'
  },
];

export const Appeals = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Appeals</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Download excel
        </button>
      </div>

      <div className="flex justify-between mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-4 pr-4 py-2 rounded-lg border"
          />
        </div>
        <div className="flex gap-4">
          <select className="px-4 py-2 border rounded-lg">
            <option>Filter by Teacher</option>
          </select>
          <select className="px-4 py-2 border rounded-lg">
            <option>Filter by Academic year</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left">#</th>
              <th className="px-6 py-3 text-left">Appeal ID</th>
              <th className="px-6 py-3 text-left">Lesson Name</th>
              <th className="px-6 py-3 text-left">Category</th>
              <th className="px-6 py-3 text-left">Marks Obtained</th>
              <th className="px-6 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {appealsData.map((appeal) => (
              <tr key={appeal.id} className="border-t">
                <td className="px-6 py-4">{appeal.id}</td>
                <td className="px-6 py-4">{appeal.appealId}</td>
                <td className="px-6 py-4">{appeal.lessonName}</td>
                <td className="px-6 py-4">{appeal.category}</td>
                <td className="px-6 py-4">{appeal.marksObtained}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium
                      ${appeal.status === 'Approved' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                      }`}
                  >
                    {appeal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
