import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { fadeIn4,fadeIn } from '../Motion/variants';
const Modelbar = () => {
  return (
    <>
        <motion.section variants={fadeIn4(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='lg:w-[90%] w-full flex flex-col justify-center mx-auto py-[10%] lg:py-[6%] text-center mt-[1rem]'>
            <h1 className='mx-auto md:text-3xl text-2xl mt-[1rem] txt text-gray-200'> Start testing your ecommerce url </h1>
            <h1 className='mx-auto md:text-2xl text-xl mt-[0.85rem] text-gray-500'>Skip the Deceptive Designs </h1>
            <motion.button variants={fadeIn(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex items-center mx-auto border p-[1rem] rounded-3xl md:text-xl font-semibold shadow-md shadow-slate-500 mt-[5rem] bg-sky-300 mb-[3rem] hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white md:mb-0'>
                <a href='https://drive.google.com/drive/folders/1lLn2nrHmyv8JQVgdrySSczN_LreM0xTH' target='blank'>Get Started </a><FaArrowRightLong className='md:w-[3rem] flex items-center m-auto' />
            </motion.button>
        </motion.section>
    </>
  )
}

export default Modelbar