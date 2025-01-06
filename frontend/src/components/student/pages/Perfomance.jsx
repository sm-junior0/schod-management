import React, { useState } from 'react';
import { AppealMarksModal } from '../modals/AppealMarksModal';

const performanceData = [
  {
    id: 1,
    lesson: 'Java',
    teacher: 'Ntagungira Ali Rashid',
    cat: '10/10',
    exam: '10/10'
  },
  {
    id: 2,
    lesson: 'Java',
    teacher: 'Ntagungira Ali Rashid',
    cat: '10/10',
    exam: '10/10'
  },
  {
    id: 3,
    lesson: 'Java',
    teacher: 'Ntagungira Ali Rashid',
    cat: '10/10',
    exam: '10/10'
  },
  {
    id: 4,
    lesson: 'Java',
    teacher: 'Ntagungira Ali Rashid',
    cat: '10/10',
    exam: '10/10'
  },
  {
    id: 5,
    lesson: 'Java',
    teacher: 'Ntagungira Ali Rashid',
    cat: '10/10',
    exam: '10/10'
  },
];

export const Performance = () => {
  const [showAppealModal, setShowAppealModal] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState('');

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Performance</h1>
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
              <th className="px-6 py-3 text-left">Lesson</th>
              <th className="px-6 py-3 text-left">Teacher</th>
              <th className="px-6 py-3 text-left">CAT</th>
              <th className="px-6 py-3 text-left">Exam</th>
              <th className="px-6 py-3 text-left">Appeal</th>
            </tr>
          </thead>
          <tbody>
            {performanceData.map((record) => (
              <tr key={record.id} className="border-t">
                <td className="px-6 py-4">{record.id}</td>
                <td className="px-6 py-4">{record.lesson}</td>
                <td className="px-6 py-4">{record.teacher}</td>
                <td className="px-6 py-4">{record.cat}</td>
                <td className="px-6 py-4">{record.exam}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      setSelectedLesson(record.lesson);
                      setShowAppealModal(true);
                    }}
                    className="text-blue-600 hover:bg-blue-50 px-4 py-1 rounded"
                  >
                    Appeal
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAppealModal && (
        <AppealMarksModal
          lesson={selectedLesson}
          onClose={() => setShowAppealModal(false)}
          onSubmit={(data) => {
            console.log('Appeal submitted:', data);
            setShowAppealModal(false);
          }}
        />
      )}
    </div>
  );
};
