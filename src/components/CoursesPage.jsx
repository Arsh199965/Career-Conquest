import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "./Sidebar";

const coursesData = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    progress: "79% complete",
    videoUrl: "https://www.youtube.com/embed/6vbgZnQrpbU", // Angela Yu's Web Dev Bootcamp
  },
  {
    title: "Automated Machine Learning for Beginners",
    progress: "1% complete",
    videoUrl: "https://www.youtube.com/embed/tB-kW_SjR2E", // Machine Learning with Python by freeCodeCamp
  },
  {
    title: "Linux Command Line Terminal Basic for Beginners",
    progress: "START COURSE",
    videoUrl: "https://www.youtube.com/embed/zleFeN8r2TM", // Linux Command Line for Beginners
  },
  {
    title: "React - Learn React with Hooks by creating a Roguelike",
    progress: "START COURSE",
    videoUrl: "https://www.youtube.com/embed/xdSClfL_5XI", // React Tutorial using Hooks
  },
];

const recommendedCoursesData = [
  {
    title: "Python, Flask Framework And Django Course For Beginners",
    progress: "START COURSE",
    videoUrl: "https://www.youtube.com/embed/J5bIPtEbS0Q", // Flask Crash Course by Traversy Media
  },
  {
    title: "Flask, desarrollo web con Python",
    progress: "START COURSE",
    videoUrl: "https://www.youtube.com/embed/ZAtoO8cxZqU", // Flask Web Development in Spanish
  },
  {
    title: "JavaScript Practicals Crash Course",
    progress: "START COURSE",
    videoUrl: "https://www.youtube.com/embed/PkZNo7MFNFg", // JavaScript Crash Course by freeCodeCamp
  },
  {
    title: "Data Science: R Programming Complete Diploma",
    progress: "95% complete",
    videoUrl: "https://www.youtube.com/embed/_V8eKsto3Ug", // R Programming Tutorial by freeCodeCamp
  },
  {
    title: "Data Science: R Programming Complete Diploma",
    progress: "95% complete",
    videoUrl: "https://www.youtube.com/embed/_V8eKsto3Ug", // R Programming Tutorial by freeCodeCamp
  },
  {
    title: "Data Science: R Programming Complete Diploma",
    progress: "95% complete",
    videoUrl: "https://www.youtube.com/embed/_V8eKsto3Ug", // R Programming Tutorial by freeCodeCamp
  },
  {
    title: "Data Science: R Programming Complete Diploma",
    progress: "95% complete",
    videoUrl: "https://www.youtube.com/embed/_V8eKsto3Ug", // R Programming Tutorial by freeCodeCamp
  },
  {
    title: "Data Science: R Programming Complete Diploma",
    progress: "95% complete",
    videoUrl: "https://www.youtube.com/embed/_V8eKsto3Ug", // R Programming Tutorial by freeCodeCamp
  },
];

const CoursesPage = () => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2, // Decreased to fit larger video size
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="pt-10 w-full h-32 items-center">
        <h1 className="text-4xl tracking-[0.1em] font-bold text-center">
          Courses
        </h1>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar />

        <div className="p-4 w-full">
          {/* Current Courses Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Current Courses</h2>
            <Slider {...sliderSettings}>
              {coursesData.map((course, index) => (
                <div
                  key={index}
                  className="bg-white w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)] shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                >
                  <div className="relative h-80">
                    <iframe
                      src={course.videoUrl}
                      title={course.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-500">{course.progress}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </section>

          {/* Recommended Courses Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
            <div className="flex flex-wrap justify-center gap-6">
              {recommendedCoursesData.map((course, index) => (
                <div
                  key={index}
                  className="bg-white w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.33%-1.5rem)] xl:w-[calc(25%-1.5rem)] shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
                >
                  <div className="relative pb-[56.25%]">
                    <iframe
                      src={course.videoUrl}
                      title={course.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">
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
