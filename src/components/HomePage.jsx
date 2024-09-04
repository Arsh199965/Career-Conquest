import React from 'react';
import Logo from '../assets/logoblack.png'; // Assuming you saved your logo here
import { FaBook, FaBriefcase } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="bg-custom-black text-custom-gray min-h-screen font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6">
        <img src={Logo} alt="Career Conquest" className="h-10" />
        <button className="bg-custom-pink text-white px-4 py-2 rounded">Request a Demo</button>
      </header>

      {/* Main Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl text-white font-bold">The World's Leading Skills Verification for Tomorrow's Employers</h1>
        <p className="mt-4 max-w-xl mx-auto">Bridging Skills to Careers with Intelligent Matching and Adaptive Learning Pathways.</p>
      </section>

      {/* Skills Section */}
      <section className="flex justify-around items-center p-10">
        <div className="flex flex-col items-center">
          <FaBook className="text-custom-pink text-4xl mb-2" />
          <h2 className="text-xl text-white">5 Talent Development Goals</h2>
          <p>Computer Programming, Fleet Maintenance, Engine Repair, etc.</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-8">
          <div className="bg-gray-800 p-4 rounded">
            <p>Computer Programming</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <p>Fleet Maintenance</p>
          </div>
          <div className="bg-gray-800 p-4 rounded">
            <p>Engine Repair</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex justify-between items-center p-6 bg-gray-900 text-white">
        <div>© 2024 Career Conquest. All rights reserved.</div>
        <div>
          <a href="#" className="mx-2">Privacy Policy</a>
          <a href="#" className="mx-2">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
