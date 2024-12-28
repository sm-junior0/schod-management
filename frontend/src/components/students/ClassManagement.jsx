import React from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';

const mockClasses = [
  {
    id: 1,
    name: 'Year 1 A',
    headTeacher: 'Alice Mukabaranga',
    studentCount: 30,
  },
  // Add more mock classes as needed
];

export const ClassManagement = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <button className="text-gray-600 px-4 py-2 rounded-lg border hover:bg-gray-50">
            Add filter
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for class here"
              className="pl-4 pr-4 py-2 rounded-lg border w-[300px]"
            />
          </div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add Class
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Class Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Headteacher Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Student No</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Students</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Assign Students</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Assign Lessons</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Lessons</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {mockClasses.map((classItem) => (
              <tr key={classItem.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{classItem.id}</td>
                <td className="px-6 py-4">{classItem.name}</td>
                <td className="px-6 py-4">{classItem.headTeacher}</td>
                <td className="px-6 py-4">{classItem.studentCount}</td>
                <td className="px-6 py-4 text-center">
                  <Eye size={16} className="inline text-gray-600" />
                </td>
                <td className="px-6 py-4 text-center">
                  <Pencil size={16} className="inline text-gray-600" />
                </td>
                <td className="px-6 py-4 text-center">
                  <Pencil size={16} className="inline text-gray-600" />
                </td>
                <td className="px-6 py-4 text-center">
                  <Eye size={16} className="inline text-gray-600" />
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Pencil size={16} className="text-gray-600" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
