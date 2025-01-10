import React, { useEffect, useState } from 'react';

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Jane Whoseng",
      role: "Principal at Kigali International School",
      image: "https://images.unsplash.com/photo-1580618864180-f6d7d39b8ff6?w=96&h=96&fit=crop&crop=faces",
      text: "The platform has made school management easy with streamlined attendance, financial tracking, and real-time reporting"
    },
    {
      name: "Marie Uwase",
      role: "Parent at International School of Rwanda",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=96&h=96&fit=crop&crop=faces",
      text: "I can track my child's progress and communicate with teachers easily, providing greater transparency in education"
    },
    {
      name: "Prof. Michael Chen",
      role: "Director at Stanford Academy",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=faces",
      text: "The analytics and reporting features have given us invaluable insights into student performance and improved our efficiency by 40%"
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Our Clients Say</h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus odio pellentesque pellentesque a. Amet
        </p>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="w-full flex-shrink-0 px-4"
              >
                <div className="bg-white rounded-xl p-8 shadow-sm max-w-2xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
