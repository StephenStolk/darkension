import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { fadeIn,fadeIn2,fadeIn3,fadeIn4 } from '../Motion/variants';
const Footer = () => {
  return (
    <>
        <section className='w-[100%] bg-gradient-to-r from-gray-950 to-gray-800 mx-auto flex justify-evenly py-[3%]'>
            <div className="hidden md:flex flex-col m-auto py-[2rem]">
            <Link to="/"><span className="text-lg  text-gray-100 txt">Home</span></Link>
                <Link to="/darkpattern"><span className="text-lg txt text-gray-100">Dark Patterns</span></Link>
                <Link to="/"><span className="text-lg txt text-gray-100 w-[1%]">The Project</span></Link>
                <Link to="/"><span className="text-lg txt text-gray-100">Publications</span></Link>
                <Link to="/feedback"><span className="text-lg txt text-gray-100">Feedback</span></Link>
            </div>
            <div className='md:w-[2/3] flex flex-col mx-auto'>
                <span className='text-xl font-semibold mt-[4rem] md:mt-[1rem] text-gray-500'> Contact Us</span>
                <span className='text-lg  text-gray-50 font-mono mt-[1rem]'>
                    paulwalkersb@gmail.com
                </span>
               <div className='flex flex-col w-full justify-center'>
             
              <button type="submit" className='bg-purple-400 rounded-xl p-[0.5rem] w-[full] mt-[1rem] hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white  text-lg'>
                    <a href='https://drive.google.com/drive/folders/1lLn2nrHmyv8JQVgdrySSczN_LreM0xTH' target='_blank'>Download</a>
                </button>
                <button className='w-[full] flex mx-auto border p-[0.5rem] rounded-xl text-lg font-semibold mt-[1rem] bg-sky-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white px-[15%] mb-[2rem]'>
                Get Started <FaArrowRightLong className='w-[3rem] flex items-center m-auto' />
            </button>
               </div>
            </div>
        </section>
    </>
  )
}

export default Footer