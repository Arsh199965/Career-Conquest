import React from "react";
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
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
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
        <div className="flex-auto mx-20 p-4">
          {/* Unassessed Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Unassessed Skills</h2>
            <div className="grid grid-cols-3 gap-6">
              {unassessedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border-2 border-gray-300 rounded-lg shadow-red-200 shadow-md hover:bg-gray-100 cursor-pointer"
                  onClick={() => (window.location.href = "/quiz")}
                >
                  <h3 className="text-xl text-transparent bg-gradient-to-r bg-clip-text from-custom-red to-pink-800 font-bold mb-2">{skill}</h3>
                  <p className="text-gray-600">Start Assessment</p>
                </div>
              ))}
            </div>
          </div>

          {/* Assessed Skills */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Assessed Skills</h2>
            <div className="grid grid-cols-3 gap-6">
              {assessedSkills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-r from-gray-100 to-gray-300 border-2 border-gray-300 rounded-lg shadow-lg"
                >
                  <h3 className="text-xl text-transparent bg-gradient-to-r bg-clip-text from-custom-red to-pink-800 font-bold mb-2">{skill.skill}</h3>
                  <p className="text-gray-600">Score: {skill.score}%</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentSelectionPage;
