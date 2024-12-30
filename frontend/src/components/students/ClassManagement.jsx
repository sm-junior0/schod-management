import React, { useState } from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';
import { CreateClassModal } from './modals/CreateClassModal';
import { AssignLessonsModal } from './modals/AssignLessonsModal';
import { AssignStudentsModal } from './modals/AssignStudentsModal';
import { DeleteClassModal } from './modals/DeleteClassModal';
import { EditClassModal } from './modals/EditClassModal';

const mockClasses = Array(8).fill(null).map((_, index) => ({
  id: index + 1,
  name: 'Year 1 A',
  headTeacher: 'Alice Mukabaranga',
  studentCount: 30,
}));

export const ClassManagement = () => {
  const [classes, setClasses] = useState(mockClasses);
  const [selectedClass, setSelectedClass] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showAssignLessonsModal, setShowAssignLessonsModal] = useState(false);
  const [showAssignStudentsModal, setShowAssignStudentsModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button className="text-gray-600 px-4 py-2 rounded-lg border hover:bg-gray-50">
            Add filter
          </button>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for class here"
              className="pl-4 pr-4 py-2 rounded-lg border w-[300px]"
            />
          </div>
        </div>
        <button 
          onClick={() => setShowCreateModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Class
        </button>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Class Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Headteacher Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Student No</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Students</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Assign Students</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Assign Lessons</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Lessons</th>
              <th className="px-6 py-3 text-center text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {classes.map((classItem) => (
              <tr key={classItem.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">{classItem.id}</td>
                <td className="px-6 py-4">{classItem.name}</td>
                <td className="px-6 py-4">{classItem.headTeacher}</td>
                <td className="px-6 py-4">{classItem.studentCount}</td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Eye size={16} className="text-gray-600" />
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button 
                    onClick={() => {
                      setSelectedClass(classItem);
                      setShowAssignStudentsModal(true);
                    }}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Pencil size={16} className="text-gray-600" />
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button 
                    onClick={() => {
                      setSelectedClass(classItem);
                      setShowAssignLessonsModal(true);
                    }}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <Pencil size={16} className="text-gray-600" />
                  </button>
                </td>
                <td className="px-6 py-4 text-center">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <Eye size={16} className="text-gray-600" />
                  </button>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button 
                      onClick={() => {
                        setSelectedClass(classItem);
                        setShowEditModal(true);
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Pencil size={16} className="text-gray-600" />
                    </button>
                    <button 
                      onClick={() => {
                        setSelectedClass(classItem);
                        setShowDeleteModal(true);
                      }}
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Trash2 size={16} className="text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showCreateModal && (
        <CreateClassModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={(data) => {
            setClasses([
              ...classes,
              {
                id: classes.length + 1,
                name: data.className,
                headTeacher: 'New Teacher',
                studentCount: data.studentCount,
              },
            ]);
            setShowCreateModal(false);
          }}
        />
      )}

      {showAssignLessonsModal && selectedClass && (
        <AssignLessonsModal
          className={selectedClass.name}
          onClose={() => {
            setShowAssignLessonsModal(false);
            setSelectedClass(null);
          }}
          onSubmit={(lessons) => {
            console.log('Assigned lessons:', lessons);
            setShowAssignLessonsModal(false);
            setSelectedClass(null);
          }}
        />
      )}

      {showAssignStudentsModal && selectedClass && (
        <AssignStudentsModal
          onClose={() => {
            setShowAssignStudentsModal(false);
            setSelectedClass(null);
          }}
          onSubmit={(students) => {
            console.log('Assigned students:', students);
            setShowAssignStudentsModal(false);
            setSelectedClass(null);
          }}
        />
      )}

      {showDeleteModal && selectedClass && (
        <DeleteClassModal
          className={selectedClass.name}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedClass(null);
          }}
          onConfirm={() => {
            setClasses(classes.filter((c) => c.id !== selectedClass.id));
            setShowDeleteModal(false);
            setSelectedClass(null);
          }}
        />
      )}

      {showEditModal && selectedClass && (
        <EditClassModal
          classData={{
            name: selectedClass.name,
            headTeacher: selectedClass.headTeacher,
            studentCount: selectedClass.studentCount,
          }}
          onClose={() => {
            setShowEditModal(false);
            setSelectedClass(null);
          }}
          onSubmit={(data) => {
            setClasses(
              classes.map((c) =>
                c.id === selectedClass.id
                  ? { ...c, ...data }
                  : c
              )
            );
            setShowEditModal(false);
            setSelectedClass(null);
          }}
        />
      )}
    </div>
  );
};
  