import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const appeals = [
  { id: "04323", studentName: "Ntagungira Ali Rashid", status: "Pending" },
  { id: "04323", studentName: "Ntagungira Ali Rashid", status: "Pending" },
  { id: "04323", studentName: "Ntagungira Ali Rashid", status: "Pending" },
  { id: "04323", studentName: "Ntagungira Ali Rashid", status: "Pending" },
  { id: "04323", studentName: "Ntagungira Ali Rashid", status: "Pending" },
];

export const AppealsTeacher = () => {
  const [showAppealModal, setShowAppealModal] = useState(false);
  const [selectedAppeal, setSelectedAppeal] = useState(null);

  const AppealModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-[500px]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Appeal Description</h3>
          <button
            onClick={() => setShowAppealModal(false)}
            className="text-gray-500"
          >
            ×
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600">
              Student's Name
            </label>
            <input
              type="text"
              value="Java"
              disabled
              className="w-full p-2 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Marks</label>
            <input
              type="number"
              value="30"
              disabled
              className="w-full p-2 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">
              Reason for appeal
            </label>
            <textarea
              disabled
              className="w-full p-2 bg-gray-100 rounded h-24"
            />
          </div>
          <div className="flex space-x-2">
            <button
              className="flex-1 bg-red-500 text-white py-2 rounded"
              onClick={() => setShowAppealModal(false)}
            >
              Reject
            </button>
            <button
              className="flex-1 bg-blue-500 text-white py-2 rounded"
              onClick={() => setShowAppealModal(false)}
            >
              View
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Student Appeals</h2>
          <div className="flex space-x-4">
            <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center space-x-2">
              <span>Filter By Teacher</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded flex items-center space-x-2">
              <span>Filter By Academic Year</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex space-x-2 mb-6">
          {["All", "Pending", "Approved", "Rejected"].map((status) => (
            <button
              key={status}
              className={`px-4 py-2 rounded ${
                status === "Pending" ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">#</th>
              <th className="text-left py-2">Appeal ID</th>
              <th className="text-left py-2">Student Name</th>
              <th className="text-left py-2">View</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {appeals.map((appeal, index) => (
              <tr key={index} className="border-b">
                <td className="py-2">{index + 1}</td>
                <td className="py-2">{appeal.id}</td>
                <td className="py-2">{appeal.studentName}</td>
                <td className="py-2">
                  <button
                    onClick={() => {
                      setSelectedAppeal(appeal);
                      setShowAppealModal(true);
                    }}
                    className="bg-blue-100 text-blue-500 px-3 py-1 rounded"
                  >
                    View
                  </button>
                </td>
                <td className="py-2">
                  <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded">
                    {appeal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showAppealModal && <AppealModal />}
    </div>
  );
};
