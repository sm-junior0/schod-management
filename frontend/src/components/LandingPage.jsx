import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GraduationCap, Moon } from 'lucide-react';

const FeatureCard = ({ title, description, date, tag }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <div className="text-sm text-blue-600 mb-2">{tag}</div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
    <div className="mt-4 flex items-center gap-2">
      <div className="flex -space-x-2">
        {[...Array(3)].map((_, j) => (
          <div key={j} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white" />
        ))}
      </div>
      <span className="text-sm text-gray-500">{date}</span>
    </div>
  </div>
);

const features = [
  {
    title: 'Slack Integration',
    description: 'Schol is a school management solution that offers a personalized portal to each type of user.',
    date: '7 Feb 2022',
    tag: 'Development',
  },
  {
    title: 'Task Management',
    description: 'Create and manage tasks efficiently with our intuitive task management system.',
    date: '7 Feb 2022',
    tag: 'Development',
  },
  {
    title: 'Communication Hub',
    description: 'Stay connected with all stakeholders through our integrated communication platform.',
    date: '7 Feb 2022',
    tag: 'Development',
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor and track student progress with comprehensive analytics and reporting.',
    date: '7 Feb 2022',
    tag: 'Development',
  },
];

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Navbar */}
      <nav className="px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="text-white" size={32} />
            <span className="text-2xl font-bold text-white">Schol</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#features" className="hover:text-white">Use Cases</a>
            <a href="#schools" className="hover:text-white">Schools</a>
          </div>

          <button
            onClick={() => navigate('AuthPage')}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative px-6 pt-12 pb-24">
        <div className="absolute top-20 right-20">
          <Moon className="text-yellow-400 animate-pulse" size={48} />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-blue-900/50 rounded-full text-blue-200 text-sm mb-6">
            Get Your Free Consultation Now
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Manage your school<br />easily with Schol
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schol is a school management solution that offers a personalized portal to each type of user.
          </p>
          <button
            onClick={() => navigate('/AuthPage')}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700"
          >
            Get Started
          </button>
        </div>

        <div className="mt-16 max-w-5xl mx-auto">
          <img
            src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80"
            alt="Dashboard Preview"
            className="rounded-lg shadow-2xl border border-gray-800"
          />
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>

      {/* Task Creation Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Create your task</h2>
              <p className="text-gray-600 mb-8">
                Schol is a school management solution that offers a portal to each type of user, ensuring that your institution is always engaged with teachers, students, and their parents.
              </p>
              <div className="space-y-4">
                <div className="bg-blue-600 text-white p-6 rounded-xl">
                  <h3 className="font-semibold mb-2">Manage the task easily and clearly</h3>
                  <p className="text-sm text-blue-100">
                    Send, increase communication between all stakeholders: students, teachers, parents, and administrative staff, with a solution provided for any type of end-user. Keeping your students and parents engaged with the dynamic process is crucial for a school's success.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=600&h=800&q=80"
                alt="Mobile App"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

        
      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-4">SMS</h3>
              <p className="text-gray-300 text-sm">
                Schol is The World's Best And #1 School Free Online School Management Software. Our School Management Software Can Beat Any School Software In The Market.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
                <li><a href="#features" className="hover:text-white">Use Cases</a></li>
                <li><a href="#schools" className="hover:text-white">Schools</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">
                Stay Updated With The Latest Trends And Products - Don't Miss Out!
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Subscribe To Our Newsletter"
                  className="px-4 py-2 rounded-lg bg-navy-800 text-white placeholder-gray-400 flex-1"
                />
                <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm text-gray-400">
            ©2024 School Management. Copyright And All Rights Reserved.
            <div className="mt-4 flex justify-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white">Security</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
