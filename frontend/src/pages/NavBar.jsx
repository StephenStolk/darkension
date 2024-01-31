import React from 'react'
import {Link } from 'react-router-dom';
import Button from '../components/Home/Button';
const NavBar = () => {
  return (
    <>
        <nav className="w-[100%] md:flex md:items-center md:flex-row flex-col h-[3rem] mx-auto fixed top-0 left-0">
            <div className="flex w-1/2 items-center justify-start ml-[4rem]">
            <img src="" alt="logo"></img>
            <span className='font-bold text-white'> DARKENSION </span>
            </div>
            <div className="w-1/2 flex justify-evenly m-auto">
            <Link to="/"><span className="/publication">Home</span></Link>
                <Link to="/darkpattern"><span className="">Dark Patterns</span></Link>
                <Link to="/"><span className="">The Project</span></Link>
                <Link to="/publication"><span className="">Publications</span></Link>
                <Link to="/feedback"><span className="">Feedback</span></Link>
            </div>
            
        </nav>
    </>
  )
}

export default NavBar