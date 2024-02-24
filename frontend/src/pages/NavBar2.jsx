/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBook, FaMoon, FaProjectDiagram, FaCommentAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-md fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-white text-lg font-semibold font-[verdana]">
                DARKENSION
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavItem to="/home">Home</NavItem>
                <NavItem to="/publication">Publication</NavItem>
                <NavItem to="/dark-patterns">Dark Patterns</NavItem>
                <NavItem to="/feedback">Feedback</NavItem>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-expanded="false"
            >
              {isOpen ? (
                <IoClose className="text-white" />
              ) : (
                <GiHamburgerMenu className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="md:hidden flex flex-col items-center justify-center w-full"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <MobileNavItem to="/home">Home</MobileNavItem>
              <MobileNavItem to="/publication">Publication</MobileNavItem>
              <MobileNavItem to="/dark-patterns">Dark Patterns</MobileNavItem>
              <MobileNavItem to="/feedback">Feedback</MobileNavItem>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const NavItem = ({ icon, to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
    >
      {icon}
      <span className="ml-2">{children}</span>
    </Link>
  );
};

const MobileNavItem = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {children}
    </Link>
  );
};

export default Navbar;



