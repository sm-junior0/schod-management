import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText,
  Bell,
  Users,
  Calendar,
  TrendingUp,
  MessageSquare,
  Settings,
} from 'lucide-react';
import { Logo } from '../../layout/Logo';


const navItems = [
  {
    icon: <LayoutDashboard size={20} />,
    label: 'Dashboard',
    path: '/teacher/dashboard'
  },
  {
    icon: <FileText size={20} />,
    label: 'classes',
    path: '/teacher/classes'
  },
  {
    icon: <MessageSquare size={20} />,
    label: 'Appeals',
    path: '/teacher/appeals'
  },
  {
    icon: <TrendingUp size={20} />,
    label: 'Performance',
    path: '/teacher/performance'
  },
  {
    icon: <Bell size={20} />,
    label: 'Announcements',
    path: '/teacher/announcements'
  },
  {
    icon: <Users size={20} />,
    label: 'Parent Meetings',
    path: '/teacher/parent-meetings'
  },
  { 
    icon: <Bell size={20} />,
    label: 'Notifications',
    path: '/teacher/notifications'
  }
];

export const TeacherSidebar = ({ onLogoClick }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="w-64 bg-blue-600 min-h-screen p-4 flex flex-col">
      <Logo onClick={onLogoClick} />

      <nav className="space-y-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-3 px-4 py-3 text-white w-full rounded-lg transition-colors
              ${isActive(item.path) 
                ? 'bg-white/10' 
                : 'hover:bg-white/5'
              }`}
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>

      <button
        onClick={() => navigate('/teacher/settings')}
        className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 rounded-lg mt-4"
      >
        <Settings size={20} />
        <span className="text-sm">Settings</span>
      </button>

      <div className="mt-4 bg-white/10 rounded-xl p-4 text-center">
        <div className="w-16 h-16 mx-auto mb-3">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces" 
            alt="Profile" 
            className="rounded-full" 
          />
        </div>
        <div className="text-white text-sm font-medium">Anna Karin</div>
        <div className="text-white/70 text-xs">annakarin@gmail.com</div>
      </div>
    </div>
  );
};
