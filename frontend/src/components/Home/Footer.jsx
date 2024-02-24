/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import {  FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaArrowRightLong } from "react-icons/fa6";
import Newsletter from '../Newsletter/Newsletter';
const Footer = () => {
  return (
    <>
      <section className='w-full flex bg-gray-800 shadow-md justify-evenly p-[2rem]'>
        <div className='hidden sm:flex sm:flex-col sm:w-[1/3] mt-[3rem]'>
        <span className='text-gray-100 text-[1.5rem] txt mb-[1rem]'>Quick Links</span>
        <Link to='/'>
            <span className='text-lg text-gray-100 txt'>Home</span>
          </Link>
          <Link to='/darkpattern'>
            <span className='text-lg txt text-gray-100'>Dark Patterns</span>
          </Link>
          <Link to='/project'>
            <span className='text-lg txt text-gray-100'>The Project</span>
          </Link>
          <Link to='/publications'>
            <span className='text-lg txt text-gray-100'>Publications</span>
          </Link>
        </div>

        <div className='flex flex-col'>
            <div className='flex flex-col w-full md:w-[1/2] lg:w-[1/3] mt-[3rem]'>
                <span className='text-lg txt text-gray-100'>
                    Contact Us
                </span>
                <span className='text-lg txt text-gray-100'>
                    paulwalkersb@gmail.com
                </span>
            </div>
            <a href=''>
                <button className='text-lg txt text-gray-100 bg-sky-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white w-full rounded-xl p-[0.4rem] mt-[1rem]'>
                    Download
                </button>
            </a>
            <a href=''>
                <button className='text-lg txt text-gray-100 bg-sky-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white w-full rounded-xl p-[0.4rem] mt-[1rem]'>
                    GitHub
                </button>
            </a>
        </div>
        
        <div className='flex flex-col mt-[3rem]'>
          <span className='text-xl font-semibold text-gray-500'>Follow Us</span>
          <div className='flex mt-[1rem]'>
            <a href='https://www.facebook.com/' target='blank' rel='noopener noreferrer' className='mr-4'>
              <FaFacebook className='text-white text-3xl hover:text-gray-400' />
            </a>
            <a href='https://twitter.com/' target='_blank' rel='noopener noreferrer' className='mr-4'>
              <FaTwitter className='text-white text-3xl hover:text-gray-400' />
            </a>
            <a href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
              <FaInstagram className='text-white text-3xl hover:text-gray-400' />
            </a>
            </div>
          </div>

      </section>
    </>
  );
};

export default Footer;

