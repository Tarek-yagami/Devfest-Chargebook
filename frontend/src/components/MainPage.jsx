import React from 'react';
import { FaChartLine, FaMoneyBillWave, FaFileAlt, FaUserCog, FaSignOutAlt } from 'react-icons/fa';

const MainPage = () => {
  return (
    <div className="flex flex-col h-screen bg-[#F9FAFB]">
      {/* Navbar */}
      <nav className="bg-[#36353F] text-white p-4 flex justify-between items-center shadow-md">
        <h1 className="text-3xl font-bold">FinSight</h1>
        <p className="flex-1 text-center text-2xl font-semibold p-2 rounded-lg text-white">
          Welcome to FinSight!
        </p>
        <div className="flex items-center space-x-6">
          {/* Navbar Buttons */}
          <a
            href="/settings"
            className="flex items-center bg-transparent hover:bg-[#886EE6] text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg p-2 text-lg"
          >
            <FaUserCog className="mr-1" />
            Settings
          </a>
          <a
            href="/logout"
            className="flex items-center bg-transparent hover:bg-[#886EE6] text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg p-2 text-lg"
          >
            <FaSignOutAlt className="mr-1" />
            Logout
          </a>
        </div>
      </nav>

      {/* Layout */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-[#B3D9AD] w-72 p-6 shadow-lg flex flex-col">
          <h2 className="text-xl font-semibold text-[#36353F] mb-6">MENU</h2>
          <ul className="space-y-5">
            <li>
              <a
                href="/dashboard"
                className="flex items-center bg-transparent hover:bg-[#886EE6] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg p-2 text-lg"
              >
                <FaChartLine className="text-[#36353F] mr-3" />
                My Dashboard
              </a>
            </li>
            <li>
              <a
                href="/expenses"
                className="flex items-center bg-transparent hover:bg-[#886EE6] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg p-2 text-lg"
              >
                <FaMoneyBillWave className="text-[#36353F] mr-3" />
                My Expenses
              </a>
            </li>
            <li>
              <a
                href="/reports"
                className="flex items-center bg-transparent hover:bg-[#886EE6] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg p-2 text-lg"
              >
                <FaFileAlt className="text-[#36353F] mr-3" />
                My Reports
              </a>
            </li>
          </ul>

          {/* Add space before Settings and Logout buttons */}
          <div className="mt-16" /> {/* Spacer */}

          <h2 className="text-xl font-semibold text-[#36353F] mb-6">ACCOUNT</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/settings"
                className="flex items-center bg-transparent hover:bg-[#886EE6] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg p-2 text-lg"
              >
                <FaUserCog className="text-[#36353F] mr-3" />
                Settings
              </a>
            </li>
            <li>
              <a
                href="/logout"
                className="flex items-center bg-transparent hover:bg-[#886EE6] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 rounded-lg p-2 text-lg"
              >
                <FaSignOutAlt className="text-[#36353F] mr-3" />
                Logout
              </a>
            </li>
          </ul>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-8 bg-white">
          {/* Add your main content here */}
        </main>
      </div>
    </div>
  );
};

export default MainPage;
