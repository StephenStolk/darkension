import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  }

const navlinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Dark Patterns",
    link: "/darkpattern",
  },
  {
    title: "Feedback",
    link: "/feedback",
  },
  {
    title: "Publication",
    link: "/publication",
  },
];

const NavBar2 = () => {
  const [open, setOpen] = useState(false);
  const handleMenu = () => {
    setOpen((prev) => !prev);
  };
  return (
    <>
      <nav variants={variants} className="bg-gradient-to-r from-gray-950 to-gray-800 w-[full] fixed top-0 left-0 right-0 shadow-lg overflow-hidden">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex">
            <img src="logo2.png" className="w-[3rem] md:w-[4rem] h-[3rem] md:h-[4rem]"></img>
              <a href="/" className="text-lg md:text-3xl m-auto font-bold font-cursive ml-[1rem] text-white txt">
                DARKENSION
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navlinks.map((link, index) => (
                  <Link
                    key={index}
                    className="text-gray-100 transition-all duration-500 hover:bg-gray-600 hover:text-white px-3 py-2 rounded-md text-md font-medium"
                    to={link.link}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                onClick={handleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only"> Open Main Menu</span>
                {open === true ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>
        {open ? (
          <div className="md:hidden">
            <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  className="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  to={link.link}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </nav>
    </>
  );
};

export default NavBar2;
