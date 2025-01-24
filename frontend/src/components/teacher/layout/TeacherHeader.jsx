import React from 'react';
import { Search, Bell } from 'lucide-react';
import TProfileDropDown from '../dashboard/TProfileDropDown'; // Import the dropdown component

export const TeacherHeader = () => (
  <div className="flex items-center justify-between p-4 border-b bg-white">
    <div className="relative max-w-md flex-1">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search..."
        className="pl-10 pr-4 py-2 rounded-lg border w-[300px]"
      />
    </div>

    <div className="flex items-center gap-4 relative">
      <button className="p-2 rounded-lg hover:bg-gray-100">
        <Bell size={20} className="text-gray-600" />
      </button>
      <TProfileDropDown /> {/* Add the profile dropdown here */}
    </div>
  </div>
);