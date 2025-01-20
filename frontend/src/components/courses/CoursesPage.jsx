import React, { useState } from "react";
import { LessonsList } from "./LessonsList";
import { CreateLessonModal } from "./modals/CreateLessonModal";
import { EditLessonModal } from "./modals/EditLessonModal";
import { DeleteLessonModal } from "./modals/DeleteLessonModal";
import { mockLessons } from "./data/mockData";

export const CoursesPage = () => {
  const [lessons, setLessons] = useState(mockLessons);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCreateLesson = (lesson) => {
    setLessons([...lessons, lesson]);
    setShowCreateModal(false);
  };

  const handleEditLesson = (updatedLesson) => {
    setLessons(
      lessons.map((l) => (l.id === updatedLesson.id ? updatedLesson : l))
    );
    setShowEditModal(false);
    setSelectedLesson(null);
  };

  const handleDeleteLesson = (lessonId) => {
    setLessons(lessons.filter((l) => l.id !== lessonId));
    setShowDeleteModal(false);
    setSelectedLesson(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Lessons</h1>
        <div className="flex gap-3">
          <button className="text-blue-600 hover:underline">Export CSV</button>
          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Create new lesson
          </button>
        </div>
      </div>

      <LessonsList
        lessons={lessons}
        onEdit={(lesson) => {
          setSelectedLesson(lesson);
          setShowEditModal(true);
        }}
        onDelete={(lesson) => {
          setSelectedLesson(lesson);
          setShowDeleteModal(true);
        }}
      />

      {showCreateModal && (
        <CreateLessonModal
          onClose={() => setShowCreateModal(false)}
          onSubmit={handleCreateLesson}
        />
      )}

      {showEditModal && selectedLesson && (
        <EditLessonModal
          lesson={selectedLesson}
          onClose={() => {
            setShowEditModal(false);
            setSelectedLesson(null);
          }}
          onSubmit={handleEditLesson}
        />
      )}

      {showDeleteModal && selectedLesson && (
        <DeleteLessonModal
          lesson={selectedLesson}
          onClose={() => {
            setShowDeleteModal(false);
            setSelectedLesson(null);
          }}
          onConfirm={() => handleDeleteLesson(selectedLesson.id)}
        />
      )}
    </div>
  );
};

export default CoursesPage;
