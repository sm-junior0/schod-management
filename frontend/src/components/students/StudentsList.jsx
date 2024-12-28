import React, { useState } from 'react';
import { Search, Eye, Pencil, Trash2 } from 'lucide-react';

export const StudentsList = ({ students, onSelectStudent }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter students based on the search term
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">
          <button className="text-gray-600 px-4 py-2 rounded-lg border hover:bg-gray-50">
            Add filter
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for a student by name or email"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term
              className="pl-10 pr-4 py-2 rounded-lg border w-[300px]"
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Student ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email address</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Class</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Gender</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => onSelectStudent(student)}
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <img
                        src={student.avatar}
                        alt={student.name}
                        className="w-8 h-8 rounded-full mr-3"
                      />
                      <span>{student.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{student.id}</td>
                  <td className="px-6 py-4">{student.email}</td>
                  <td className="px-6 py-4">{student.class}</td>
                  <td className="px-6 py-4">{student.gender}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Pencil size={16} className="text-gray-600" />
                      </button>
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Trash2 size={16} className="text-red-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  No students found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
