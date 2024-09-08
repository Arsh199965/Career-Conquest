import React from "react";
import { Link } from "react-router-dom";
const navLinks = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Profile", link: "/profile" },
  { name: "Community", link: "/community" },
  { name: "Courses", link: "/courses" },
  { name: "Assessments", link: "/assessments" },
  { name: "Upcoming Events", link: "/interviews" },
  { name: "Settings", link: "/settings" },
  { name: "Log Out", link: "/" },
];

const Sidebar = () => {
  return (
    <aside className="w-52 min-w-[13rem] sm:w-64 lg:w-52 bg-gray-100 shadow-xl shadow-gray-300 border h-auto p-6">
      <ul className="space-y-6">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link
              to={link.link}
              className="hover:bg-gray-200 p-2 rounded-md cursor-pointer"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Sidebar;