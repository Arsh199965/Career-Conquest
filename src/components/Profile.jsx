import React from 'react';
const Profile=()=>{
    return(
        <div className="profile">
          {/*side panel */}
        <h1>CAREER CONQUEST</h1>
        <aside className="w-52 bg-gray-100 shadow-md h-auto p-6">
          <ul className="space-y-4">
            <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Home
            </li>
            <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Profile
            </li>
            <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Community
            </li>
            <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Courses
            </li>
            <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Interviews
            </li>
            <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer">
              Settings
            </li>
            <li className="hover:bg-gray-200 p-2 rounded-md cursor-pointer text-red-500">
              Log Out
            </li>
          </ul>
        </aside>

        <div className='Main-Section'>
            <img src={image1} className="border-7 rounded-xl" alt="" />
        </div>

        </div>
    )
};
export default Profile;