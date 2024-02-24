/* eslint-disable no-unused-vars */

import React from 'react'
import { fadeIn,fadeIn2,fadeIn3,fadeIn4 } from '../Motion/variants'
import {motion} from "framer-motion";
const Fronter = () => {
  return (
    <section className='w-full lg:w-[95%] flex mx-auto bg-gray-800 py-[7em] flex-col md:flex-row'>
      <div className='flex flex-col w-[90%] md:w-[60%] mx-auto md:mx-0 text-center md:text-start md:pl-[1rem]'>
      <h1 className='md:text-2xl text-xl text-white/70 font-[Poppins] font-bold'> Why we are different from others ?</h1>
        <p className='text-md md:text-xl text-white/80 font-serif mt-[1rem]'>
          We offer extension, cross browser compatibility and so more.
        </p>
      </div>
      <div className='flex w-full md:w-[3/4] justify-around mx-auto flex-col md:flex-row'>
        <motion.div className='flex flex-col mx-auto md:mx-0 justify-center mt-[2rem] h-[20rem] md:h-[25rem] w-[90%] md:w-[31%] bg-gray-500 p-[2rem] px-[3rem] rounded-3xl' variants={fadeIn(3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
          <img src='front4.jpeg' className="rounded-full md:w-[12rem] w-[10rem] mx-auto" alt="image1"></img>
          <p className='text-md text-center mt-[1rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae aperiam reiciendis ullam, quidem modi?
          </p>
        </ motion.div>
        <motion.div className='flex flex-col mx-auto md:mx-0 justify-center w-[90%] h-[20rem] md:h-[25rem] md:w-[31%] bg-gray-500 p-[2rem] px-[2rem] rounded-3xl mt-[2rem] md:mt-[5rem]' variants={fadeIn4(2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
          <img src='front.jpeg' className="rounded-full md:w-[15rem] w-[10rem] mx-auto" alt="image1"></img>
          <p className='text-md text-center mt-[1rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae aperiam reiciendis ullam, quidem modi?
          </p>
        </motion.div>
        <motion.div className='flex flex-col mx-auto md:mx-0 justify-center w-[90%] md:w-[31%] bg-gray-500 p-[2rem] px-[2rem] rounded-3xl h-[20rem] md:h-[25rem] mt-[2rem]' variants={fadeIn3(3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}>
          <img src='front5.jpeg' className="rounded-full md:w-[15rem] w-[10rem] mx-auto" alt="image1"></img>
          <p className='text-md text-center mt-[1rem]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quae aperiam reiciendis ullam, quidem modi?
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Fronter