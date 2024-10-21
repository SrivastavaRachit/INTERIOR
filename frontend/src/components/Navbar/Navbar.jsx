import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false); // State to handle services dropdown

    // Toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Toggle the services dropdown menu
    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <nav className="bg-white fixed top-0 w-full shadow-lg z-10">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo and Title */}
                <div className="flex items-center">
                    {/* <div className="text-white text-3xl font-bold mr-2">
                        <img src="/path-to-logo.png" alt="logo" className="w-8 h-8 inline-block mr-2" />
                    </div> */}
                    <NavLink to='/'>
                        <h1 className="text-black text-2xl font-semibold hover:text-yellow-400">
                            MyLogo
                        </h1>
                    </NavLink>
                </div>

                {/* Nav Links for larger screens */}
                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <NavLink
                            to="/"
                            className="text-black text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className="text-black text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className="text-black text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                        >
                            Projects
                        </NavLink>
                    </li>

                    {/* Services Dropdown */}
                    <li className="relative">
                        <button
                            onClick={toggleServices} // Toggle dropdown on click
                            className="text-black text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105 focus:outline-none"
                        >
                            Services
                        </button>
                        {/* Dropdown Menu (Visible when isServicesOpen is true) */}
                        {isServicesOpen && (
                            <ul className="absolute bg-indigo-500 text-white mt-2 rounded-md shadow-lg z-20 space-y-2 p-4">
                                <li>
                                    <NavLink
                                        to="/service/home-design"
                                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                                    >
                                        Home Design
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service/office-design"
                                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                                    >
                                        Office Design
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service/custom-furniture"
                                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                                    >
                                        Custom Furniture
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/service/consultations"
                                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                                    >
                                        Consultations
                                    </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className="text-black text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="text-black text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
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
                            onClick={toggleMenu}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            onClick={toggleMenu}
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            onClick={toggleMenu}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            onClick={toggleMenu}
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
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
