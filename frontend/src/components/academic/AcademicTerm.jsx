import React, { useState } from "react";
import { PencilIcon, Plus, X } from "lucide-react";

const academicTerms = [
  {
    id: 1,
    name: "First Term",
    academicYear: "2021-2022",
    start: "September 2021",
    end: "December 2021",
  },
  {
    id: 2,
    name: "Second Term",
    academicYear: "2021-2022",
    start: "January 2022",
    end: "March 2022",
  },
  {
    id: 3,
    name: "Third Term",
    academicYear: "2021-2022",
    start: "April 2022",
    end: "June 2022",
  },
];

export const AcademicTerm = () => {
  const [selectedTerm, setSelectedTerm] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogMode, setDialogMode] = useState("create"); 

  const handleDialogClose = () => {
    setIsDialogOpen(false);
    setSelectedTerm(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Academic Term</h1>
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
            Create Academic Term
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Academic Year
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Start
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                End
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {academicTerms.map((term) => (
              <tr key={term.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">
                  {term.id}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{term.name}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {term.academicYear}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {term.start}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{term.end}</td>
                <td className="px-6 py-4 text-right text-sm">
                  <button
                    onClick={() => {
                      setDialogMode("edit");
                      setSelectedTerm(term);
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
                  ? "Create Academic Term"
                  : "Edit Academic Term"}
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
                  Academic Year
                </label>
                <select
                  defaultValue={
                    dialogMode === "edit" ? selectedTerm.academicYear : ""
                  }
                  className="w-full p-2 border border-gray-200 rounded focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Select academic year</option>
                  <option value="2021-2022">2021-2022</option>
                  <option value="2022-2023">2022-2023</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Term Name
                </label>
                <input
                  type="text"
                  defaultValue={dialogMode === "edit" ? selectedTerm.name : ""}
                  placeholder="e.g., First Term"
                  className="w-full p-2 border border-gray-200 rounded focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time
                </label>
                <input
                  type="month"
                  defaultValue={
                    dialogMode === "edit"
                      ? selectedTerm.start.split(" ")[0]
                      : ""
                  }
                  className="w-full p-2 border border-gray-200 rounded focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Time
                </label>
                <input
                  type="month"
                  defaultValue={
                    dialogMode === "edit" ? selectedTerm.end.split(" ")[0] : ""
                  }
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
