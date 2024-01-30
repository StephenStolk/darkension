import React from 'react'
import {motion} from 'framer-motion';
import { fadeIn,fadeIn3, fadeIn4 } from '../Motion/variants';
const Benefit = () => {
  return (
    <>
        <section className="w-full md:w-[90%] flex mx-auto justify-evenly py-[10%] overflow-hidden">
            <img src="/public/benefit.png" className="w-[35%] hover:cursor-pointer hover:scale-105 transition ease-in-out delay-150"></img>
            <motion.div variants={fadeIn4(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='w-[60%] flex flex-col justify-start pl-[10%]'>
                <h1 className='text-2xl mb-[2%] text-purple-600 font-semibold'>
                    BUILD
                </h1>
                <h1 className='text-2xl mb-[2%] shadow-sm text-gray-200 font-mono'>
                    Bring your shopping experience to a new life
                </h1>
                <div className='flex flex-col text-xl mt-[2rem]'>
                <h1 className='pb-[3%] text-gray-500 font-bold text-2xl'>
                <span className='font-bold font-mono text-2xl txt text-gray-200'>
                Easy to Implement
                </span> with the installation of extension.
                </h1>
                <h1 className='pb-[3%] text-gray-500 font-bold text-2xl'>
                <span className='font-bold font-mono text-2xl txt text-gray-200'>
                Seamless Integration
                </span> of the model with your system.
                </h1>
                <h1 className='pb-[3%] text-gray-500 font-bold text-2xl'>
                <span className='font-bold font-mono text-2xl txt text-gray-200'>
                Protects your privacy
                </span> by promoting anonymity.
                </h1>
                <h1 className='pb-[3%] text-gray-500 font-bold text-2xl'>
                <span className='font-bold font-mono text-2xl txt text-gray-200'>
                Compatible
                </span> accross all browsers and software.
                </h1>
                </div>
            </motion.div>
        </section>
    </>
  )
}

export default Benefit