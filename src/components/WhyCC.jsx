import React from 'react';
import Signup from '../assets/Signup.svg'; // Update path as needed

const WhyCC = () => {
  return (
    <section className="bg-white py-8 my-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-12 lg:px-32 mb-12">
        
        {/* Left Text Section */}
        <div className="w-1/2 lg:pr-4 lg:pl-32">
          <h2 className="text-3xl font-bold mb-6 pl-4">Why Career Conquest?</h2>
          <ul className="list-none space-y-6 text-lg text-gray-700">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>Match with top jobs tailored to your skills and aspirations
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span> Analyze your Strengths and weaknesses through personalized assessments
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span> Develop essential skills with targeted learning paths
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">✓</span> Track your progress and achieve your career goals
            </li>
          </ul>
        </div>

        {/* Right Image Section */}
        <div className="w-1/2 items-center h-auto">
          <img
            src={Signup}
            alt="Career Conquest Features"
            className="w-3/4 h-auto"
          />
        </div>
      </div>
      <div className="h-[2px] my-5 bg-gray-600 justify-center mx-96"></div>
    </section>
  );
};

export default WhyCC;
