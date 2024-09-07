import React, { useState } from "react";
import Sidebar from "./Sidebar";

const AssessmentSelectionPage = () => {
  const unassessedSkills = [
    "Career Conquest Knowledge",
    "Intermediate Java Programming",
    "App Development",
  ];
  const assessedSkills = [
    { skill: "Web Design", score: 85 },
    { skill: "Basic Java Programming", score: 78 },
    { skill: "Intermediate Python Programming", score: 90 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="pt-10 w-full h-32 items-center">
        <h1 className="text-4xl tracking-[0.1em] font-bold text-center">
          Skill Assessments
        </h1>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-auto mx-24 p-4">
          {/* Unassessed Skills */}
          <div className="mb-8 p-6 bg-white border-2 border-gray-300 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Unassessed Skills</h2>
            <ul className="space-y-4">
              {unassessedSkills.map((skill, index) => (
                <li
                  key={index}
                  className="p-4 border-2 border-gray-300 rounded-lg hover:bg-gray-200 cursor-pointer"
                  onClick={() => (window.location.href = "/quiz")}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Assessed Skills */}
          <div className="mb-8 p-6 bg-white border-2 border-gray-300 shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">Assessed Skills</h2>
            <ul className="space-y-4">
              {assessedSkills.map((skill, index) => (
                <li
                  key={index}
                  className="p-4 border-2 border-gray-300 rounded-lg bg-gray-100"
                >
                  <div className="flex justify-between">
                    <span>{skill.skill}</span>
                    <span>{skill.score}%</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSelectionPage;
