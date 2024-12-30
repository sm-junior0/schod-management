import React, { useState } from 'react';
import { X } from 'lucide-react';

const MOCK_STUDENTS = [
  {
    id: '1',
    name: 'Burigo Jabes',
    parentName: 'Ntagungira Ali Rashid',
    parentPhone: '0781293833',
    intake: '2023',
    gender: 'M',
  },
  {
    id: '2',
    name: 'Abijuru Seth',
    parentName: 'Ntagungira Ali Rashid',
    parentPhone: '0781293833',
    intake: '2023',
    gender: 'M',
  },
  {
    id: '3',
    name: 'Umutesi Grace',
    parentName: 'Mukamana Jane',
    parentPhone: '0782345678',
    intake: '2023',
    gender: 'F',
  },
  {
    id: '4',
    name: 'Irakoze Patrick',
    parentName: 'Nsengiyumva Joseph',
    parentPhone: '0789876543',
    intake: '2022',
    gender: 'M',
  },
  {
    id: '5',
    name: 'Uwase Claudine',
    parentName: 'Uwera Marie',
    parentPhone: '0783456789',
    intake: '2023',
    gender: 'F',
  },
];

export const AssignStudentsModal = ({ onClose, onSubmit }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedStudents);
    onClose();
  };

  const toggleStudent = (studentId) => {
    setSelectedStudents((prev) =>
      prev.includes(studentId)
        ? prev.filter((id) => id !== studentId)
        : [...prev, studentId]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[800px]">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Assign Class</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="w-8 p-2"></th>
                <th className="text-left p-2">Student Name</th>
                <th className="text-left p-2">Parents Name</th>
                <th className="text-left p-2">Parent Phone</th>
                <th className="text-left p-2">Intake</th>
                <th className="text-left p-2">Gender</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_STUDENTS.map((student) => (
                <tr key={student.id} className="border-t">
                  <td className="p-2">
                    <input
                      type="checkbox"
                      checked={selectedStudents.includes(student.id)}
                      onChange={() => toggleStudent(student.id)}
                      className="rounded"
                    />
                  </td>
                  <td className="p-2">{student.name}</td>
                  <td className="p-2">{student.parentName}</td>
                  <td className="p-2">{student.parentPhone}</td>
                  <td className="p-2">{student.intake}</td>
                  <td className="p-2">{student.gender}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Assign Selected Students
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
