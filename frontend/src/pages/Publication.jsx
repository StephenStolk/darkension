import React from 'react'
import { IoMdSettings } from "react-icons/io";
import {motion} from 'framer-motion'
import { fadeIn, fadeIn2, fadeIn3, fadeIn4 } from '../components/Motion/variants';
const Publication = () => {
  return (
    <>
        <section className='w-[90%] mt-[5%] mx-auto pb-[15%]'>
            <div className='w-full flex flex-col'>
            <motion.h1 variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='text-5xl p-[2rem] text-gray-100 font-mono font-bold text-center'> WORKS</motion.h1>
                <div className='w-full flex flex-col text-start hover:scale-105 hover:cursor-pointer pt-[3rem]'>
                    
                    <motion.div variants={fadeIn4(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='w-[85%] p-[5%] justify-center mx-auto border rounded-xl shadow-lg shadow-white'>
                        <motion.span variants={fadeIn3(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='text-4xl font-bold txt text-white'> ML MODEL </motion.span>
                        <motion.div variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-row justify-around mx-auto mt-[1rem]'>
                            <p className='text-gray-400 text-start p-[1rem] text-3xl txt'>The model works on Support Vector Classification enhanced by HyperParameter Tuning and Grid Search. The cross verification system using NLP to enhance the accuracy and the reliability. This makes the model robust.
                           </p>
                            <IoMdSettings size={150} className='text-white hover:animate-spin flex mx-auto w-[50%]' />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeIn4(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='w-[85%] p-[5%] justify-center mx-auto mt-[2rem] shadow-lg shadow-white'>
                        <motion.span variants={fadeIn3(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='text-4xl txt font-bold ml-[20%] text-gray-900'> WORKING </motion.span>
                        <motion.div variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-row justify-around mx-auto mt-[1rem]'>
                        <IoMdSettings size={150} className='text-white hover:animate-spin flex mx-auto w-[50%]' />
                            <p className='text-gray-600 text-start txt p-[1rem] text-3xl'>The model requests for the url from the user. The text contents are web scraped and passed to the model to test against it. The result of the possibility accurately incorporated and presented to the end user.</p>
                            
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeIn3(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='w-[85%] p-[5%] justify-center mx-auto mt-[2rem]  shadow-lg shadow-white'>
                        <span className='text-4xl font-bold txt text-gray-900'> WEB PLATFORM </span>
                        <motion.div variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-row justify-around mx-auto'>
                            <p className='text-gray-600 txt p-[1rem] text-3xl font-bold text-start mt-[1rem]'>The web platform broadens the horizons of our end product. The web platform offers the product as a form of the SaaS. <br/> The web platform has a feedback system to accumulate the reviews from the end user. The url the user is tested can also be passed as complaint. <b/> The web platform also helps in creating awareness about the dark pattern through knowledge sharing of different dark patterns.</p>
                            
                            <IoMdSettings size={150} className='hover:animate-spin text-white flex mx-auto w-[50%]' />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='w-[85%] p-[5%] justify-center mx-auto mt-[2rem] border shadow-lg shadow-white '>
                        <motion.span variants={fadeIn2(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='text-4xl txt font-bold ml-[25%] text-white'> LOCAL HOSTING </motion.span>
                        <motion.div variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-row justify-around mx-auto mt-[1rem]'>
                        <IoMdSettings size={150} className='text-white flex mx-auto w-[50%]' />
                            <motion.p variants={fadeIn4(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='text-gray-400 txt p-[1rem] text-3xl text-start'> The resources have been made open to the contributors. The user can download and host the server locally heeding to the necessary changes.</motion.p>
                            
                           
                        </motion.div>
                    </motion.div>
                    <motion.div variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='w-[85%] p-[5%] justify-center mx-auto mt-[4rem] border shadow-lg shadow-white'>
                        <motion.span variants={fadeIn2(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='text-4xl font-bold txt text-white'> Tk GUI TOOLKIT </motion.span>
                        <motion.div variants={fadeIn3(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-row justify-around mx-auto mt-[1rem]'>
                      
                            <p className='text-gray-400 txt p-[1rem] text-3xl text-start'> The integration of this library helped in creating user interface. It helped in organizing the data into the readable format for the user. </p>
                            
                            <IoMdSettings size={150} className='text-white flex mx-auto w-[50%]' />
                        </motion.div>
                    </motion.div>
                  
                </div>
            </div>

            <div className='w-full flex flex-col'>
            <h1 className='text-5xl p-[2rem] text-gray-100 font-mono font-bold text-center'> FUTURE PROOFING AND STAGES</h1>
                <div className='w-full flex flex-col text-start'>
                    
                    <motion.div variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='w-[85%] p-[5%] justify-center mx-auto shadow-lg border shadow-white'>
                        <motion.span variants={fadeIn2(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='text-4xl txt font-bold text-white'> HUMAN IN THE LOOP SYSTEM (HITL) </motion.span>
                        <motion.div variants={fadeIn3(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-row justify-around mx-auto mt-[1rem]'>
                            <p className='text-gray-400 text-start p-[1rem] text-3xl txt'>
                            The HITL helps in modifying the dataset the user thinks might be recurring. The feedback given by user can help in modifying the result as per the user views incase of any discrepancy.
                           </p>
                            <IoMdSettings size={150} className='text-white hover:animate-spin flex mx-auto w-[50%]' />
                        </motion.div>
                    </motion.div>

                    <motion.div variants={fadeIn(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='w-[85%] p-[5%] justify-center mx-auto mt-[4rem] border shadow-lg shadow-white'>
                        <motion.span variants={fadeIn3(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='text-4xl font-bold txt text-white'> INTEGRATING CHATBOT </motion.span>
                        <motion.div variants={fadeIn4(3.2)} initial="hidden" whileInView={"show"} viewport={{once: false, amount: 0.7}} className='flex flex-row justify-around mx-auto'>
                        <IoMdSettings size={150} className='text-white flex mx-auto w-[50%] hover:animate-spin' />
                            <p className='text-gray-400 text-center p-[1rem] text-3xl txt'>The conversation between ml model and end user will happen through Natural Language Processing. This service can be made applicable on the web platform making it more user friendly.</p>
                            
                        </motion.div>
                    </motion.div>

                    {/* <div className='w-[85%] p-[5%] justify-center mx-auto bg-sky-100 mt-[2rem]'>
                        <span className='text-3xl'> ML MODEL </span>
                        <div className='flex flex-row justify-around mx-auto'>
                            <p className='text-gray-200 text-center p-[1rem] text-2xl'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In sequi ullam expedita dolores. Quas quisquam accusamus facilis labore nobis possimus!</p>
                            <IoMdSettings size={150} className='flex mx-auto w-[50%]' />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    </>
  )
}

export default Publication