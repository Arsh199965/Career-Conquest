import React from "react";
import logo from "../assets/logotrp 2.png"; // Path to your Career Conquest logo
import { useNavigate } from "react-router-dom";
import Testimonial from "./Testimonial";
import AnimatedSection from "./PathSection";
import WhyCC from "./WhyCC";
import Footer from "./Footer";
import ExpertiseSection from "./Expertise";
import Main from "../assets/Main.svg";

const Home = () => {
  const navigate = useNavigate();

  let handleLogin = () => {
    console.log("helo");

    navigate("/dashboard");
  };
  let handleSignup = () => {
    console.log("helo");

    navigate("/signup");
  };
  return (
    <div className="bg-white min-h-screen">
      <header className="flex justify-between items-center p-6">
        <img src={logo} alt="Career Conquest Logo" className="h-12" />
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
              handleLogin();
            }}
            className="bg-black text-white py-2 px-4 rounded"
          >
            Login
          </button>
        </div>
      </header>

      <section className="container mx-auto flex flex-col lg:flex-row justify-between items-center py-16 pt-8 pb-4 pl-20 pr-20 mb-4">
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl font-bold text-transparent bg-gradient-to-r bg-clip-text from-custom-red to-pink-800 mb-4 pb-2">
            Empowering Careers with Personalized Job and Skill Matching
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Tailored Job Matches and Skill Development to Help You Conquer Your
            Career.
          </p>
          <div className="flex gap-5 mt-8">
            <button onClick={handleSignup} className="bg-gradient-to-r from-gray-700 to-black text-white py-2 px-4 rounded">
              Start As Candidate
            </button>
            <button className="bg-gradient-to-r from-gray-700 to-black text-white py-2 px-4 rounded">
              Start As Employer
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center">
          <img src={Main} className="w-3/4" />
        </div>
      </section>
      <Testimonial content="We are the match-makers, so you don't have to worry about getting discovered." sayerName="Team Career Conquest" />

      
      <AnimatedSection/>
      <WhyCC />
      <ExpertiseSection/>
      <Footer/>
    </div>
  );
};

export default Home;
