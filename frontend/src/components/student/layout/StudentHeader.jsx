import React from 'react';
import { Search, Bell } from 'lucide-react';

export const StudentHeader = () => (
  <div className="flex items-center justify-between p-4 border-b bg-white">
    <div className="relative max-w-md flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 rounded-lg border w-[300px]"
      />
    </div>

    <div className="flex items-center gap-4">
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <Bell size={20} className="text-gray-600" />
      </button>
      <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
        alt="Profile"
        className="w-8 h-8 rounded-full"
      />
    </div>
  </div>
);
