/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:text-gray-400 duration-500'>
            {props.children}
        </button>
    </>
  )
}

export default Button