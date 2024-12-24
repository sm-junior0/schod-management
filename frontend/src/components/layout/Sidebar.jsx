import React from 'react';
import { 
  LayoutDashboard, 
  School, 
  Users, 
  UserCog,
  CreditCard,
  BookOpen,
  Settings
} from 'lucide-react';
import { Logo } from './Logo';

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div 
    className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors
    ${active ? 'bg-white bg-opacity-10 text-white' : 'text-white/70 hover:bg-white/5'}`}
    onClick={onClick}
  >
    {icon}
    <span className="text-sm font-medium">{label}</span>
  </div>
);

export const Sidebar = ({ onLogoClick }) => (
  <div className="w-64 bg-blue-600 min-h-screen p-4 flex flex-col">
    <Logo onClick={onLogoClick} />

    <nav className="space-y-1 flex-1">
      <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active onClick={onLogoClick} />
      <SidebarItem icon={<School size={20} />} label="Schools" />
      <SidebarItem icon={<Users size={20} />} label="Students" />
      <SidebarItem icon={<UserCog size={20} />} label="Teachers" />
      <SidebarItem icon={<CreditCard size={20} />} label="Payment" />
      <SidebarItem icon={<BookOpen size={20} />} label="Courses" />
      <SidebarItem icon={<Settings size={20} />} label="Settings" />
    </nav>

    <div className="mt-auto">
      <div className="bg-white/10 rounded-xl p-4 text-center">
        <div className="w-16 h-16 mx-auto mb-3">
          <img 
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=faces" 
            alt="Profile" 
            className="rounded-full" 
          />
        </div>
        <div className="text-white text-sm font-medium">Anna Karin</div>
        <div className="text-white/70 text-xs">anna@email.com</div>
      </div>
    </div>
  </div>
);
