import React from 'react';
import logo from '../assets/logotrp.png'; // Path to your Career Conquest logo
import success from '../assets/Success.svg'
import objectives from '../assets/Objectives.svg'
import trainer from "../assets/Corporate-Trainer.svg";
const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <header className="flex justify-between items-center p-6">
        <img src={logo} alt="Career Conquest Logo" className="" />
        <nav>
          <ul className="flex space-x-6 text-black">
            <li>Product</li>
            <li>Pricing</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div>
          <button className="bg-black text-white py-2 px-4 rounded">Login</button>
        </div>
      </header>

      <section className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-16">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-black mb-4">
            Empowering Careers with Personalized Job and Skill Matching
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Tailored Job Matches and Skill Development to Help You Conquer Your Career.
          </p>
          <button className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-6 rounded text-lg">
            Get Started
          </button>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex">
          <img
            src={objectives}
            className="w-1/3"

          />
          <img
            src={trainer}
            className="w-1/3"

          />
          <img
            src={success}
            alt="Career Growth Illustration"
            className="w-1/3"
          />


        </div>
      </section>

      <footer className="text-center py-8">
        <p className="text-gray-600">© 2024 Career Conquest. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
