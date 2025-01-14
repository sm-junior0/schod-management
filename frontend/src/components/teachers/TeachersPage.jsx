import React, { useState } from 'react';
import { TeachersList } from './TeachersList';
import { TeacherProfile } from './TeacherProfile';
import AddTeacherModal from './modals/AddTeacherModal';
import DeleteTeacherModal from './modals/DeleteTeacherModal';

const mockTeachers = [
        {
          name: "Kristin Watson",
          subject: "Chemistry",
          class: "JSS 2",
          email: "michelle.rivera@example.com",
          gender: "Female",
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Marvin McKinney",
          subject: "French",
          class: "JSS 3",
          email: "debbie.baker@example.com",
          gender: "Female",
          avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Jane Cooper",
          subject: "Maths",
          class: "JSS 3",
          email: "kenzi.lawson@example.com",
          gender: "Female",
          avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Cody Fisher",
          subject: "English",
          class: "SS 3",
          email: "nathan.roberts@example.com",
          gender: "Female",
          avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Bessie Cooper",
          subject: "Social studies",
          class: "SS 3",
          email: "felicia.reid@example.com",
          gender: "Male",
          avatar: "https://images.unsplash.com/photo-1502767089025-6572583495f6?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Leslie Alexander",
          subject: "Home economics",
          class: "SS 3",
          email: "tim.jennings@example.com",
          gender: "Male",
          avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Guy Hawkins",
          subject: "Geography",
          class: "JSS 1",
          email: "alma.lawson@example.com",
          gender: "Male",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Theresa Webb",
          subject: "Psychology",
          class: "JSS 3", 
          email: "debra.holt@example.com",
          gender: "Female",
          avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Jerome Bell",
          subject: "Physics",
          class: "JSS 4",
          email: "deanna.curtis@example.com",
          gender: "Male",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Savannah Nguyen",
          subject: "Accounting",
          class: "JSS 4",
          email: "georgia.young@example.com",
          gender: "Male",
          avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Wade Warren",
          subject: "C.R.S",
          class: "JSS 5",
          email: "jackson.graham@example.com",
          gender: "Male",
          avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Annette Black",
          subject: "Politics",
          class: "JSS 1",
          email: "dolores.chambers@example.com",
          gender: "Female",
          avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?crop=faces&fit=crop&w=96&h=96"
        },
        {
          name: "Darrell Steward",
          subject: "Entrepreneurship",
          class: "SS 3",
          email: "willie.jennings@example.com",
          gender: "Male",
          avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=96&h=96"
        }
      ];
      

export const TeachersPage = () => {
  const [teachers, setTeachers] = useState(mockTeachers);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [showAddTeacherModal, setShowAddTeacherModal] = useState(false);
  const [showDeleteTeacherModal, setShowDeleteTeacherModal] = useState(false);
  const [teacherToDelete, setTeacherToDelete] = useState(null);

  const handleAddTeacher = (newTeacher) => {
    console.log('New Teacher:', newTeacher);
    setShowAddTeacherModal(false);
  };

  const handleDeleteTeacher = (teacherName) => {
    console.log(`Deleted Teacher: ${teacherName}`);
    setShowDeleteTeacherModal(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Teachers</h1>
        <button
          onClick={() => setShowAddTeacherModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Add Teacher
        </button>
      </div>

      {teachers.length === 0 ? (
        <div>No teachers available</div>
      ) : (
        <TeachersList
          teachers={teachers}
          onViewProfile={(teacher) => {
            setSelectedTeacher(teacher);
            setShowProfile(true);
          }}
        />
      )}

      {showProfile && selectedTeacher && (
        <TeacherProfile
          teacher={selectedTeacher}
          onClose={() => {
            setShowProfile(false);
            setSelectedTeacher(null);
          }}
        />
      )}

      {showAddTeacherModal && (
        <AddTeacherModal 
          onClose={() => setShowAddTeacherModal(false)} 
          onAdd={handleAddTeacher} 
        />
      )}

      {showDeleteTeacherModal && (
        <DeleteTeacherModal 
          onClose={() => setShowDeleteTeacherModal(false)} 
          onDelete={() => handleDeleteTeacher(teacherToDelete)} 
          teacherName={teacherToDelete} 
        />
      )}
    </div>
  );
};
