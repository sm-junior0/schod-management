import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TProfileDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); 

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setIsOpen(false); 
    switch (option) {
      case 'View Profile':
        navigate('/teacher/classes');
        break;
      case 'Settings':
        navigate('/teacher/classes'); 
        break;
      case 'Logout':
        navigate('/AuthPage')
        console.log('Logging out...');
        break;
      default:
        break;
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="focus:outline-none"
      >
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer" // Profile image
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button
              onClick={() => handleOptionClick('View Profile')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              View Profile
            </button>
            <button
              onClick={() => handleOptionClick('Settings')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Settings
            </button>
            <button
              onClick={() => handleOptionClick('Logout')}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TProfileDropDown;