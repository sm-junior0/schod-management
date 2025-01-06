import React from "react";

const timetableData = [
  {
    time: "8:30-9:20",
    subjects: [
      { subject: "GUI", teacher: "Mukama" },
      { subject: "PHP", teacher: "Olivier" },
      { subject: "Math", teacher: "Emmanuel" },
    ],
  },
  {
    time: "9:20-10:10",
    subjects: [
      { subject: "Physics", teacher: "Projecte" },
      { subject: "JAVA", teacher: "Larissa" },
      { subject: "Web 3", teacher: "AWET" },
    ],
  },
];

export const Timetable = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-700">
        Student Timetable
      </h1>

      <div className="bg-white rounded-lg shadow-md overflow-x-auto">
        <table className="w-full min-w-[800px] border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-100 text-gray-700">
              <th className="px-4 py-3 text-left border border-gray-200">
                Time
              </th>
              <th className="px-4 py-3 text-left border border-gray-200">
                Monday
              </th>
              <th className="px-4 py-3 text-left border border-gray-200">
                Tuesday
              </th>
              <th className="px-4 py-3 text-left border border-gray-200">
                Wednesday
              </th>
              <th className="px-4 py-3 text-left border border-gray-200">
                Thursday
              </th>
              <th className="px-4 py-3 text-left border border-gray-200">
                Friday
              </th>
            </tr>
          </thead>
          <tbody>
            {timetableData.map((slot, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-gray-100"
                } hover:bg-blue-50`}
              >
                <td className="px-4 py-3 font-medium border border-gray-200">
                  {slot.time}
                </td>
                {slot.subjects.map((subject, idx) => (
                  <td
                    key={idx}
                    className="px-4 py-3 text-sm border border-gray-200"
                  >
                    <div className="space-y-1">
                      <div className="font-semibold text-blue-700">
                        {subject.subject}
                      </div>
                      <div className="text-gray-500">{subject.teacher}</div>
                      {subject.room && (
                        <div className="text-gray-400">Room: {subject.room}</div>
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
