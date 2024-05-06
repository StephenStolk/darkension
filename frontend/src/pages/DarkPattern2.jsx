/* eslint-disable no-unused-vars */
import React from 'react'
import {data} from '../data'
import {useState} from 'react';
import Accordion from '../components/DarkPattern/Accordion';
import {motion} from 'framer-motion'
import { fadeIn, fadeIn2, fadeIn3,fadeIn4 } from '../components/Motion/variants';
const DarkPattern2 = () => {
    const [datas,setDatas] = useState(data);
  return (
    <>
        <motion.section className='sm:w-[90%] w-full flex justify-center mx-auto flex-col mt-[15%] md:mt-[5%] lg:mt-[2%] bg-gray-780 overflow-hidden'>
        {
            datas.map((cur) => {
                const {name,id,desc} = cur;
                return <Accordion key={id} {...cur} />
            })
        }
        </motion.section>
    </>
  )
}

export default DarkPattern2
