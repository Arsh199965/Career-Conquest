import React from "react";
import { useInView } from "react-intersection-observer";

const ExpertiseSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger when 20% of the section is in view
  });

  return (
    <section
      ref={ref}
      className={`flex justify-center items-center bg-white py-16 transition-all duration-1000 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="max-w-6xl mx-auto flex space-x-10">
        {/* Left Text Section */}
        <div className="w-1/2">
          <h3 className="text-xl font-medium tracking-wider text-gray-500 uppercase mb-4">
            Our Expertise
          </h3>
          <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-red to-pink-700">
            We elevate careers with professional insights at Career Conquest.
          </h2>
        </div>

        {/* Right Discovery Card */}
        <div className="w-1/2 bg-gray-600 text-white p-10 shadow-lg">
          <h3 className="text-3xl font-semibold mb-4">× Discovery</h3>
          <p className="text-lg leading-relaxed mb-6">
            A thorough discovery is the first step towards unlocking your full potential. 
            At Career Conquest, we focus on understanding your career goals and crafting 
            solutions that align with your professional growth. Whether it’s enhancing 
            your skillset or landing your dream job, we ensure that each step you take 
            is impactful.
          </p>
          <a
            href="#"
            className="text-white underline hover:text-blue-400 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
