import React from "react";
import { LessonTableHeader } from "./components/LessonTableHeader";
import { LessonTableRow } from "./components/LessonTableRow";

export const LessonsList = ({ lessons, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="w-full">
        <LessonTableHeader />
        <tbody className="divide-y divide-gray-200">
          {lessons.map((lesson, index) => (
            <LessonTableRow
              key={lesson.id}
              lesson={lesson}
              index={index}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
