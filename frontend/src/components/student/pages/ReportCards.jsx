import React, { useState } from "react";
import { User } from "lucide-react";

export const ReportCards = () => {
  const [selectedTerm, setSelectedTerm] = useState("Year One - Term II");

  const studentData = {
    name: "Felicity Bradshaw",
    grade: "9th Grade",
    teacher: "Anna",
    address: "481 First Ave.",
    city: "10010 New York, NY",
    country: "United States",
    term: "2014/2015 Term 2 2014/2015",
  };

  const grades = [
    {
      subject: "Art",
      grades: [
        { qtr: "Qtr 1", grade: "A", score: 95 },
        { qtr: "Qtr 2", grade: "A", score: 92 },
        { qtr: "Sem 1", grade: "A", score: 93.5 },
        { qtr: "Qtr 3", grade: "A", score: 92 },
        { qtr: "Qtr 4", grade: "A", score: 100 },
        { qtr: "Sem 2", grade: "A", score: 96 },
      ],
      final: { grade: "A", score: 94.75 },
    },
    {
      subject: "History",
      grades: [
        { qtr: "Qtr 1", grade: "A-", score: 90 },
        { qtr: "Qtr 2", grade: "A-", score: 93 },
        { qtr: "Sem 1", grade: "A-", score: 91.5 },
        { qtr: "Qtr 3", grade: "A-", score: 92 },
        { qtr: "Qtr 4", grade: "A", score: 92 },
        { qtr: "Sem 2", grade: "A-", score: 92 },
      ],
      final: { grade: "A-", score: 91.75 },
    },
  ];

  const attendance = {
    categories: ["Absent", "Tardy", "Total"],
    periods: [
      { number: 1, absent: 0, tardy: 0, total: 45 },
      { number: 2, absent: 0, tardy: 0, total: 43 },
      { number: 3, absent: 0, tardy: 0, total: 46 },
      { number: 4, absent: 1, tardy: 1, total: 48 },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-semibold mb-6">
          Welcome Back {studentData.name}
        </h1>

        <div className="grid grid-cols-12 gap-6">
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <select
                value={selectedTerm}
                onChange={(e) => setSelectedTerm(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg text-sm"
              >
                <option>Academic Year 21' - 22' (Y1)</option>
                <option>Year One - Term I</option>
                <option>Year One - Term II</option>
                <option>Year One - Term III</option>
              </select>
            </div>
          </div>

          {/* Report Card */}
          <div className="col-span-9">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">
                  Report Card for Academic Year 21' - 22' Term II
                </h2>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600">Student:</div>
                    <div>{studentData.name}</div>
                    <div>{studentData.address}</div>
                    <div>{studentData.city}</div>
                    <div>{studentData.country}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-600">Grade:</div>
                    <div>{studentData.grade}</div>
                    <div className="text-sm text-gray-600 mt-2">Teacher:</div>
                    <div>{studentData.teacher}</div>
                    <div className="text-sm text-gray-600 mt-2">Term:</div>
                    <div>{studentData.term}</div>
                  </div>
                </div>
              </div>

              {/* Attendance Table */}
              <div className="p-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-emerald-50">
                      <th className="px-4 py-2 text-left">Attendance</th>
                      {attendance.periods.map((period) => (
                        <th
                          key={period.number}
                          className="px-4 py-2 text-center"
                        >
                          {period.number}
                        </th>
                      ))}
                      <th className="px-4 py-2 text-center">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendance.categories.map((category) => (
                      <tr key={category} className="border-t">
                        <td className="px-4 py-2">{category}</td>
                        {attendance.periods.map((period) => (
                          <td
                            key={`${category}-${period.number}`}
                            className="px-4 py-2 text-center"
                          >
                            {category === "Absent"
                              ? period.absent
                              : category === "Tardy"
                              ? period.tardy
                              : period.total}
                          </td>
                        ))}
                        <td className="px-4 py-2 text-center">
                          {attendance.periods.reduce(
                            (sum, period) =>
                              sum +
                              (category === "Absent"
                                ? period.absent
                                : category === "Tardy"
                                ? period.tardy
                                : period.total),
                            0
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Grades Table */}
                <table className="w-full mt-8 text-sm">
                  <thead>
                    <tr className="bg-emerald-50">
                      <th className="px-4 py-2 text-left">Subject</th>
                      {grades[0].grades.map((g, idx) => (
                        <th key={idx} className="px-4 py-2 text-center">
                          {g.qtr}
                        </th>
                      ))}
                      <th className="px-4 py-2 text-center">Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades.map((subject, idx) => (
                      <tr key={idx} className="border-t">
                        <td className="px-4 py-2">{subject.subject}</td>
                        {subject.grades.map((g, gIdx) => (
                          <td key={gIdx} className="px-4 py-2 text-center">
                            <div>{g.grade}</div>
                            <div className="text-xs text-gray-500">
                              {g.score}
                            </div>
                          </td>
                        ))}
                        <td className="px-4 py-2 text-center">
                          <div>{subject.final.grade}</div>
                          <div className="text-xs text-gray-500">
                            {subject.final.score}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* GPA Scale */}
                <div className="mt-8 p-4 bg-emerald-50 rounded-lg">
                  <div className="font-semibold mb-2">Scale:</div>
                  <div className="grid grid-cols-5 gap-4 text-sm">
                    <div>97-100 = A+</div>
                    <div>93-96 = A</div>
                    <div>90-92 = A-</div>
                    <div>87-89 = B+</div>
                    <div>83-86 = B</div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="mt-8">
                  <div className="font-semibold mb-2">Comments:</div>
                  <div className="p-4 border rounded-lg text-sm">
                    Thanks to a fantastic year at school this year! It's been
                    awesome to see everyone grow and develop so much and our
                    community has come together so wonderfully with all of our
                    exciting new projects and activities. Hope you all have a
                    fantastic summer - and looking forward to seeing everyone
                    back in the fall!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
