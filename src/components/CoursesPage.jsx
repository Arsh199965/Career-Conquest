import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sidebar from "./Sidebar";

const coursesData = [
  {
    title: "The Complete 2024 Web Development Bootcamp",
    progress: "79% complete",
    image: "/path/to/image1.jpg",
  },
  {
    title: "Automated Machine Learning for Beginners",
    progress: "1% complete",
    image: "/path/to/image2.jpg",
  },
  {
    title: "Linux Command Line Terminal Basic for Beginners",
    progress: "START COURSE",
    image: "/path/to/image3.jpg",
  },
  {
    title: "React - Learn React with Hooks by creating a Roguelike",
    progress: "START COURSE",
    image: "/path/to/image4.jpg",
  },
];

const recommendedCoursesData = [
  {
    title: "Python, Flask Framework And Django Course For Beginners",
    progress: "START COURSE",
    image: "/path/to/image5.jpg",
  },
  {
    title: "Flask, desarrollo web con Python",
    progress: "START COURSE",
    image: "/path/to/image6.jpg",
  },
  {
    title: "JavaScript Practicals Crash Course",
    progress: "START COURSE",
    image: "/path/to/image7.jpg",
  },
  {
    title: "Data Science: R Programming Complete Diploma",
    progress: "95% complete",
    image: "/path/to/image8.jpg",
  },
];

const CoursesPage = () => {
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center p-8">
      <div className="p-4">
        {/* Current Courses Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Current Courses</h2>
          <Slider {...sliderSettings}>
            {coursesData.map((course, index) => (
              <div key={index} className="p-2">
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="rounded-lg mb-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-500">{course.progress}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Recommended Courses Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Recommended Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {recommendedCoursesData.map((course, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                <img
                  src={course.image}
                  alt={course.title}
                  className="rounded-lg mb-4"
                />
                <div>
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <p className="text-gray-500">{course.progress}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CoursesPage;
