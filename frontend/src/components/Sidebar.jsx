// Sidebar.js
import React from 'react';
import { FaHome, FaClipboardList, FaBoxOpen, FaCalendarAlt, FaCog } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-[#133A71] text-white flex flex-col py-6 px-4 rounded-r-2xl shadow-lg z-20">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-10 pl-2">
        <div className="bg-white rounded-lg px-3 py-2 font-bold text-[#133A71] text-xl">Team</div>
      </div>

      {/* Menu */}
      <nav className="flex flex-col space-y-4 mt-6">
        <button className="flex items-center space-x-3 px-4 py-3 rounded-xl bg-[#1A4A94] font-medium focus:outline-none transition cursor-pointer">
          <FaHome size={20} />
          <span className="text-base cursor-pointer">Dashboard</span>
        </button>
        <button className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-[#1A4A94] font-medium focus:outline-none transition cursor-pointer">
          <FaClipboardList size={20} onClick={() => navigate('/projects')}/>
          <span className="text-base cursor-pointer" onClick={() => navigate('/projects')}>Project</span>
        </button>
        <button className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-[#1A4A94] font-medium focus:outline-none transition cursor-pointer">
          <FaBoxOpen size={20} />
          <span className="text-base cursor-pointer">Accpeted</span>
        </button>
        <button className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-[#1A4A94] font-medium focus:outline-none transition cursor-pointer">
          <FaCalendarAlt size={20} onClick={() => navigate('/attendence')}/>
          <span className="text-base cursor-pointer" onClick={() => navigate('/attendence')}>Attendence</span>
        </button>
        <button className="flex items-center space-x-3 px-4 py-3 rounded-xl hover:bg-[#1A4A94] font-medium focus:outline-none transition cursor-pointer">
          <FaCog size={20} />
          <span className="text-base cursor-pointer">Setting</span>
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
