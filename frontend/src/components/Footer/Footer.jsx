import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

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
          <ul className="space-y-2">
            {['Home Design', 'Office Design', 'Custom Furniture', 'Consultations'].map((service, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch Section */}
        <div className="w-full lg:w-1/4 space-y-3">
          <h4 className="text-xl font-semibold text-gradient mb-3">Get In Touch</h4>
          <p className="text-gray-400">Email: interiorimpression@gmail.com</p>
          <p className="text-gray-400">Phone: (+92 224367957)</p>
          {/* Social Media Links */}
          <div className="flex space-x-4 mt-6">
            {[
              { icon: faFacebookF, link: "#" },
              { icon: faTwitter, link: "#" },
              { icon: faInstagram, link: "#" },
              { icon: faLinkedinIn, link: "#" }
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
          <ul className="space-y-2">
            {['About Us', 'Contact Us'].map((link, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="text-gray-400 hover:text-purple-300 transition duration-300 hover:underline"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-700 opacity-20 rounded-full blur-xl transform translate-x-16 -translate-y-16 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-indigo-700 opacity-20 rounded-full blur-xl transform -translate-x-16 translate-y-16 animate-pulse-slow"></div>

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
        <p className="text-center text-gray-500 text-sm">&copy; 2024 Interior Impression. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
