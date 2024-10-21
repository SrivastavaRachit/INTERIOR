import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBlog, faProjectDiagram, faInfoCircle, faPhone, faEnvelope, faChevronUp, faBuilding, faCouch, faPeopleArrows } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0">
        {/* About Us Section */}
        <div className="w-full lg:w-1/4 space-y-3">
          <h4 className="text-xl font-semibold text-gradient mb-3">About Us</h4>
          <p className="text-gray-400 leading-relaxed">
            We provide high-quality interior design services tailored to your needs. Your space, your style, your comfort.
          </p>
        </div>

        {/* Services Section */}
        <div className="w-full lg:w-1/4 space-y-3">
          <h4 className="text-xl font-semibold text-gradient mb-3">Services</h4>
          <ul className="space-y-2 ">
            <li>
              <NavLink
                to="/service/home-design"
                className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home Design
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service/office-design"
                className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faBuilding} className="mr-2" />
                Office Design
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service/custom-furniture"
                className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faCouch} className="mr-2" />
                Custom Furniture
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service/consultations"
                className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faPeopleArrows} className="mr-2" />
                Consultations
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="w-full lg:w-1/4 space-y-3">
          <h4 className="text-xl font-semibold text-gradient mb-3">Get In Touch</h4>
          <p className="text-gray-400 flex items-center">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email: hexagonsservices@gmail.com
          </p>
          <p className="text-gray-400 flex items-center">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Phone: (+91 8840775386)
          </p>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            {[
              { icon: faFacebookF, link: "https://www.facebook.com/" },
              { icon: faTwitter, link: "https://x.com/" },
              { icon: faInstagram, link: "https://www.instagram.com/" },
              { icon: faLinkedinIn, link: "https://in.linkedin.com/" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-gray-400 hover:text-purple-400 transition-transform duration-300 transform hover:scale-125"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="w-full lg:w-1/4 space-y-3">
          <h4 className="text-xl font-semibold text-gradient mb-3">Quick Links</h4>
          <ul className="space-y-2 ">
            <li>
              <NavLink
                to="/"
                className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faHome} className="mr-2" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faBlog} className="mr-2" />
                Blogs
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/project"
                className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faProjectDiagram} className="mr-2" />
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline flex items-center"
              >
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-700 opacity-20 rounded-full 
      blur-xl transform translate-x-16 -translate-y-16 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-700 opacity-20 
      rounded-full blur-xl transform -translate-x-16 translate-y-16 animate-pulse-slow"></div>

      {/* Back to Top Button */}
      <div className="absolute bottom-4 right-4 lg:bottom-8 lg:right-8">
        <a
          href="#"
          className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full shadow-lg text-white transition-transform transform hover:scale-110"
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <p className="text-center  text-gray-500 text-lg">&copy; 2024 Interior Impression.
          <p className="text-center text-gray-500 text-lg"> All Rights Reserved.</p>
          <a href="https://hexagondigitalservices.com/" target='blank'>Powered By {" "}
          <span 
          className='text-yellow-400 hover:text-blue-300 underline'>
          Hexagon Digital Services
            </span></a>
          </p>
      </div>
    </footer>
  );
};

export default Footer;