import React, { useState } from "react";
import Sidebar from "./Sidebar";

const TestPage = () => {
  const questions = [
    {
      question: "What is Career Conquest's main focus?",
      options: ["Job hunting", "Interview tips", "Career growth", "Education"],
      correct: "Career growth",
    },
    {
      question: "Which of these is a feature of Career Conquest?",
      options: [
        "Online courses",
        "Job matching",
        "Resume building",
        "All of the above",
      ],
      correct: "All of the above",
    },
    {
      question: "Which industry does Career Conquest primarily cater to?",
      options: [
        "Healthcare",
        "Technology",
        "Manufacturing",
        "Finance",
      ],
      correct: "Technology",
    },
    {
      question: "What service does Career Conquest provide for job seekers?",
      options: [
        "Guided job applications",
        "Project Tracking",
        "Analysis of Skill Gaps",
        "All of the above",
      ],
      correct: "All of the above",
    },
    {
      question: "How can Career Conquest help in interviews?",
      options: [
        "Provides interview cracking courses",
        "Shares common questions",
        "Offers interview practice",
        "All of the above",
      ],
      correct: "Provides interview cracking courses",
    },
    {
      question: "What kind of companies are featured in Career Conquest's job matches?",
      options: ["Startups", "Large corporations", "MNCs", "All of the above"],
      correct: "All of the above",
    },
    {
      question: "Which of the following skills does Career Conquest prioritize?",
      options: [
        "Technical skills",
        "Soft skills",
        "Projects",
        "All of the above",
      ],
      correct: "All of the above",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Header */}
      <header className="pt-10 w-full h-32 items-center">
        <h1 className="text-4xl tracking-[0.1em] font-bold text-center">
          Assessments
        </h1>
        <h2 className="text-2xl text-center mt-4 text-gray-600">
          Assessing Your Knowledge About World's No. 1 Site
        </h2>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar/>

        {/* Main Content */}
        <div className="flex-auto mx-24 p-4">
          {currentQuestion < questions.length ? (
            <div className="p-6 bg-white border-2 border-gray-300 shadow-xl">
              <h2 className="text-xl font-semibold mb-4">
                {questions[currentQuestion].question}
              </h2>
              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <div
                    key={index}
                    className={`p-4 border-2 ${
                      selectedOption === option ? "border-blue-500" : "border-gray-300"
                    } rounded-lg hover:bg-gray-200 cursor-pointer`}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <button
                onClick={handleNextQuestion}
                className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
              >
                {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          ) : (
            <div className="p-6 bg-white border-2 border-gray-300 shadow-xl">
              <h2 className="text-xl font-semibold mb-4">Quiz Complete!</h2>
              <p className="text-lg">Your score is {score} out of {questions.length}.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestPage;
