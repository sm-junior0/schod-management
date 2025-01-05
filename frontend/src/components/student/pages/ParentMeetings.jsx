import React from 'react';

const meetings = [
  {
    id: 1,
    title: 'Parent meeting',
    date: 'Sunday 24th September, 2024',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor fermentum suscipit. Donec vel mauris viverra, auctor massa vitae, egestas sem. Donec vel laoreet leo, eget hendrerit risus. Nulla sed consequat tellus.',
    image:
      'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=300',
  },
  // Add more meetings here
];

export const ParentMeetings = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-left">Parent Meeting</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={meetings[0].image}
            alt={meetings[0].title}
            className="w-full h-96 object-cover"
          />
          <div className="p-6">
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor fermentum suscipit. Donec vel mauris viverra, auctor massa vitae, egestas sem. Donec vel laoreet leo, eget hendrerit risus. Nulla sed consequat tellus. Proin at rutrum justo. Vestibulum consectetur fringilla tristique. Sed vel erat in diam faucibus mollis. Integer a congue purus. In risus velit, eleifend a vestibulum eget, elementum at erat. Sed felis metus, sagittis eget magna aliquet, ornare volutpat orci.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor fermentum suscipit. Donec vel mauris viverra, auctor massa vitae, egestas sem. Donec vel laoreet leo, eget hendrerit risus. Nulla sed consequat tellus. Proin at rutrum justo. Vestibulum consectetur fringilla tristique. Sed vel erat in diam faucibus mollis. Integer a congue purus. In risus velit, eleifend a vestibulum eget, elementum at erat. Sed felis metus, sagittis eget magna aliquet, ornare volutpat orci.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor fermentum suscipit. Donec vel mauris viverra, auctor massa vitae, egestas sem. Donec vel laoreet leo, eget hendrerit risus. Nulla sed consequat tellus. Proin at rutrum justo. Vestibulum consectetur fringilla tristique. Sed vel erat in diam faucibus mollis. Integer a congue purus. In risus velit, eleifend a vestibulum eget, elementum at erat. Sed felis metus, sagittis eget magna aliquet, ornare volutpat orci.
            </p>
            <p className="text-gray-600 leading-relaxed text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque auctor fermentum suscipit. Donec vel mauris viverra, auctor massa vitae, egestas sem. Donec vel laoreet leo, eget hendrerit risus. Nulla sed consequat tellus. Proin at rutrum justo. Vestibulum consectetur fringilla tristique. Sed vel erat in diam faucibus mollis. Integer a congue purus. In risus velit, eleifend a vestibulum eget, elementum at erat. Sed felis metus, sagittis eget magna aliquet, ornare volutpat orci.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
