import React, { useState } from 'react';

const SchoolsList = () => {
  const [schools, setSchools] = useState([
    {
      id: 1,
      admin: 'Cordell Edwards',
      name: 'Udemy School',
      email: 'info@udemy.com',
      status: 'Approved',
      timestamp: '2025-01-19 15:36:58',
      logo: 'https://via.placeholder.com/50', // Placeholder logo
    },
    {
      id: 2,
      admin: 'Jane Doe',
      name: 'Harvard School',
      email: 'info@harvard.com',
      status: 'Approved',
      timestamp: '2025-01-20 10:15:30',
      logo: 'https://via.placeholder.com/50', // Placeholder logo
    },
    {
      id: 3,
      admin: 'John Smith',
      name: 'Stanford School',
      email: 'info@stanford.com',
      status: 'Pending',
      timestamp: '2025-01-21 12:45:00',
      logo: 'https://via.placeholder.com/50', // Placeholder logo
    },
    {
      id: 4,
      admin: 'Alice Johnson',
      name: 'MIT School',
      email: 'info@mit.com',
      status: 'Approved',
      timestamp: '2025-01-22 14:30:00',
      logo: 'https://via.placeholder.com/50', // Placeholder logo
    },
    // Add more school objects as needed
  ]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(null);

  const handleDeleteClick = (school) => {
    setSelectedSchool(school);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setSchools(schools.filter((school) => school.id !== selectedSchool.id));
    setShowDeleteModal(false);
  };

  const cancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedSchool(null);
  };

  const handleLockClick = (school) => {
    console.log(`Locking school: ${school.name}`);
    // Implement lock functionality here
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Schools Lists</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Logo</th>
              <th className="py-2 px-4 border-b">School Admin</th>
              <th className="py-2 px-4 border-b">School Name</th>
              <th className="py-2 px-4 border-b">School Email</th>
              <th className="py-2 px-4 border-b">Password</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Creating Time Stamp</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((school) => (
              <tr key={school.id}>
                <td className="py-2 px-4 border-b">
                  <img src={school.logo} alt={`${school.name} Logo`} className="w-12 h-12 rounded" />
                </td>
                <td className="py-2 px-4 border-b">{school.admin}</td>
                <td className="py-2 px-4 border-b">{school.name}</td>
                <td className="py-2 px-4 border-b">{school.email}</td>
                <td className="py-2 px-4 border-b">**********</td>
                <td className="py-2 px-4 border-b">{school.status}</td>
                <td className="py-2 px-4 border-b">{school.timestamp}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500" onClick={() => console.log('Edit', school.id)}>Edit</button>
                  <button className="text-red-500 ml-4" onClick={() => handleDeleteClick(school)}>Delete</button>
                  <button className="text-yellow-500 ml-4" onClick={() => handleLockClick(school)}>🔒 Lock</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-semibold">Are you sure you want to delete this School?</h3>
            <div className="mt-4">
              <button className="bg-red-500 text-white px-4 py-2 rounded mr-2" onClick={confirmDelete}>Delete</button>
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={cancelDelete}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SchoolsList;