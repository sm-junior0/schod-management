import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { Search, Bell } from "lucide-react";
import { SaProfileDropdown } from "./SaProfileDropDown";

export const SaHeader = () => {
  const navigate = useNavigate();

  const handleSettingsClick = () => {
    navigate("/sadmin/settings");
  };

  const handleProfileClick = () => {
    navigate("/sadmin/profile");
  };

  return (
    <div className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative max-w-md flex-1">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="text-blue-600 px-4 py-2 rounded-lg border border-blue-600 hover:bg-blue-50"
        >
          Add new Admission
        </button>
        <button
          type="button"
          className="p-2 rounded-lg hover:bg-gray-100"
          aria-label="Notifications"
        >
          <Bell size={20} className="text-gray-600" />
        </button>
        <SaProfileDropdown
          imageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces"
          onSettingsClick={handleSettingsClick}
          onProfileClick={handleProfileClick}
        />
      </div>
    </div>
  );
};

SaHeader.propTypes = {
  onSettingsClick: PropTypes.func,
  onProfileClick: PropTypes.func,
};
