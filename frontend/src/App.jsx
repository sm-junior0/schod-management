import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthPage } from './components/AuthPage';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/dashboard/Header';
import { StatsCard } from './components/dashboard/StatsCard';
import { SchoolsTable } from './components/dashboard/SchoolsTable';
import { ClaimsChart } from './components/dashboard/ClaimsChart';
import { SchoolsStats } from './components/dashboard/SchoolsStats';
import { AccountSettings } from './components/settings/AccountSettings';
import { ProfilePage } from './components/profile/ProfilePage';
import { School, Users, DollarSign, UserCircle } from 'lucide-react';

const DashboardHome = () => (
  <div className="p-6">
    <div className="mb-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-1">Welcome Back, Super Admin!</h1>
      <p className="text-gray-600">Enjoy World's No.1 Education Software</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <StatsCard title="Total Schools" value="25.1k" change={15} icon={<School className="text-blue-600" />} />
      <StatsCard title="Total Students" value="2,435k" change={-1.9} icon={<Users className="text-blue-600" />} />
      <StatsCard title="Total Income" value="3.5M" change={15} icon={<DollarSign className="text-blue-600" />} />
      <StatsCard title="Total Users" value="10.5M" change={15} icon={<UserCircle className="text-blue-600" />} />
    </div>

    <SchoolsTable />

    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
      <div className="lg:col-span-2">
        <ClaimsChart />
      </div>
      <SchoolsStats />
    </div>
  </div>
);

const DashboardLayout = ({ children }) => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <div className="flex-1">
      <Header />
      <main>{children}</main>
    </div>
  </div>
);

const Dashboard = () => (
  <DashboardLayout>
    <DashboardHome />
  </DashboardLayout>
);

const Settings = () => (
  <DashboardLayout>
    <AccountSettings />
  </DashboardLayout>
);

const Profile = () => (
  <DashboardLayout>
    <ProfilePage />
  </DashboardLayout>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
};

export default App;
