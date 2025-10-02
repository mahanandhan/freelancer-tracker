import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './components/Dashboard'
import AttendancePage from './pages/AttendencePage'
import TotalProjects from './pages/TotalProjects'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/attendence' element={<AttendancePage />} />
        <Route path='/projects' element={<TotalProjects />} />
      </Routes>
    </div>
  )
}

export default App
