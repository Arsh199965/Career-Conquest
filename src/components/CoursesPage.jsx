import React, { useRef } from "react";
import Sidebar from "./Sidebar";

const coursesData = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    progress: "79% complete",
    videoUrl: "https://www.youtube.com/embed/6vbgZnQrpbU",
  },
  {
    title: "Automated Machine Learning for Beginners",
    progress: "1% complete",
    videoUrl: "https://www.youtube.com/embed/tB-kW_SjR2E",
  },
  {
    title: "Linux Command Line Terminal Basic for Beginners",
    progress: "27% complete",
    videoUrl: "https://www.youtube.com/embed/zleFeN8r2TM",
  },
  {
    title: "React - Learn React with Hooks by creating a Roguelike",
    progress: "92% complete",
    videoUrl: "https://www.youtube.com/embed/xdSClfL_5XI",
  },
  {
    title: "React - Learn React with Hooks by creating a Roguelike",
    progress: "92% complete",
    videoUrl: "https://www.youtube.com/embed/xdSClfL_5XI",
  },
  {
    title: "React - Learn React with Hooks by creating a Roguelike",
    progress: "92% complete",
    videoUrl: "https://www.youtube.com/embed/xdSClfL_5XI",
  },
];

const recommendedCoursesData = [
  {
    title: "Python, Flask Framework And Django Course For Beginners",
    progress: "START COURSE",
    videoUrl: "https://www.youtube.com/embed/J5bIPtEbS0Q",
  },
  {
    title: "Flask, desarrollo web con Python",
    progress: "START COURSE",
    videoUrl: "https://www.youtube.com/embed/ZAtoO8cxZqU",
  },
  {
    title: "JavaScript Practicals Crash Course",
    progress: "START COURSE",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg",
  },
  {
    title: "Data Science: R Programming Complete Diploma",
    progress: "START COURSE",
    videoUrl: "https://www.youtube.com/embed/_V8eKsto3Ug",
  },
];

const CoursesPage = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-50 to-purple-50">
      {/* Header */}
      <header className="pt-10 w-full h-32 flex justify-center items-center">
        <h1 className="text-4xl tracking-[0.1em] font-bold text-gray-900">
          Courses
        </h1>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />

        <div className="p-4 w-full">
          {/* Current Courses Section */}
          <section className="mb-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Current Courses
            </h2>
            <div className="relative">
              {/* Left Arrow */}
              <button
                className="absolute top-0 left-0 h-full px-2 text-2xl text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={scrollLeft}
              >
                &#9664;
              </button>

              <div
                className="flex overflow-x-auto overflow-y-auto space-x-4 scroll-smooth snap-x snap-mandatory"
                ref={scrollRef}
              >
                {coursesData.map((course, index) => (
                  <div
                    key={index}
                    className="snap-center min-w-[300px] bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
                  >
                    <div className="relative h-48">
                      <iframe
                        src={course.videoUrl}
                        title={course.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold mb-2 text-gray-700">
                        {course.title}
                      </h3>
                      <p className="text-gray-500">{course.progress}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                className="absolute top-0 right-0 h-full px-2 text-2xl text-gray-700 hover:text-gray-900 focus:outline-none"
                onClick={scrollRight}
              >
                &#9654;
              </button>
            </div>
          </section>

          {/* Recommended Courses Section */}
          <section>
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Recommended Courses
            </h2>
            <div className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory">
              {recommendedCoursesData.map((course, index) => (
                <div
                  key={index}
                  className="snap-center min-w-[300px] bg-white shadow-md rounded-lg p-4 transition-transform transform hover:scale-105"
                >
                  <div className="relative h-48">
                    <iframe
                      src={course.videoUrl}
                      title={course.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-700">
                      {course.title}
                    </h3>
                    <p className="text-gray-500">{course.progress}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
