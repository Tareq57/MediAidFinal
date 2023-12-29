import React from 'react'

import About from '../pages/About'
import Home from '../pages/Home'
import Doctors from '../pages/Doctors/Doctors'
import DoctorDetails from '../pages/Doctors/DoctorDetails'
import Login from '../pages/Login'

import { Routes, Route } from 'react-router-dom'

const Routers = () => {
  return <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/doctors" element={<Doctors />} />
    <Route path="/doctors/:id" element={<DoctorDetails />} />
    <Route path="/login" element={<Login />} />
  </Routes>
}

export default Routers