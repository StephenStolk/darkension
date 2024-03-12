/* eokayslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Publication from './pages/Publication'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Footer from './components/Home/Footer'
import DarkPattern2 from './pages/DarkPattern2'
import NavBar2 from './pages/NavBar2'
import Newsletter from './components/Newsletter/Newsletter'
import Copyright from './components/Copyright/Copyright'
const App = () => {
  return (
    <>
      <NavBar2 />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dark-patterns" element={<DarkPattern2 />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/feedback" element={<Contact />} />
      </Routes>
      <Footer />
      <Newsletter />

    </>
  )
}

export default App
