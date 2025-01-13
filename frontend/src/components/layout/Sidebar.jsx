import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  School, 
  Users, 
  UserCog,
  CreditCard,
  BookOpen,
  Settings,
  ChevronDown
} from 'lucide-react';
import { Logo } from './Logo';

const SidebarItem = ({ 
  icon, 
  label, 
  active, 
  onClick, 
  hasDropdown, 
  isOpen,
  children 
}) => (
  <div>
    <div 
      className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors
      ${active ? 'bg-white bg-opacity-10 text-white' : 'text-white/70 hover:bg-white/5'}`}
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium flex-1">{label}</span>
      {hasDropdown && (
        <ChevronDown 
          size={16} 
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      )}
    </div>
    {isOpen && children && (
      <div className="ml-6 space-y-1 mt-1">
        {children}
      </div>
    )}
  </div>
);

const Sidebar = ({ onLogoClick = () => {} }) => {
  const navigate = useNavigate();
  const [isStudentsOpen, setIsStudentsOpen] = useState(false);

  return (
    <div className="w-64 bg-blue-600 min-h-screen p-4 flex flex-col">
      <Logo onClick={onLogoClick} />

      <nav className="space-y-1 flex-1">
        <SidebarItem 
          icon={<LayoutDashboard size={20} />} 
          label="Dashboard" 
          active 
          onClick={() => navigate('/dashboard')} 
        />
        <SidebarItem 
          icon={<School size={20} />} 
          label="Schools" 
          onClick={() => navigate('/dashboard/schools')} 
        />
        <SidebarItem 
          icon={<Users size={20} />} 
          label="Students" 
          hasDropdown
          isOpen={isStudentsOpen}
          onClick={() => setIsStudentsOpen(!isStudentsOpen)}
        >
          <div 
            className="text-white/70 hover:bg-white/5 py-2 px-4 rounded-lg cursor-pointer text-sm"
            onClick={() => navigate('/students')}
          >
            All Students
          </div>
          <div 
            className="text-white/70 hover:bg-white/5 py-2 px-4 rounded-lg cursor-pointer text-sm"
            onClick={() => navigate('/dashboard/students/admission')}
          >
            Admission Form
          </div>
          <div 
            className="text-white/70 hover:bg-white/5 py-2 px-4 rounded-lg cursor-pointer text-sm"
            onClick={() => navigate('/dashboard/students/promotion')}
          >
            Student Promotion
          </div>
          <div 
            className="text-white/70 hover:bg-white/5 py-2 px-4 rounded-lg cursor-pointer text-sm"
            onClick={() => navigate('/dashboard/students/class')}
          >
            Class
          </div>
        </SidebarItem>
        <SidebarItem 
          icon={<UserCog size={20} />} 
          label="Teachers" 
          onClick={() => navigate('/dashboard/teachers')} 
        />
        <SidebarItem 
          icon={<CreditCard size={20} />} 
          label="Payment" 
          onClick={() => navigate('/dashboard/payment')} 
        />
        <SidebarItem 
          icon={<BookOpen size={20} />} 
          label="Courses" 
          onClick={() => navigate('/dashboard/courses')} 
        />
        <SidebarItem 
          icon={<Settings size={20} />} 
          label="Settings" 
          onClick={() => navigate('/dashboard/settings')} 
        />
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
};

export default Sidebar;