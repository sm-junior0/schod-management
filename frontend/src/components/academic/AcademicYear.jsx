import React, { useState } from "react";
import { PencilIcon, Plus, X } from "lucide-react";

const academicYears = [
  { id: 1, name: "2021-2022", start: "September 2021", end: "June 2022" },
  { id: 2, name: "2022-2023", start: "September 2022", end: "June 2023" },
  { id: 3, name: "2023-2024", start: "September 2023", end: "June 2024" },
];

export const AcademicYear = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState("create");

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedYear(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Academic Year</h1>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 text-blue-600 border border-blue-600 rounded hover:bg-blue-50">
            Export CSV
          </button>
          <button
            onClick={() => {
              setDialogMode("create");
              setIsDialogOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Create Academic Year
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Start
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                End
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {academicYears.map((year) => (
              <tr key={year.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {year.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{year.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {year.start}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{year.end}</td>
                <td className="px-6 py-4 text-right text-sm">
                  <button
                    onClick={() => {
                      setDialogMode("edit");
                      setSelectedYear(year);
                      setIsDialogOpen(true);
                    }}
                    className="text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-2 py-1 rounded"
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {dialogMode === "create"
                  ? "Create Academic Year"
                  : "Edit Academic Year"}
              </h2>
              <button
                onClick={handleDialogClose}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time
                </label>
                <input
                  type="month"
                  defaultValue={dialogMode === "edit" ? "2021-09" : ""}
                  className="w-full p-2 border border-gray-200 rounded focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Time
                </label>
                <input
                  type="month"
                  defaultValue={dialogMode === "edit" ? "2022-06" : ""}
                  className="w-full p-2 border border-gray-200 rounded focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                {dialogMode === "create" ? "Create" : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
