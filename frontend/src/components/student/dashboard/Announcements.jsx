import React from "react";

const announcements = [
  {
    id: 1,
    title: "Parent meeting",
    date: "01 January 2024",
    description:
      "This is just to inform people about an event in the school...",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: 2,
    title: "Upcoming promo party",
    date: "01 January 2024",
    description:
      "This is just to inform people about an event in the school...",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=300",
  },
];

export const Announcements = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-bold text-gray-800 mb-6">Announcements</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {announcements.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-gray-50 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 p-4"
          >
            <img
              src={announcement.image}
              alt={announcement.title}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-700">
              {announcement.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{announcement.date}</p>
            <p className="text-sm text-gray-600 mb-4">
              {announcement.description}
            </p>
            <button className="mt-2 w-full bg-blue-500 text-white text-sm py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Read and Use Opportunity
            </button>
          </div>
        ))}
      </div>
      <button className="mt-6 w-full bg-blue-100 text-blue-600 py-2 rounded-lg text-sm hover:bg-blue-200 transition-colors">
        View all
      </button>
    </div>
  );
};
