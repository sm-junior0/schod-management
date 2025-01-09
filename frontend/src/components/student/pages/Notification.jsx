import React from 'react';

const notifications = [
  {
    id: 1,
    message: 'Report Cards to be released by 30/1/2023',
    date: '30/1/2023',
    time: '10:00'
  },
  {
    id: 2,
    message: 'Report Cards to be released by 30/1/2023',
    date: '30/1/2023',
    time: '10:00'
  },
  {
    id: 3,
    message: 'Report Cards to be released by 30/1/2023',
    date: '30/1/2023',
    time: '10:00'
  },
  {
    id: 4,
    message: 'Report Cards to be released by 30/1/2023',
    date: '30/1/2023',
    time: '10:00'
  }
];

export const Notifications = () => {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Notifications</h1>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id} 
            className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:border-blue-500 transition-colors"
          >
            <div className="flex justify-between items-start">
              <p className="text-gray-800">{notification.message}</p>
              <div className="text-sm text-gray-500">
                <div>{notification.date}</div>
                <div>{notification.time}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
