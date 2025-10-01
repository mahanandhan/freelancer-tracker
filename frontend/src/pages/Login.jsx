import React, { useState } from 'react'
import image from '../assets/Screenshot_2025-10-01_132851-removebg-preview.png'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 via-blue-50 to-white">
      <div className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="flex flex-row justify-center items-center mb-8">
          <img className="w-14 h-14 mb-2" src={image} alt="img" />
          <h2 className="text-2xl font-bold text-gray-800">Team</h2>
        </div>
        <div className="flex flex-col space-y-5">
          <input
            type="text"
            className="w-80 bg-gradient-to-r from-blue-50 to-white px-4 py-3 rounded-2xl border-none shadow focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
            placeholder="Username"
          />
          <input
            type="email"
            className="w-80 bg-gradient-to-r from-blue-50 to-white px-4 py-3 rounded-2xl border-none shadow focus:ring-2 focus:ring-blue-300 placeholder-gray-400"
            placeholder="Email"
          />
          <div className="relative w-80">
            <input
              type={showPassword ? "text" : "password"}
              className="w-full bg-gradient-to-r from-blue-50 to-white px-4 py-3 rounded-2xl border-none shadow focus:ring-2 focus:ring-blue-300 placeholder-gray-400 pr-20"
              placeholder="Password"
            />
            <button
              type="button"
              className="absolute right-2 top-2 bottom-2 my-auto bg-blue-100 rounded-2xl px-5 py-1 text-blue-700 font-medium focus:outline-none"
              onClick={() => setShowPassword((prev) => !prev)}
              tabIndex={-1}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button className="w-80 bg-gradient-to-r from-blue-800 to-blue-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:from-blue-900 hover:to-blue-700 transition">Login</button>
        </div>
        <div className="flex justify-between mt-5 text-sm">
          <a href="#" className="text-gray-500 hover:underline">Forgot password</a>
          <a href="/signup" className="text-blue-700 font-medium hover:underline">Sign up</a>
        </div>
      </div>
    </div>
  )
}

export default Login
