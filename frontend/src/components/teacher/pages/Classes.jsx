import React, { useState } from "react";
import { Download, Upload } from "lucide-react";

const classes = [
  { id: "year1", name: "Year 1", color: "bg-blue-500" },
  { id: "year2", name: "Year 2", color: "bg-purple-100" },
  { id: "year3", name: "Year 3", color: "bg-blue-500" },
  { id: "unclassified", name: "Unclassified", color: "bg-purple-100" },
];

const students = [
  {
    id: 1,
    name: "Burigo Jabes",
    email: "peaceamizero@gmail.com",
    marks: { term1: 30, term2: 30, term3: 30 },
  },
  {
    id: 1,
    name: "Burigo Jabes",
    email: "peaceamizero@gmail.com",
    marks: { term1: 30, term2: 30, term3: 30 },
  },
  {
    id: 1,
    name: "Burigo Jabes",
    email: "peaceamizero@gmail.com",
    marks: { term1: 30, term2: 30, term3: 30 },
  },
  {
    id: 1,
    name: "Burigo Jabes",
    email: "peaceamizero@gmail.com",
    marks: { term1: 30, term2: 30, term3: 30 },
  },
  {
    id: 1,
    name: "Burigo Jabes",
    email: "peaceamizero@gmail.com",
    marks: { term1: 30, term2: 30, term3: 30 },
  },
  {
    id: 1,
    name: "Burigo Jabes",
    email: "peaceamizero@gmail.com",
    marks: { term1: 30, term2: 30, term3: 30 },
  },
  {
    id: 1,
    name: "Burigo Jabes",
    email: "peaceamizero@gmail.com",
    marks: { term1: 30, term2: 30, term3: 30 },
  },
  {
    id: 1,
    name: "Burigo Jabes",
    email: "peaceamizero@gmail.com",
    marks: { term1: 30, term2: 30, term3: 30 },
  },
];

export const Classes = () => {
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("A");
  const [showDeductModal, setShowDeductModal] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const DeductMarksModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Edit Deducted Marks</h3>
          <button
            onClick={() => setShowDeductModal(false)}
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
              value="Niyonsenga Valens"
              disabled
              className="w-full p-2 bg-gray-100 rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">
              Deducted Marks
            </label>
            <input
              type="number"
              defaultValue={4}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Reason</label>
            <textarea className="w-full p-2 border rounded h-24" />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded"
            onClick={() => setShowDeductModal(false)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Classes</h2>
      <div className="grid grid-cols-4 gap-4 mb-8">
        {classes.map((cls) => (
          <button
            key={cls.id}
            onClick={() => setSelectedClass(cls.id)}
            className={`${cls.color} p-6 rounded-lg text-center ${
              selectedClass === cls.id ? "ring-2 ring-blue-600" : ""
            }`}
          >
            {cls.name}
          </button>
        ))}
      </div>

      {selectedClass && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-2">
              {["A", "B", "C", "D"].map((section) => (
                <button
                  key={section}
                  onClick={() => setSelectedSection(section)}
                  className={`px-4 py-2 rounded ${
                    selectedSection === section
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            <div className="flex space-x-2">
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded">
                <Download className="h-5 w-5" />
                <span>Download Excel</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded">
                <Upload className="h-5 w-5" />
                <span>Upload Excel for all students</span>
              </button>
            </div>
          </div>

          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-2">#</th>
                <th className="text-left py-2">Student Name</th>
                <th className="text-left py-2">Email</th>
                <th className="text-left py-2">Term 1</th>
                <th className="text-left py-2">Term 2</th>
                <th className="text-left py-2">Term 3</th>
                <th className="text-left py-2">Deduct</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id} className="border-b">
                  <td className="py-2">{student.id}</td>
                  <td className="py-2">{student.name}</td>
                  <td className="py-2">{student.email}</td>
                  <td className="py-2">{student.marks.term1}/40</td>
                  <td className="py-2">{student.marks.term2}/40</td>
                  <td className="py-2">{student.marks.term3}/40</td>
                  <td className="py-2">
                    <button
                      onClick={() => {
                        setSelectedStudent(student);
                        setShowDeductModal(true);
                      }}
                      className="bg-blue-100 text-blue-500 px-3 py-1 rounded"
                    >
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {showDeductModal && <DeductMarksModal />}
    </div>
  );
};
