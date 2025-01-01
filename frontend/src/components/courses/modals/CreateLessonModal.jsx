import React, { useState } from 'react';
import { X } from 'lucide-react';

export const CreateLessonModal = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    lessonId: '',
    name: '',
    academicYear: '2023-2024',
    weight: 40,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: Date.now().toString(),
      ...formData,
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[400px]">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Create Lesson</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lesson ID</label>
              <input
                type="text"
                value={formData.lessonId}
                onChange={(e) => setFormData({ ...formData, lessonId: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="124123"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lesson name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="C++"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Academic Year</label>
              <input
                type="text"
                value={formData.academicYear}
                onChange={(e) => setFormData({ ...formData, academicYear: e.target.value })}
                className="w-full p-2 border rounded-lg"
                placeholder="2023-2024"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Lesson Weight</label>
              <input
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData({ ...formData, weight: parseInt(e.target.value) })}
                className="w-full p-2 border rounded-lg"
                placeholder="40"
              />
            </div>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Create Lesson
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
