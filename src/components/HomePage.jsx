import React from "react";
import logo from "../assets/logotrp 2.png"; // Path to your Career Conquest logo
import success from "../assets/Success.svg";
import objectives from "../assets/Objectives.svg";
import trainer from "../assets/Corporate-Trainer.svg";
import { useNavigate } from "react-router-dom";
import Testimonial from "./Testimonial";
import AnimatedSection from "./PathSection";
import WhyCC from "./WhyCC";

const Home = () => {
  const navigate = useNavigate();

  let handleClick = () => {
    console.log("helo");

    navigate("/dashboard");
  };
  return (
    <div className="bg-white min-h-screen">
      <header className="flex justify-between items-center p-6">
        <img src={logo} alt="Career Conquest Logo" className="h-7" />
        <div className="flex justify-end items-center">
          <nav className="flex space-x-6 text-black">
            <ul className="flex space-x-6 pr-10">
              <li className="border-2 border-black px-2">Why Us</li>
              <li className="border-2 border-black px-2">About Us</li>
              <li className="border-2 border-black px-2">Contact</li>
            </ul>
          </nav>
          <button
            onClick={() => {
              handleClick();
            }}
            className="bg-black text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </header>

      <section className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-16 pt-20 pb-4 pl-20 pr-20 mb-16">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-black mb-6">
            Empowering Careers with Personalized Job and Skill Matching
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Tailored Job Matches and Skill Development to Help You Conquer Your
            Career.
          </p>
          <div className="flex gap-5 mt-8">
            <button className="bg-black text-white py-2 px-4 rounded">
              Start As Candidate
            </button>
            <button className="bg-black text-white py-2 px-4 rounded">
              Start As Employer
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex">
          <img src={objectives} className="w-1/3" />
          <img src={trainer} className="w-1/3" />
          <img src={success} className="w-1/3" />
        </div>
      </section>
      <Testimonial content="We are the match-makers, so you don't have to worry about getting discovered." sayerName="Team Career Conquest" />

      
      <AnimatedSection/>
      <WhyCC/>
      <footer className="text-center py-8">
        <p className="text-gray-600">
          © 2024 Career Conquest. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
