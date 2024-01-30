import React from "react";
import { motion } from "framer-motion";
import { fadeIn,fadeIn2,fadeIn3,fadeIn4 } from "../Motion/variants";
const Launch = () => {
  return (
    <>
      <section className="w-full md:w-[90%] flex lg:flex-row flex-col justify-center mx-auto py-[7rem] px-[2rem] bg-gray-900">
  
        <div className="md:w-[90%] w-full flex">
        <div className="flex flex-col justify-around lg:mb-0 mb-[3rem]">
        <div className="flex sm:justify-evenly sm:flex-row flex-col justify-center lg:my-0 my-[2rem]">
          <motion.div variants={fadeIn2(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}}className="md:w-[40%] flex flex-col mx-[1rem] bg-gradient-to-r from-gray-700 to-gray-500 px-[5%] bgborder2 py-[4%] shadow-xl hover:bg-gray-600 hover:cursor-pointer">
          <h1 className="text-2xl mb-[0.5rem] text-white txt">Get it ready.</h1>
            <h1 className="text-md text-gray-300 txt">
              With all of your app settings, permissions, and code review.
            </h1>
          </motion.div>
          <motion.div variants={fadeIn4(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className="md:w-[40%] flex flex-col mx-[1rem] bg-gradient-to-r from-gray-700 to-gray-500  px-[5%] bgborder2 py-[4%] shadow-xl hover:bg-sky-200 hover:cursor-pointer">
          <h1 className="text-2xl mb-[0.5rem] text-white txt">Get it ready.</h1>
            <h1 className="text-md text-gray-300 txt">
              With all of your app settings, permissions, and code review.
            </h1>
          </motion.div>
          </div>
          <div className="flex md:flex-row flex-col justify-around">
          <motion.div variants={fadeIn(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className="md:w-[40%] flex flex-col mx-[1rem] bg-gradient-to-r from-gray-700 to-gray-500 px-[5%] bgborder2 py-[4%] shadow-xl hover:bg-sky-200 hover:cursor-pointer">
            <h1 className="text-2xl mb-[0.5rem] text-white txt">Get it ready.</h1>
            <h1 className="text-md text-gray-300 txt">
              With all of your app settings, permissions, and code review.
            </h1>
          </motion.div>
          <motion.div variants={fadeIn3(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className="md:w-[40%] flex flex-col mx-[1rem] bg-gradient-to-r from-gray-700 to-gray-500 px-[5%] bgborder2 py-[4%] shadow-xl hover:cursor-pointer">
          <h1 className="text-2xl mb-[0.5rem] text-white txt">Get it ready.</h1>
            <h1 className="text-md text-gray-300 txt">
              With all of your app settings, permissions, and code review.
            </h1>
          </motion.div>
          </div>
        </div>
          
        </div>
        <motion.div variants={fadeIn4(2.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className="flex">
        <img src="./public/loading.png" className="flex m-auto "></img>
        </motion.div>
      </section>
    </>
  );
};

export default Launch;
