import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { StudentSidebar } from './StudentSidebar';
import { StudentHeader } from './StudentHeader';

export const StudentLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <StudentSidebar onLogoClick={() => navigate('/student/dashboard')} />
      <div className="flex-1">
        <StudentHeader />
        <Outlet />
      </div>
    </div>
  );
};
