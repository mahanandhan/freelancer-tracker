// Dashboard.js - Full Dashboard layout including Sidebar, Navbar, TopMembers, Notifications, Chart and ProjectsPage

import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import TopMembers from './TopMembers';
import Notifications from './Notifications';
import Chart from './Chart';
import ProjectsPage from '../pages/ProjectsPage';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-[#e6eef9] overflow-hidden">
      {/* Sidebar - stays on left */}
      <Sidebar />

      {/* Main container (everything except sidebar) */}
      <div className="flex-1 flex flex-col ml-64 overflow-hidden">
        {/* Navbar across the top */}
        <Navbar />

        {/* Dashboard card */}
        <div className="flex-1 flex items-center justify-center px-8 py-6 overflow-hidden mt-16">
          <div className="bg-white rounded-2xl shadow-2xl flex w-full max-w-7xl h-[90vh] p-8 gap-6 overflow-hidden">
            {/* Main center content (charts and projects) */}
            <div className="flex flex-1 flex-col gap-6 min-h-0 overflow-auto">
              {/* Charts: Analysis & Corpalytics stacked */}
              <Chart />
              {/* Post projects below charts */}
              <ProjectsPage />
            </div>

            {/* Right sidebar */}
            <div className="w-80 flex flex-col gap-6 min-h-0 overflow-auto">
              <TopMembers />
              <Notifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
