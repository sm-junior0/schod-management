import React, { useState } from 'react';
import { X } from 'lucide-react';

const AVAILABLE_LESSONS = [
  { id: 'java', name: 'JAVA' },
  { id: 'cpp', name: 'C++' },
  { id: 'c', name: 'C' },
  { id: 'php', name: 'PHP' },
];

export const AssignLessonsModal = ({ onClose, onSubmit, className }) => {
  const [selectedLessons, setSelectedLessons] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedLessons);
    onClose();
  };

  const toggleLesson = (lessonId) => {
    setSelectedLessons((prev) =>
      prev.includes(lessonId)
        ? prev.filter((id) => id !== lessonId)
        : [...prev, lessonId]
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[400px]">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Assign Lessons</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Class Name
            </label>
            <input
              type="text"
              value={className}
              disabled
              className="w-full p-2 border rounded-lg bg-gray-50"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Lessons
            </label>
            <div className="flex flex-wrap gap-2">
              {AVAILABLE_LESSONS.map((lesson) => (
                <button
                  key={lesson.id}
                  type="button"
                  onClick={() => toggleLesson(lesson.id)}
                  className={`px-3 py-1 rounded-full border ${
                    selectedLessons.includes(lesson.id)
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 hover:border-blue-600'
                  }`}
                >
                  {lesson.name}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Assign Lessons
          </button>
        </form>
      </div>
    </div>
  );
};
