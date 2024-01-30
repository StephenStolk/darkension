import React from 'react'
import {useState} from 'react';
const Accordion = ({name,id,desc}) => {
    const [show , setShow] = useState(false);
  return (
    <>
        <div className='w-[75%] flex justify-start mx-auto p-[1rem] mb-[1rem] bg-pad bg-gradient-to-r from-slate-600 to-slate-200 hover:bg-gradient-to-r hover:from-gray-600 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white hover:cursor-pointer'>
            <p className='md:text-2xl font-bold mr-[1rem] hover:cursor-pointer' onClick={()=> setShow(!show) }>{show? "-":"+"}</p>
            <h2 className='md:text-2xl mx-auto hover:cursor-pointer txt' onClick={()=> setShow(!show)}>{name}</h2>
        </div>
        {show && <p className='w-[75%] flex bg-gray-400 justify-start mx-auto p-[1rem]'>{desc}</p>}
    </>
  )
}

export default Accordion