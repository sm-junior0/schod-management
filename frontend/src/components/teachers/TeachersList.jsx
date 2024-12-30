import React from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';

export const TeachersList = ({
  teachers,
  onViewProfile,
  onViewRole,
  onEditRole,
  onDelete,
}) => {
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
              placeholder="Search for a teacher by name or email"
              className="pl-4 pr-4 py-2 rounded-lg border w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Subject</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Class</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email address</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Gender</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={teacher.avatar}
                      alt={teacher.name}
                      className="w-8 h-8 rounded-full mr-3"
                    />
                    <span>{teacher.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">{teacher.subject}</td>
                <td className="px-6 py-4">{teacher.class}</td>
                <td className="px-6 py-4">{teacher.email}</td>
                <td className="px-6 py-4">{teacher.gender}</td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onViewProfile(teacher)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Eye size={16} className="text-gray-600" />
                    </button>
                    <button
                      onClick={() => onEditRole(teacher)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Pencil size={16} className="text-gray-600" />
                    </button>
                    <button
                      onClick={() => onDelete(teacher)}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
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
