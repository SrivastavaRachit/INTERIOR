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
        <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 fixed top-0 w-full shadow-lg z-10 transition duration-300 ease-in-out">
            <div className="container mx-auto px-4 flex justify-between items-center h-16">
                {/* Logo and Title */}
                <div className="flex items-center">
                    <NavLink to='/'>
                        <h1 className="text-white text-2xl font-semibold hover:text-yellow-400 transition duration-300 transform hover:scale-105">
                            Interior Designer
                        </h1>
                    </NavLink>
                </div>

                {/* Nav Links for larger screens */}
                <ul className="hidden md:flex space-x-6 items-center">
                    <li>
                        <NavLink
                            to="/"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                        >
                            Blogs
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                        >
                            Projects
                        </NavLink>
                    </li>

                    {/* Services Dropdown */}
                    <li className="relative">
                        <button
                            onClick={toggleServices} // Toggle dropdown on click
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105 focus:outline-none"
                        >
                            Services
                        </button>
                        {/* Dropdown Menu (Animated with transition) */}
                        <div
                            className={`absolute bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 text-white mt-2 rounded-md shadow-lg z-20 space-y-2 p-4 transition-all duration-500 ease-in-out transform ${
                                isServicesOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
                            }`}
                        >
                            <NavLink
                                to="/service/home-design"
                                className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            >
                                Home Design
                            </NavLink>
                            <NavLink
                                to="/service/office-design"
                                className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            >
                                Office Design
                            </NavLink>
                            <NavLink
                                to="/service/custom-furniture"
                                className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            >
                                Custom Furniture
                            </NavLink>
                            <NavLink
                                to="/service/consultations"
                                className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                            >
                                Consultations
                            </NavLink>
                        </div>
                    </li>

                    <li>
                        <NavLink
                            to="/about"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
                        >
                            About Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:scale-105"
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

            {/* Mobile Menu (Slide in/out animation) */}
            <ul
                className={`list-none md:hidden bg-gradient-to-b from-indigo-500 to-purple-500 text-white space-y-4 p-6 absolute top-16 left-0 w-full transition-all duration-500 ease-in-out transform rounded-b-lg shadow-2xl ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <li>
                    <NavLink
                        to="/"
                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:translate-x-2"
                        onClick={toggleMenu}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/blog"
                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:translate-x-2"
                        onClick={toggleMenu}
                    >
                        Blogs
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/project"
                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:translate-x-2"
                        onClick={toggleMenu}
                    >
                        Projects
                    </NavLink>
                </li>
                {/* Services Dropdown in Mobile Menu */}
                <li>
                    <button
                        onClick={toggleServices}
                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300"
                    >
                        Services
                    </button>
                    {isServicesOpen && (
                        <ul className="space-y-2 bg-gray-800 p-3 rounded-md mt-2 shadow-lg">
                            <li>
                                <NavLink
                                    to="/service/home-design"
                                    className="block text-lg text-white hover:text-yellow-400 transition duration-300"
                                    onClick={toggleMenu}
                                >
                                    Home Design
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/service/office-design"
                                    className="block text-lg text-white hover:text-yellow-400 transition duration-300"
                                    onClick={toggleMenu}
                                >
                                    Office Design
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/service/custom-furniture"
                                    className="block text-lg text-white hover:text-yellow-400 transition duration-300"
                                    onClick={toggleMenu}
                                >
                                    Custom Furniture
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/service/consultations"
                                    className="block text-lg text-white hover:text-yellow-400 transition duration-300"
                                    onClick={toggleMenu}
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
                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:translate-x-2"
                        onClick={toggleMenu}
                    >
                        About Us
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/contact"
                        className="block text-lg font-medium hover:text-yellow-400 transition duration-300 transform hover:translate-x-2"
                        onClick={toggleMenu}
                    >
                        Contact Us
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
