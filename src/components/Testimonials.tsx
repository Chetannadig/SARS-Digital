import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MessageSquare, Star, Award, DollarSign, ArrowUp, User } from 'lucide-react';
import { TestimonialData } from '../types';

// Testimonial data
const testimonialData: TestimonialData[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Google",
    package: "$125,000",
    hikePercentage: "35%",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Learnify Pro's interactive coding challenges helped me ace my technical interviews. The gamified approach made learning algorithms fun, and the community support was invaluable.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Data Scientist",
    company: "Microsoft",
    package: "$135,000",
    hikePercentage: "42%",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "I went from knowing basic Python to mastering machine learning algorithms in just 6 months. The personalized learning path adapted perfectly to my busy schedule.",
    rating: 5
  },
  {
    id: 3,
    name: "Priya Patel",
    role: "UX Designer",
    company: "Adobe",
    package: "$110,000",
    hikePercentage: "28%",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "The design courses on Learnify Pro are industry-standard. The projects helped me build an impressive portfolio that got me multiple job offers.",
    rating: 4
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Product Manager",
    company: "Amazon",
    package: "$140,000",
    hikePercentage: "45%",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "Switching careers was daunting, but Learnify Pro made the transition smooth. The product management certification gave me the confidence to excel in interviews.",
    rating: 5
  },
  {
    id: 5,
    name: "Emily Rodriguez",
    role: "Full Stack Developer",
    company: "Netflix",
    package: "$130,000",
    hikePercentage: "38%",
    image: "https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    quote: "The projects on Learnify Pro are real-world and challenging. I built a complete e-commerce platform that impressed my interviewers at Netflix.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  // Autoplay functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
      }, 5000);
    }
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Stop autoplay on user interaction
  const handleManualNavigation = (index: number) => {
    setIsAutoplay(false);
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  const goToNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 relative">
      <div className="container-custom">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex justify-center mb-4">
            <span className="badge-purple badge inline-flex items-center px-4 py-1.5 rounded-full text-sm">
              <MessageSquare size={16} className="mr-1.5" />
              Testimonials
            </span>
          </div>
          <h2 className="section-title bg-gradient-to-r from-purple-600 via-blue-600 to-orange-500 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="section-subtitle">
            From career changers to skill enhancers, hear how our students transformed their lives through learning.
          </p>
        </div>

        {/* Testimonial slider */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-gray-700" />
          </button>
          
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-gray-700" />
          </button>
          
          {/* Testimonial cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonialData.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      {/* Image and info */}
                      <div className="w-full md:w-2/5 bg-gradient-to-br from-purple-600 to-blue-600 text-white p-8 flex flex-col justify-between">
                        <div>
                          <div className="relative w-24 h-24 mx-auto md:mx-0 mb-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-full h-full object-cover rounded-full border-4 border-white/30"
                            />
                            <div className="absolute bottom-0 right-0 bg-white rounded-full p-1">
                              <Award size={16} className="text-purple-600" />
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold text-center md:text-left">{testimonial.name}</h3>
                          <p className="text-white/80 mb-2 text-center md:text-left">{testimonial.role}</p>
                        </div>
                        
                        <div className="space-y-3 mt-6">
                          <div className="flex items-center space-x-2">
                            <Award className="w-5 h-5 text-orange-300" />
                            <span>
                              <span className="font-medium">Company:</span> {testimonial.company}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="w-5 h-5 text-green-300" />
                            <span>
                              <span className="font-medium">Package:</span> {testimonial.package}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <ArrowUp className="w-5 h-5 text-orange-300" />
                            <span>
                              <span className="font-medium">Salary Hike:</span> {testimonial.hikePercentage}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      {/* Testimonial content */}
                      <div className="w-full md:w-3/5 p-8">
                        <div className="flex mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i}
                              className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-gray-700 text-lg italic mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-1 h-8 mr-3"></div>
                            <p className="font-medium">Verified Graduate</p>
                          </div>
                          <MessageSquare className="text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonialData.map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
              <User size={24} className="text-purple-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">98%</h3>
            <p className="text-gray-600">Placement Rate</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <Award size={24} className="text-blue-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-teal-600 text-transparent bg-clip-text">500+</h3>
            <p className="text-gray-600">Hiring Partners</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <ArrowUp size={24} className="text-orange-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-orange-600 to-pink-600 text-transparent bg-clip-text">35%</h3>
            <p className="text-gray-600">Average Salary Increase</p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <Star size={24} className="text-green-600" />
            </div>
            <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-green-600 to-teal-600 text-transparent bg-clip-text">4.8/5</h3>
            <p className="text-gray-600">Student Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;