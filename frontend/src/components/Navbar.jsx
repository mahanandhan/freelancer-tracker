// Navbar.js (update existing or similar)
import React, { useState } from 'react';
import image from '../assets/Screenshot_2025-10-01_132851-removebg-preview.png';
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const HamburgerIcon = ({ isOpen }) => (
  <div className="flex flex-col justify-center space-y-1.5 cursor-pointer">
    <div className={`w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></div>
    <div className={`w-6 h-0.5 bg-gray-800 transition-opacity ${isOpen ? "opacity-0" : "opacity-100"}`}></div>
    <div className={`w-6 h-0.5 bg-gray-800 transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='fixed top-0 left-64 right-0 bg-white shadow px-4 py-3 md:px-6 z-30 flex items-center justify-between'>
      {/* Logo */}
      <div className='flex items-center'>
        <img className='w-12 h-12 md:w-14 md:h-14 mr-3' src={image} alt="logo" />
        <h2 className='text-xl md:text-2xl font-bold text-gray-800'>Team</h2>
      </div>

      {/* Search */}
      <div className='flex-grow max-w-md mx-8 relative'>
        <input
          type="text"
          placeholder='Search'
          className='w-full border border-gray-200 bg-gradient-to-r from-blue-50 to-white px-4 py-2 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-300 placeholder-gray-400 pr-10'
        />
        <CiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {/* Profile */}
      <button className='flex items-center space-x-2 text-gray-700 whitespace-nowrap'>
        <CgProfile size={30} />
        <p className='font-medium text-base'>Narayanam Mahanandhan</p>
      </button>
    </div>
  )
}

export default Navbar;
