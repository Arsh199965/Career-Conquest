import React from "react";

const DashboardPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="p-6 w-full h-32 items-center">
        <h1 className="text-4xl tracking-[0.3em] font-bold text-center">CAREER CONQUEST</h1>
      </header>

      <div className="flex flex-grow">
        {/* Sidebar */}
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

        {/* Main Content */}
        <div className="border-2 border-black flex-auto mx-24 p-4">
          {/* Job Matches */}
          <h2 className="text-xl font-semibold mb-4 px-4">Job Matches</h2>
          <div className=" mb-10 border-2 border-gray-300 mx-4">
            <table className="min-w-full bg-white border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border py-2 px-40 text-center">Company</th>
                  <th className="border py-2 px-4 text-center">Role</th>
                  <th className="border py-2 px-4  text-center">CTC</th>
                  <th className="border py-2 px-4">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border py-2 px-4">ABC Limited</td>
                  <td className="border py-2 px-4">Python Developer</td>
                  <td className="border py-2 px-4 text-center">20 LPA</td>
                  <td className="border py-2 px-4">Gurugram, Haryana, India</td>
                </tr>
                <tr>
                  <td className="border py-2 px-4">XYZ Limited</td>
                  <td className="border py-2 px-4">Jr. Java Developer</td>
                  <td className="border py-2 px-4 text-center">24 LPA</td>
                  <td className="border py-2 px-4">
                    Noida, Uttar Pradesh, India
                  </td>
                </tr>
                <tr>
                  <td className="border py-2 px-4">PQR Limited</td>
                  <td className="border py-2 px-4">Data Engineer</td>
                  <td className="border py-2 px-4 text-center">28 LPA</td>
                  <td className="border py-2 px-4">
                    San Francisco, California, USA
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 mx-4 ">
            <div>
              <h2 className="text-xl font-semibold mb-4">Ongoing Courses</h2>
              {/* Ongoing Courses */}
              <div className="bg-white border-2 flex-grow border-gray-300 text-center">
                <div className="">
                  <div className="px-16 py-8 border-b-2 border-gray-300">
                    <h3 className="font-semibold">Advance Web Development</h3>
                    <div className="bg-gray-300 rounded-full h-2 w-full mt-1">
                      <div className="bg-gray-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  <div className="px-16 py-8 border-b-2 border-gray-300">
                    <h3 className="font-semibold">Basics of Business</h3>
                    <div className="bg-gray-300 rounded-full h-2 w-full mt-1">
                      <div className="bg-gray-600 h-2 rounded-full w-1/2"></div>
                    </div>
                  </div>
                  <div className="px-16 py-8 border-b-2 border-gray-300">
                    <h3 className="font-semibold">Intermediate UI Designing</h3>
                    <div className="bg-gray-300 rounded-full h-2 w-full mt-1">
                      <div className="bg-gray-600 h-2 rounded-full w-1/3"></div>
                    </div>
                  </div>
                  <div className="px-16 py-8 border-b-2 border-gray-300">
                    <h3 className="font-semibold">Fluent Business French</h3>
                    <div className="bg-gray-300 rounded-full h-2 w-full mt-1">
                      <div className="bg-gray-600 h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 grid-rows-2">
              {/* Upcoming Interviews */}
              <div>
                <h2 className="text-xl font-semibold mb-4">
                  Upcoming Interviews
                </h2>
                <div className="bg-white border-2 border-gray-300 border-collapse">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="border py-2 px-4">Company</th>
                        <th className="border py-2 px-4">Location</th>
                        <th className="border py-2 px-4">Date/Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border py-2 px-4">-</td>
                        <td className="border py-2 px-4">-</td>
                        <td className="border py-2 px-4">-</td>
                      </tr>
                      <tr>
                        <td className="border py-2 px-4">-</td>
                        <td className="border py-2 px-4">-</td>
                        <td className="border py-2 px-4">-</td>
                      </tr>
                      <tr>
                        <td className="border py-2 px-4">-</td>
                        <td className="border py-2 px-4">-</td>
                        <td className="border py-2 px-4">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <h2 className="text-xl font-semibold my-4">
                  Portfolio Building
                </h2>
                {/* Portfolio Building */}
                <div className="bg-white border-2 border-gray-300 grid grid-cols-2 grid-rows-2 gap-y-2 grid-lines-both text-center p-4">
                  
                    <h2>Block Chain Payment Interface</h2>
                    <h2>New ML Algorithm</h2>
                    <h2>Smart Content Filter</h2>
                    <h2>AR Path Navigator</h2>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
