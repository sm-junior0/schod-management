import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: 'What Is A School Management System?',
    answer: 'A software platform designed to streamline and automate administrative tasks, enhance communication between stakeholders, and manage school operations efficiently.',
  },
  {
    question: 'Can The Software Be Customized For My School?',
    answer: 'Yes, our software is highly customizable to meet your specific needs and requirements.',
  },
  {
    question: 'Can Parents Pay School Fees Through The System?',
    answer: 'Yes, we offer secure integrated payment processing for school fees and other payments.',
  },
  {
    question: 'Does The System Support Multiple Languages?',
    answer: 'Yes, our system supports multiple languages to accommodate diverse user needs.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">FAQ</h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="faq-item py-4">
              <button
                className="w-full flex justify-between items-center text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-primary" />
                ) : (
                  <ChevronDown className="text-gray-400" />
                )}
              </button>
              {openIndex === index && (
                <p className="mt-2 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
