import React from 'react';
import { useInView } from 'react-intersection-observer';

import test from '../assets/test2.svg';
import analyse from '../assets/analysis.svg';
import learn from '../assets/learn.svg';
import successjob from '../assets/Successjob.svg';

const AnimatedSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Animation will trigger when 20% of the section is in view
    triggerOnce: false, // Animation will trigger every time the section comes into view
  });

  return (
    <section className="bg-gray-100 py-12 my-12">
      <div
        ref={ref}
        className={`transition-all duration-1000 transform ${
          inView ? 'opacity-100 translate-x-0' : 'opacity-20 translate-x-40'
        }`}
      >
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            Find The Job That You Deserve
          </h2>

          <div className="flex justify-around items-center mb-8">
            <div className="flex flex-col items-center">
              <img src={test} alt="First Step" className="h-28 mb-4" />
              <p className="text-lg">Test Yourself</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={analyse} alt="Second Step" className="h-28 mb-4" />
              <p className="text-lg">Analyse Your Weaknesses</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={learn} alt="Third Step" className="h-28 mb-4" />
              <p className="text-lg">Learn Required Skills</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={successjob} alt="Third Step" className="h-28 mb-4" />
              <p className="text-lg">Achieve Brilliance</p>
            </div>
          </div>

          <div className="flex items-center justify-between mx-40">
            <div className="w-4 h-4 rounded-full bg-green-400"></div>
            <div className="w-full h-px bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            <div className="w-full h-px bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
            <div className="w-full h-px bg-gray-300"></div>
            <div className="w-4 h-4 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
