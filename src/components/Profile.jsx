import React, { useState } from 'react';
import profilePhoto from "../assets/blank-profile-md.jpg";
import logo from "../assets/logotrp 2.png";
import { Link } from "react-router-dom";
import setting from "../assets/setting-removebg-preview.png";

const navLinks = [
  { name: "Dashboard", link: "/dashboard" },
  { name: "Profile", link: "/profile" },
  { name: "Community", link: "/community" },
  { name: "Courses", link: "/courses" },
  { name: "Assessments", link: "/assessments" },
  { name: "Interviews", link: "/interviews" },
  { name: "Settings", link: "/settings" },
  { name: "Log Out", link: "/" },
];

const Profile = () => {
  return (
    <div className="profile z-10">
      {/* side panel */}
      <img src={logo} className='h-12 translate-y-[9px]' alt="Career Conquest"/>
      <aside className="w-52 bg-gray-100 shadow-xl translate-y-[80px] shadow-gray-300 border h-screen p-6">
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

        <div className='absolute top-8 left-[345px] w-[830px] rounded-xl h-40 bg-blue-200 z-100'>
           <p style={ {fontSize:35, paddingLeft:23}}>     There is no elevator to success, you<br />      have to take the stairs</p>
        </div> 

      <div>
        <img src={setting} alt="edit" className='absolute w-[40px] top-9 right-[100px]'/>
      </div>

      <div className="absolute top-8 left-1/2 mb-2 z-10">
        <img src={profilePhoto} className="border-7 rounded-full w-40 h-40 translate-x-[300px] shadow-xl" alt="" />
        
        {/* Username and Email Section */}
        <div className="flex flex-row mt-5 ml-[-290px] gap-8">
          <div className="flex space-between items-center mb-2">
            <label htmlFor="username" className="text-lg w-40">Username</label>
            <input type="text" id="username" className="bg-gray-200 shadow-xl p-2 rounded-md w-60 font-bold" readOnly placeholder="Username" />
          </div>
          <div className="flex justify-between items-center mb-2">
            <label htmlFor="email" className="text-lg w-40">Email Address</label>
            <input type="text" id="email" className="bg-gray-200 shadow-xl p-2 rounded-md w-60 font-bold" readOnly placeholder="user@gmail.com" />
          </div>
        </div>

        {/* GitHub, LinkedIn, and Description below Username and Email */}
        <div className="flex flex-col gap-4 mt-8 ml-[-290px] w-full pr-10">
          <div>
            <label htmlFor="GitHub" className="text-lg">Github</label>
            <input type="text" id="GitHub" className="bg-gray-200 p-2 shadow-xl rounded-md w-[830px] font-bold" readOnly placeholder="https://github.com/your-username" />
          </div>
          <div>
            <label htmlFor="linkedIn" className="text-lg">LinkedIn</label>
            <input type="text" id="linkedIn" className="bg-gray-200 shadow-xl p-2 rounded-md w-[830px] font-bold" readOnly placeholder="https://www.linkedin.com/in/your-username" />
          </div>
          <div className='flex flex-col space-between gap-7'>
            <label htmlFor="Skills" className="text-lg">Skills</label>
            <div className='flex flex-row gap-[80px]'>
              <input type="text" className='w-50 h-10 bg-gray-200 p-2 rounded-md font-bold shadow-xl' readOnly placeholder='Web Development'/>
              <input type="text" className='w-50 h-10 bg-gray-200 p-2 rounded-md font-bold shadow-xl' readOnly placeholder='Android Development'/>
              <input type="text" className='w-50 h-10 bg-gray-200 p-2 rounded-md font-bold shadow-xl' readOnly placeholder='Machine Learning'/>
            </div>
            <div className='flex flex-row gap-[80px]'>
              <input type="text" className='w-50 h-10 bg-gray-200 p-2 rounded-md font-bold shadow-xl' readOnly placeholder='Blockchain Development'/>
              <input type="text" className='w-50 h-10 bg-gray-200 p-2 rounded-md font-bold shadow-xl' readOnly placeholder='Front-end Development'/>
              <input type="text" className='w-50 h-10 bg-gray-200 p-2 rounded-md font-bold shadow-xl' readOnly placeholder='Backend Development'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
