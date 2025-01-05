import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, FileText, Bell, Users, Settings } from 'lucide-react';
import { Logo } from '../../layout/Logo';

export const StudentSidebar = ({ onLogoClick }) => {
  const navigate = useNavigate();

  return (
    <div className="w-64 bg-blue-600 min-h-screen p-4 flex flex-col">
      <Logo onClick={onLogoClick} />
      <nav className="space-y-1 flex-1">
        <button
          onClick={() => navigate('/student/dashboard')}
          className="flex items-center gap-3 px-4 py-3 text-white w-full hover:bg-white/10 rounded-lg"
        >
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </button>
        <button
          onClick={() => navigate('/student/report-cards')}
          className="flex items-center gap-3 px-4 py-3 text-white w-full hover:bg-white/10 rounded-lg"
        >
          <FileText size={20} />
          <span>Report Cards</span>
        </button>
        <button
          onClick={() => navigate('/student/announcements')}
          className="flex items-center gap-3 px-4 py-3 text-white w-full hover:bg-white/10 rounded-lg"
        >
          <Bell size={20} />
          <span>Announcements</span>
        </button>
        <button
          onClick={() => navigate('/student/parent-meetings')}
          className="flex items-center gap-3 px-4 py-3 text-white w-full hover:bg-white/10 rounded-lg"
        >
          <Users size={20} />
          <span>Parent Meetings</span>
        </button>
        
      </nav>
      <div 
        className="text-white/70 hover:bg-white/5 py-2 px-4 rounded-lg cursor-pointer text-sm"
        onClick={() => navigate('/dashboard/settings')} 
      >
        Settings
      </div>
    </div>
  );
};
