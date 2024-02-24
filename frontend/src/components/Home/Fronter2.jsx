import React from 'react';
import { fadeIn, fadeIn2, fadeIn3 } from '../Motion/variants';
import { motion } from 'framer-motion';

const Fronter = () => {
  return (
    <section className='w-full md:w-[90%] flex justify-evenly bg-gray-900 mx-auto lg:py-[12%] py-[15%] md:flex-row flex-col overflow-hidden'>
      <motion.div variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='md:w-1/4 w-full flex flex-col justify-evenly p-[1rem] lg:pb-0 pb-[15%]'>
        
      </motion.div>
      <div className='w-full lg:w-3/4 flex lg:flex-row flex-col justify-around lg:pb-0 pb-[15%]'>
        <motion.div variants={fadeIn3(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-col lg:w-[28%] w-full bg-[rgba(254,253,253,0.09)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration-300 mx-auto mt-[2rem] lg:mt-0'>
          <img src="/f1.png" alt="" className='w-[30%] lg:w-[85%] mx-auto'></img>
          <p className="mt-[1rem] p-[2rem] text-md text-gray-100">
            Cross Browser Compatibility ensures integration across all platforms.
          </p>
        </motion.div>
        <motion.div variants={fadeIn2(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-col lg:w-[28%] w-full bg-[rgba(254,253,253,0.09)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration-300 mt-[2rem] lg:mt-0'>
          <img src="/f1.png" alt="" className='w-[85%] mx-auto'></img>
          <p className="mt-[1rem] p-[2rem] text-gray-100">
            97% accuracy model to predict the data via integration with NLP.
          </p>
        </motion.div>
        <motion.div variants={fadeIn3(4.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-col lg:w-[28%] w-full bg-[rgba(254,253,253,0.09)] rounded-[35px] h-96 shadow-3xl p-8 items-center justify-center hover:-translate-y-4 transition-all duration-300 mx-auto mt-[2rem] lg:mt-0'>
          <img src="/f1.png" alt="" className='w-[85%] mx-auto'></img>
          <p className="text-gray-100 mt-[1rem] p-[2rem]">
            Specially resolving 23 dark patterns including popups.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Fronter;
