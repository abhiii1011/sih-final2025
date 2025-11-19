import React from 'react'
import MainRoute from './routes/MainRoute'
import Navbar from './components/Navbar'
import TopNav from './components/TopNav'
const App = () => {
  return (
    <div>
      <TopNav/>
      <Navbar/>
  <MainRoute/>
    </div>
  )
}

export default App
