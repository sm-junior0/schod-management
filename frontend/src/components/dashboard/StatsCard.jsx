import React from 'react';
import PropTypes from 'prop-types';

export const StatsCard = ({ title, value, icon: Icon, color = 'text-gray-600' }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4">
      <div
        className={`p-4 rounded-full bg-opacity-20 ${color === 'text-blue-500' ? 'bg-blue-100' : 'bg-green-100'}`}
      >
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div>
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

StatsCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  color: PropTypes.string,
};
