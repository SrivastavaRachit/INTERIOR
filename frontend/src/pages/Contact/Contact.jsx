import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <section className="relative w-full h-96 md:h-120 lg:h-[32rem] bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050973.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905')` }}>
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center banner-animation">
    <h1 
      className="text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-float transition-transform duration-500 ease-in-out hover:scale-110 responsive-animation" 
    >
      Contact Us
    </h1>
  </div>
</section>


      <div className="bg-white py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
          {/* Left Side - Contact Information */}
          <div className="w-full md:w-1/3 space-y-6">
            {/* Contact Info Block */}
            {[
              { icon: faPhoneAlt, label: "Phone Number", value: "+91 2345678972" },
              { icon: faEnvelope, label: "Email Address", value: "interiorimpression@gmail.com" },
              { icon: faMapMarkerAlt, label: "Location", value: "Aminabad, Lucknow" }
            ].map((info, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4 transition-transform transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 shadow-md bg-gray-200 rounded-full">
                  <FontAwesomeIcon icon={info.icon} className="text-2xl text-gray-700" />
                </div>
                <div>
                  <p className="text-lg font-medium">{info.label}</p>
                  <p className="text-black">{info.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-2/3">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Send Us a Message</h2>
              <form className="space-y-4">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full md:w-1/2 p-3 border bg-gray-200 border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full text-black md:w-1/2 p-3 border bg-gray-200 border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full p-3 border bg-gray-200 border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border bg-gray-200 border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                />
                <textarea
                  placeholder="Message"
                  className="w-full p-3 border bg-gray-200 border-gray-400 rounded-md focus:outline-none focus:ring focus:ring-gray-500"
                  rows="4"
                />
                <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-3 rounded-md hover:from-purple-600 hover:to-indigo-600 transition-transform duration-300 transform hover:scale-105 shadow-lg">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <section className="bg-white mt-12 px-4 pb-6">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 pt-4 text-center w-full">Find Us on Google Map</h2>
            <div className="w-full md:w-3/4 lg:w-2/3 h-64 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.2554530577294!2d82.9747433150029!3d26.846708083153245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd77d06d9a63%3A0x8e87ba85c8d9fddd!2sAminabad%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1602273026045!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
