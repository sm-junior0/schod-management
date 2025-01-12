import React from 'react';
import { GraduationCap } from 'lucide-react';

export const Logo = ({ onClick }) => (
  <div 
    className="flex items-center gap-2 px-4 mb-8 cursor-pointer" 
    onClick={onClick}
  >
    <div className="flex gap-1">
      <div className="w-4 h-4 rounded-full bg-yellow-400" />
      <div className="w-4 h-4 rounded-full bg-red-500" />
    </div>
    <span className="text-white font-bold">Schod Management</span>
  </div>
);
