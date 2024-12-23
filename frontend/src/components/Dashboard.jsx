import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-lg font-bold">Dashboard</h1>
      </header>
      <main className="p-8">
        <h2 className="text-2xl font-bold mb-4">Welcome to Schod Management App</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">Total Students</h3>
            <p className="text-2xl">150</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">Teachers</h3>
            <p className="text-2xl">20</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">Classes</h3>
            <p className="text-2xl">10</p>
          </div>
          <div className="bg-white p-4 shadow rounded">
            <h3 className="text-lg font-semibold">Events</h3>
            <p className="text-2xl">5</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
