import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Front = () => {
  return (
    <>
        <section className="w-full md:w-[90%] flex flex-col items-center mx-auto py-[13%] mb-[10%] overflow-hidden">
            <div className="mt-[10%]">
                <h1 className="text-white md:text-6xl text-3xl font-bold shadow-2xl  shadow-slat-700">DARK <span className='bg-yellow-700 px-[1rem] rounded-3xl hover:animate-ping hover:cursor-pointer shadow-2xl shadow-slate-500'>PATTERNS</span></h1>
            </div>
            <div className="md:mt-[5%] mt-[10%] md:text-3xl text-lg text-white txt text-center">
                How Companies Use Deceptive UI Design To Trick You Online
            </div>
            <button className='flex md:text-2xl border border-gray-300 p-[1rem] rounded-3xl mt-[10%] bg-gradient-to-r from-blue-500 to-sky-400 hover:cursor-pointer hover:bg-red-900'>
                Get Started<FaArrowRightLong className='w-[3rem] flex items-center m-auto'/>
            </button>
        </section>
    </>
  )
}

export default Front