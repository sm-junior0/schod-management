import React, { useState } from 'react';
import { EmptyState } from './EmptyState';
import { StudentsList } from './StudentsList';
import { StudentDetails } from './StudentDetails';
import { ClassManagement } from './ClassManagement';
import { X } from 'lucide-react'; 

const mockStudents = [
  {
    id: "703703",
    name: "Eneh Mercy",
    email: "michelle.rivera@example.com",
    class: "JSS 2",
    gender: "Female",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=96&h=96&fit=crop&crop=faces",
  },
  {
    id: "877037",
    name: "Marvin McKinney",
    email: "kenzi.lawson@example.com",
    class: "JSS 3",
    gender: "Female",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=96&h=96&fit=crop&crop=faces",
  },
  {
    id: "370357",
    name: "Brooklyn Simmons",
    email: "nathan.roberts@example.com",
    class: "SS 3",
    gender: "Female",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BrooklynSimmons",
  },
  {
    id: "870316",
    name: "Dianne Russell",
    email: "felicia.reid@example.com",
    class: "SS 3",
    gender: "Male",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DianneRussell",
  },
  {
    id: "547030",
    name: "Cody Fisher",
    email: "tim.jennings@example.com",
    class: "SS 3",
    gender: "Female",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=CodyFisher",
  },
  {
    id: "270374",
    name: "Guy Hawkins",
    email: "alma.lawson@example.com",
    class: "JSS 1",
    gender: "Male",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuyHawkins",
  },
  {
    id: "970322",
    name: "Devon Lane",
    email: "debra.holt@example.com",
    class: "JSS 3",
    gender: "Male",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevonLane",
  },
  {
    id: "570336",
    name: "Ronald Richards",
    email: "deanna.curtis@example.com",
    class: "JSS 4",
    gender: "Male",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RonaldRichards",
  },
  {
    id: "157034",
    name: "Bessie Cooper",
    email: "georgia.young@example.com",
    class: "JSS 4",
    gender: "Female",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BessieCooper",
  },
  {
    id: "570356",
    name: "Eleanor Pena",
    email: "jackson.graham@example.com",
    class: "JSS 5",
    gender: "Female",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=EleanorPena",
  },
  {
    id: "177037",
    name: "Savannah Nguyen",
    email: "dolores.chambers@example.com",
    class: "JSS 1",
    gender: "Female",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SavannahNguyen",
  },
];

export const StudentsPage = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [students, setStudents] = useState(mockStudents);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [view, setView] = useState('list');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    class: '',
    gender: '',
    phone: '',
    password: '',
  });

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Students</h1>
        <div className="flex items-center gap-4">
          <button>
            Export csv
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Student
          </button>
        </div>
      </div>

      {students.length === 0 ? (
        <EmptyState onAddStudent={() => setShowAddModal(true)} />
      ) : view === 'list' ? (
        <StudentsList students={students} onSelectStudent={setSelectedStudent} />
      ) : (
        <ClassManagement />
      )}

      {selectedStudent && (
        <StudentDetails
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-xl w-full max-w-2xl">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-xl font-semibold">Add New Student</h2>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">
                <X size={24} />
              </button>
            </div>

            <div className="p-6">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const newStudent = {
                    id: Math.random().toString(36).substr(2, 9),
                    name: formData.name,
                    email: formData.email,
                    class: formData.class,
                    gender: formData.gender,
                    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${formData.name}`
                  };
                  handleAddStudent(newStudent);
                  setShowAddModal(false);
                  setFormData({
                    name: '',
                    email: '',
                    class: '',
                    gender: '',
                    phone: '',
                    password: '',
                  });
                }}
              >
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                    <select
                      value={formData.class}
                      onChange={(e) => setFormData({ ...formData, class: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg"
                      required
                    >
                      <option value="">Select class</option>
                      <option value="JSS 1">JSS 1</option>
                      <option value="JSS 2">JSS 2</option>
                      <option value="JSS 3">JSS 3</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg"
                      required
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      className="w-full px-3 py-2 border rounded-lg"
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-4">
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200"
                    onClick={() => setShowAddModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Add Student
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentsPage;
