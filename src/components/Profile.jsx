import React from "react";
import Sidebar from "./Sidebar"; // Assuming Sidebar is already imported
import profilePic from "../assets/Face.jpeg"; // Replace with your actual image import
import {
  FaMapMarkerAlt,
  FaBuilding,
  FaEnvelope,
  FaPhoneAlt,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

// Data objects
const userData = {
  name: "Arsh Ahmad",
  title: "Candidate",
  location: "Delhi, India",

  email: "navneetSaurav@bhavya.com",
  phone: "+91 42078600",
};

const onTheWebLinks = [
  { icon: <FaInstagram className="mr-1" />, label: "arsh_ahmad", href: "#" },
  { icon: <FaTwitter className="mr-1" />, label: "ahamd_arsh", href: "#" },
  { icon: <FaLinkedin className="mr-1" />, label: "arsh199965", href: "#" },
];

const skills = [
  "Web Dev",
  "Python Programming",
  "Java Programming",
  "Graphic Design",
  "Product Management",
];

const sectors = [
  "Internet Services",
  "Retail",
  "Management",
  "E-commerce",
  "Product Development",
  "Startup Advisor",
];

const countries = ["India", "Japan", "United Kingdom", "Germany"];

const languages = ["English", "Hindi"];

const attachments = [
  { file: "resume.pdf" },
  { file: "portfolio-presentation.ppt" },
  { file: "department_showreel.mov" },
];

// Profile component
const Profile = () => {
  return (
    <div className=" min-h-screen bg-gradient-to-r from-blue-50 to-purple-100">
      <header className="pt-10 w-full h-32 items-center">
        <h1 className="text-4xl tracking-[0.2em] font-bold text-center">
          Profile
        </h1>
      </header>
      <div className="flex flex-grow">
        <Sidebar />
        <div className="mx-24">
          <div className="bg-white shadow-2xl p-6">
            <div className="flex justify-between border-b pb-6 mb-6">
              <div className="flex">
                <img
                  src={profilePic}
                  alt="Profile"
                  className="rounded-full w-28 h-28 object-cover"
                />
                <div className="ml-6">
                  <h1 className="text-2xl font-bold">{userData.name}</h1>
                  <p className="text-sm text-gray-500">{userData.title}</p>
                  <div className="flex mt-2 text-gray-500">
                    <p className="mr-4 flex items-center">
                      <FaMapMarkerAlt className="mr-1" /> {userData.location}
                    </p>
                    <p className="mr-4 flex items-center">
                      <FaBuilding className="mr-1" /> {userData.department}
                    </p>
                    <p className="flex items-center">
                      <FaEnvelope className="mr-1" /> {userData.email}
                    </p>
                  </div>
                  <p className="mt-2 text-gray-500 flex items-center">
                    <FaPhoneAlt className="mr-1" /> {userData.phone}
                  </p>
                </div>
              </div>
              <div className="flex items-center">
                <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 py-2 rounded-md">
                  Add to Cardholder
                </button>
              </div>
            </div>

            {/* On the web */}
            <Section title="On the web">
              <div className="flex space-x-4 text-blue-500">
                {onTheWebLinks.map((link, index) => (
                  <a key={index} href={link.href} className="flex items-center">
                    {link.icon} {link.label}
                  </a>
                ))}
              </div>
            </Section>

            {/* About Section */}
            <Section title="About">
              <p className="text-gray-600 text-sm my-4">
                I like flowers. I like cities. I like buildings. I like forests.
                Do not cut trees.
              </p>

              {/* Attachments */}
              <Section title="Attachments">
                <ul className="text-blue-500 text-sm">
                  {attachments.map((attachment, index) => (
                    <li key={index} className="mb-2">
                      <i className="fas fa-file-alt"></i> {attachment.file}
                    </li>
                  ))}
                </ul>
              </Section>
            </Section>

            {/* Skills and Expertise */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Section title="Skills">
                  <SkillBadgeList
                    items={skills}
                    colorClass="bg-blue-100 text-blue-600"
                  />
                </Section>
                <Section title="Sectors of Interest">
                  <SkillBadgeList
                    items={sectors}
                    colorClass="bg-gray-100 text-gray-600"
                  />
                </Section>
              </div>

              {/* Countries and Languages */}
              <div>
                <Section title="Countries of Interest">
                  <SkillBadgeList
                    items={countries}
                    colorClass="bg-purple-100 text-purple-600"
                  />
                </Section>
                <Section title="Languages">
                  <SkillBadgeList
                    items={languages}
                    colorClass="bg-pink-100 text-pink-600"
                  />
                </Section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Reusable section component
const Section = ({ title, children }) => (
  <div className="mb-6">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

// Reusable skill badge list component
const SkillBadgeList = ({ items, colorClass }) => (
  <div className="flex flex-wrap">
    {items.map((item, index) => (
      <span
        key={index}
        className={`${colorClass} px-3 py-1 rounded-full text-xs font-semibold mr-2 mb-2`}
      >
        {item}
      </span>
    ))}
  </div>
);

export default Profile;
