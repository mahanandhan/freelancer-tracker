import React, { useState } from 'react'
import image from '../assets/Screenshot_2025-10-01_132851-removebg-preview.png'

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-50 to-white">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-sm">
        <div className="flex flex-row justify-center items-center mb-8">
          <img className="w-14 h-14 mb-2" src={image} alt="logo" />
          <h2 className="text-2xl font-bold text-gray-800">Team</h2>
        </div>
        <form className="space-y-5">
          {/* Full Name */}
          <input
            type="text"
            placeholder="Full Name"
            className="w-full bg-gradient-to-r from-blue-50 to-white px-4 py-3 rounded-2xl shadow border-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 transition"
            autoComplete="name"
          />
          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-gradient-to-r from-blue-50 to-white px-4 py-3 rounded-2xl shadow border-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 transition"
            autoComplete="email"
          />
          {/* Password with Show toggle */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full bg-gradient-to-r from-blue-50 to-white px-4 py-3 rounded-2xl shadow border-none focus:ring-2 focus:ring-blue-300 placeholder-gray-400 transition pr-20"
              autoComplete="new-password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-100 rounded-2xl px-5 py-1 text-blue-700 font-medium shadow-sm focus:outline-none transition"
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-semibold rounded-2xl shadow-lg hover:from-blue-900 hover:to-blue-700 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-sm mt-5">
          Already have an account?{' '}
          <a href="/" className="text-blue-700 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}

export default Signup
