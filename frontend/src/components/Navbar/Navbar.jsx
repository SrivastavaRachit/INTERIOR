import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu on small screens
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 fixed top-0 w-full shadow-lg z-10">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo and Title */}
                <div className="flex items-center">
                    <div className="text-white text-3xl font-bold mr-2">
                        <img src="/path-to-logo.png" alt="logo" className="w-8 h-8 inline-block mr-2" />
                    </div>
                    <NavLink to='/'>
                        <h1 className="text-white text-2xl font-semibold hover:text-yellow-400">
                            MyLogo
                        </h1>
                    </NavLink>
                </div>

                {/* Nav Links for larger screens */}
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <NavLink
                            to="/"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                            activeclassname="text-yellow-400"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                            activeclassname="text-yellow-400"
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                            activeclassname="text-yellow-400"
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                            activeclassname="text-yellow-400"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                            activeclassname="text-yellow-400"
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>

                {/* Hamburger Menu for small screens */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <ul className="md:hidden bg-indigo-500 text-white space-y-4 p-4 absolute top-16 left-0 w-full">
                    <li>
                        <NavLink
                            to="/"
                            className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            activeclassname="text-yellow-400"
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            activeclassname="text-yellow-400"
                            onClick={toggleMenu}
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            activeclassname="text-yellow-400"
                            onClick={toggleMenu}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            activeclassname="text-yellow-400"
                            onClick={toggleMenu}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            activeclassname="text-yellow-400"
                            onClick={toggleMenu}
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            )}
        </nav>
    );
};

export default Navbar;
