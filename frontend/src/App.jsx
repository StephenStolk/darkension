import React from 'react'
import { Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Publication from './pages/Publication'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './components/Home/Footer'
import DarkPattern2 from './pages/DarkPattern2'
import NavBar2 from './pages/NavBar2'
const App = () => {
  return (
    <>
      <NavBar2 />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/darkpattern" element={<DarkPattern2 />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/feedback" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App