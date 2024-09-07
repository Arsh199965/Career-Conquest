import React from 'react';
import Signup from '../assets/Signup.svg'; // Update path as needed

const WhyCC = () => {
  return (
    <section className="bg-white py-8 my-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-12 lg:px-32">
        
        {/* Left Text Section */}
        <div className="w-full lg:w-1/2 lg:pr-10 lg:pl-24">
          <h2 className="text-3xl font-bold mb-4 pl-4">Why Career Conquest?</h2>
          <ul className="list-none space-y-4 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span> Match with Top Jobs tailored to your skills and aspirations
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span> Analyze Your Strengths and Weaknesses through personalized assessments
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span> Develop Essential Skills with targeted learning paths
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span> Track Your Progress and achieve your career goals
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 lg:pl-10">
          <img
            src={Signup}
            alt="Career Conquest Features"
            className="w-3/4 h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyCC;
