import React from "react";
import { MoreVertical } from "lucide-react";

const schools = [
  {
    id: 1,
    logo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=faces",
    adminName: "Cordell Edwards",
    schoolName: "Udemy School",
    email: "info@udemy.com",
    status: "Approved",
  },
  {
    id: 2,
    logo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=faces",
    adminName: "Sarah Wilson",
    schoolName: "Coursera Academy",
    email: "contact@coursera.edu",
    status: "Pending",
  },
  {
    id: 3,
    logo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces",
    adminName: "Michael Chen",
    schoolName: "EdX Institute",
    email: "admin@edx.org",
    status: "Approved",
  },
  {
    id: 4,
    logo: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=40&h=40&fit=crop&crop=faces",
    adminName: "Jessica Brown",
    schoolName: "Khan School",
    email: "info@khan.edu",
    status: "Approved",
  },
  {
    id: 5,
    logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces",
    adminName: "David Miller",
    schoolName: "Pluralsight Academy",
    email: "contact@pluralsight.com",
    status: "Pending",
  },
];

export const SchoolsTable = () => (
  <div className="bg-white rounded-xl shadow-sm border border-gray-100">
    <div className="p-4 border-b border-gray-100">
      <h2 className="text-lg font-semibold">Recent Joined Schools</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              Logo
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              School Admin
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              School Name
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              School Email
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
              Status
            </th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-600"></th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school) => (
            <tr key={school.id} className="border-t border-gray-100">
              <td className="px-4 py-3">
                <img
                  src={school.logo}
                  alt={`${school.schoolName} logo`}
                  className="w-8 h-8 rounded-full"
                />
              </td>
              <td className="px-4 py-3 text-sm">{school.adminName}</td>
              <td className="px-4 py-3 text-sm">{school.schoolName}</td>
              <td className="px-4 py-3 text-sm">{school.email}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                  ${
                    school.status === "Approved"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {school.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button
                  type="button"
                  className="p-1 hover:bg-gray-100 rounded"
                  aria-label="More options"
                >
                  <MoreVertical size={16} className="text-gray-400" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
