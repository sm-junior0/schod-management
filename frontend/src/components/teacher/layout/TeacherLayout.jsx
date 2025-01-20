import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { TeacherSidebar } from './TeacherSidebar';
import { TeacherHeader } from './TeacherHeader';

export const TeacherLayout = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-50">
      <TeacherSidebar onLogoClick={() => navigate('/teacher/dashboard')} />
      <div className="flex-1">
        <TeacherHeader />
        <Outlet />
      </div>
    </div>
  );
};
