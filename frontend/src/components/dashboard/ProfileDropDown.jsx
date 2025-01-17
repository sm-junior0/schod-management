import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Settings, LogOut, User } from "lucide-react";

export const ProfileDropdown = ({
  imageUrl,
  onSettingsClick,
  onProfileClick,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleItemClick = (callback) => {
    setIsOpen(false);
    callback();
  };

  const handleLogout = () => {
    // Clear any stored tokens/auth data
    localStorage.removeItem("token");
    // Navigate to auth page
    navigate("/");
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg"
      >
        <img src={imageUrl} alt="Profile" className="w-8 h-8 rounded-full" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 py-1">
          <div className="px-4 py-3 border-b border-gray-100">
            <p className="text-sm font-medium text-gray-800">Anna Karin</p>
            <p className="text-xs text-gray-500">anna@email.com</p>
          </div>
          <div className="py-1">
            <button
              type="button"
              onClick={() => handleItemClick(onProfileClick)}
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <User size={16} />
              Profile
            </button>
            <button
              type="button"
              onClick={() => handleItemClick(onSettingsClick)}
              className="w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2"
            >
              <Settings size={16} />
              Account Settings
            </button>
            <button
              type="button"
              onClick={() => handleItemClick(handleLogout)}
              className="w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2"
            >
              <LogOut size={16} />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

ProfileDropdown.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  onSettingsClick: PropTypes.func.isRequired,
  onProfileClick: PropTypes.func.isRequired,
};
