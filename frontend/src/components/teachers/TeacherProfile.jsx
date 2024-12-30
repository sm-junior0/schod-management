import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

export const TeacherProfile = ({ teacher, onClose }) => (
  <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-xl p-6">
    <div className="text-right mb-6">
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
        ×
      </button>
    </div>

    <div className="text-center mb-6">
      <img
        src={teacher.avatar}
        alt={teacher.name}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-xl font-semibold">{teacher.name}</h2>
      <p className="text-gray-600">{teacher.subject} teacher</p>
    </div>

    <div className="flex justify-center gap-4 mb-8">
      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Mail size={20} className="text-gray-600" />
      </button>
      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Phone size={20} className="text-gray-600" />
      </button>
      <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <MessageCircle size={20} className="text-gray-600" />
      </button>
    </div>

    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">About</h3>
        <p className="text-sm">
          Experienced teacher specializing in {teacher.subject}. Dedicated to fostering
          a positive learning environment and helping students achieve their full potential.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Age</h3>
          <p>34</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-600 mb-1">Gender</h3>
          <p>{teacher.gender}</p>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          Teachers from the same class
        </h3>
        <div className="flex -space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <img
              key={i}
              src={`https://images.unsplash.com/photo-${i}?w=32&h=32&fit=crop&crop=faces`}
              alt={`Teacher ${i}`}
              className="w-8 h-8 rounded-full border-2 border-white"
            />
          ))}
          <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm text-gray-600">
            +2
          </div>
        </div>
      </div>
    </div>
  </div>
);
