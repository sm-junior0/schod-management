import React from 'react';
import PropTypes from 'prop-types';

const dummyData = [
  { id: 1, name: 'School A', enrollments: 120, location: 'City A' },
  { id: 2, name: 'School B', enrollments: 90, location: 'City B' },
  { id: 3, name: 'School C', enrollments: 150, location: 'City C' },
  { id: 4, name: 'School D', enrollments: 200, location: 'City D' },
  { id: 5, name: 'School E', enrollments: 80, location: 'City E' },
];

export const SchoolsTable = ({ data = dummyData }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">School Details</h2>
      <table className="w-full text-left text-gray-600">
        <thead>
          <tr className="bg-gray-50 text-gray-500 uppercase text-sm">
            <th className="px-4 py-2">School Name</th>
            <th className="px-4 py-2">Enrollments</th>
            <th className="px-4 py-2">Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((school) => (
            <tr key={school.id} className="hover:bg-gray-50">
              <td className="px-4 py-2">{school.name}</td>
              <td className="px-4 py-2">{school.enrollments}</td>
              <td className="px-4 py-2">{school.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

SchoolsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      enrollments: PropTypes.number.isRequired,
      location: PropTypes.string.isRequired,
    })
  ),
};
