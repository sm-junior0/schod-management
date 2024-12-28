import React from 'react';
import  Sidebar  from '../layout/Sidebar';
import { Header } from '../dashboard/Header';
import { ClaimsChart } from '../dashboard/ClaimsChart';
import { SchoolsStats } from '../dashboard/SchoolsStats';

export const ProfilePage = ({ onBack }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar onLogoClick={onBack} />
      
      <div className="flex-1">
        <Header 
          onSettingsClick={onBack}
          onProfileClick={onBack}
        />
        
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-800">Profile</h1>
            <p className="text-gray-600">View and manage your profile</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-center mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=128&h=128&fit=crop&crop=faces"
                    alt="Profile"
                    className="w-32 h-32 rounded-full mx-auto mb-4"
                  />
                  <h2 className="text-xl font-semibold">Anna Karin</h2>
                  <p className="text-gray-600">Super Admin</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-600">Email</label>
                    <p className="font-medium">anna@email.com</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Role</label>
                    <p className="font-medium">Administrator</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Member Since</label>
                    <p className="font-medium">January 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-6">
                <ClaimsChart />
                <SchoolsStats />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
