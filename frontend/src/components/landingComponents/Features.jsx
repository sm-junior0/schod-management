import React from 'react';
import { 
    Circle,
  } from 'lucide-react';
import phoneImage from '../../assets/images/phone.png';
const features = [
  {
    icon: <Circle className="w-6 h-6 text-primary" />,
    title: 'Student Management',
    description: 'Easily manage student profiles, attendance, grades, and progress reports.',
  },
  {
    icon: <Circle className="w-6 h-6 text-primary" />,
    title: 'Teacher Tools',
    description: 'Enable teachers to assign homework, track performance, and streamline grading.',
  },
  {
    icon: <Circle className="w-6 h-6 text-primary" />,
    title: 'Parent Portal',
    description: 'Keep parents informed with updates on their child\'s attendance, grades, and school activities.',
  },
  {
    icon: <Circle className="w-6 h-6 text-primary" />,
    title: 'Parent PoTimetable Automation',
    description: 'Automatically generate timetables to save time and reduce errors.',
  },
  {
    icon: <Circle className="w-6 h-6 text-primary" />,
    title: 'Fee Management',
    description: 'Simplify fee collection with automated reminders and secure online payment options.',
  },
  {
    icon: <Circle className="w-6 h-6 text-primary" />,
    title: 'Fast, Secure & Easy',
    description: 'We use advanced tools and technologies to build up this free school software. It is super fast, secure, reliable, and easy to use and manage.',
  },
];

export const Features = () => {
    return (
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="md:pr-12">
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left mx-10">Features Of Our Software</h2>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 mx-10">
                  {feature.icon} 
                  <div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <img 
              src={phoneImage} 
              alt="Mobile Mockup" 
              className="w-full max-w-xs md:max-w-sm rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    );
  };
  
