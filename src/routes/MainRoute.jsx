import React from 'react'
import {Routes,Route} from "react-router-dom"
import Signup from '../pages/auth/Signup'
import DashBoard from '../components/DashBoard'
import Login from '../pages/auth/Login'
const MainRoute = () => {
  return (
   <Routes>

        <Route path="/" element={<DashBoard/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  )
}

export default MainRoute
