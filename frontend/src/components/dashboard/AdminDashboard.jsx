import React from 'react';
import { 
  Users, 
  GraduationCap, 
  CreditCard, 
  BookOpen, 
  Settings
} from 'lucide-react';

export const AdminDashboard = () => {
  const actionItems = [
    {
      title: 'Add other admins',
      description: 'Add and manage administrative staff for your school.',
    },
    {
      title: 'Add classes',
      description: 'Create and organize new classes for your school.',
    },
    {
      title: 'Add teachers',
      description: 'Recruit and manage teaching staff members.',
    },
    {
      title: 'Add Students',
      description: 'Register and manage student enrollments.',
    },
  ];

  return (
    <main className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome to your dashboard, Udemy school
        </h1>
        <p className="text-gray-500">School/udemy/dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {actionItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-500 mb-4">{item.description}</p>
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
              Add
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}; 