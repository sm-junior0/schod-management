import React from 'react';
import { X } from 'lucide-react';

export const DeleteLessonModal = ({ lesson, onClose, onConfirm }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg w-[400px]">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Delete Lesson</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-center mb-6">
            Are you sure you want to delete <strong>{lesson.name}</strong> from RCA's lessons' list?
          </p>

          <div className="flex justify-center gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={onConfirm}
              className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
