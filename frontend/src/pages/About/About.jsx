import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FaPaintBrush, FaSeedling, FaHeadset, FaLightbulb, FaUsers, FaPalette } from 'react-icons/fa';
const About = () => {
  const teamMembers = [
    {
      name: 'Axita',
      role: 'Founder',
      description: 'Axita leads our team with a vision to transform spaces into functional art, inspiring everyone through bold and elegant designs.',
      image: 'https://img.freepik.com/free-photo/smiling-young-girl-pointing-right-side-isolated-white-wall-with-copy-space_141793-78944.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
    },
    {
      name: 'Rahul',
      role: 'Lead Designer',
      description: 'Rahul brings innovation to life with a keen eye for detail. His contemporary designs fuse creativity with practicality.',
      image: 'https://img.freepik.com/premium-photo/arafed-man-with-mustache-beard-smiling-camera-generative-ai_1035767-13084.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
    },
    {
      name: 'Rohit',
      role: 'Interior Architect',
      description: 'Rohit crafts harmonious spaces by blending architecture with modern design, creating sustainable environments.',
      image: 'https://img.freepik.com/free-photo/man-with-beard-pointing-something-introducing-someone_144627-53568.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
    },
  ];

  return (
    <>
      <Navbar />
      <br />
      <br />

      {/* Banner Section */}
      <section
        className="relative w-full h-96 md:h-120 lg:h-[32rem] bg-cover bg-center"
        style={{ backgroundImage: `url('https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050946.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center banner-animation">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-float transition-transform duration-500 ease-in-out hover:scale-110 responsive-animation">
            About Us
          </h1>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="container mx-auto px-4 py-16 fade-in-animation">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 flex justify-center mb-6">
            <img
              src="https://img.freepik.com/free-photo/luxury-modern-living-room-illuminated-by-lantern-generated-by-ai_188544-21373.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
              alt="Mission Illustration"
              className="w-full h-auto rounded-lg shadow-md max-w-2xl transition-transform duration-300 transform hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col text-start">
            <h2 className="text-4xl font-bold px-6 mb-6">Our Mission</h2>
            <p className="text-gray-700 text-xl px-6 mb-4">
              We are dedicated to transforming spaces into vibrant, functional works of art.
              Our mission is to create innovative designs that reflect our clients' unique styles and enhance their lifestyles.
              Good design should not only be beautiful but also sustainable and practical.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="container mx-auto px-4 py-16 fade-in-animation">
        <div className="flex flex-wrap items-center md:flex-row flex-col-reverse">
          <div className="w-full md:w-1/2 flex flex-col text-start pr-10 mt-6 md:mt-0">
            <h2 className="text-4xl font-bold px-6 mb-6">Our Vision</h2>
            <p className="text-gray-700 px-6 text-xl mb-4">
              Our vision is to create harmonious environments that inspire creativity and foster well-being.
              We strive to blend artistic expression with functional design, aiming to exceed our clients' expectations at every turn.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="https://img.freepik.com/free-photo/modern-home-office-with-wooden-desk-large-window-city-view_9975-33105.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
              alt="Vision Illustration"
              className="w-full h-auto rounded-lg shadow-md max-w-2xl transition-transform duration-300 transform hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="container mx-auto px-4 py-12 fade-in-animation">
        <h1 className="text-5xl font-bold text-center mb-12">Our Team</h1>

        {teamMembers.map((member, index) => (
          <div
            key={member.name}
            className={`flex flex-wrap items-center py-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} slide-in-animation`}
          >
            <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden rounded-full shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <h3 className="text-3xl font-bold mb-2">{member.name}</h3>
              <p className="text-xl text-gray-700 font-semibold mb-4">{member.role}</p>
              <p className="text-lg text-gray-600 mb-6">{member.description}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="container mx-auto px-4 py-12 bg-gradient-to-r from-amber-300 via-teal-300 to-pink-500
                rounded-lg shadow-lg fade-in-animation">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Why Choose Us?</h2>
        <p className="text-white text-xl text-center mb-6 max-w-2xl mx-auto">
          Our commitment to excellence sets us apart. We focus on understanding your needs and delivering unparalleled service.
        </p>

        {/* Grid for tools and features */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto text-white text-lg">
          {/* Customized Design Solutions */}
          <li className="flex flex-col items-center text-center fade-in-animation transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-blue-200 mb-4 p-5 icon-animation shadow-lg">
              <FaPaintBrush className="text-blue-700 text-5xl" />
            </div>
            <span className="text-2xl font-semibold">Customized Design Solutions</span>
          </li>

          {/* Sustainable Practices */}
          <li className="flex flex-col items-center text-center fade-in-animation transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-200 mb-4 p-5 icon-animation shadow-lg">
              <FaSeedling className="text-green-700 text-5xl" />
            </div>
            <span className="text-2xl font-semibold">Sustainable Practices</span>
          </li>

          {/* Exceptional Customer Service */}
          <li className="flex flex-col items-center text-center fade-in-animation transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-yellow-200 mb-4 p-5 icon-animation shadow-lg">
              <FaHeadset className="text-yellow-700 text-5xl" />
            </div>
            <span className="text-2xl font-semibold">Exceptional Customer Service</span>
          </li>

          {/* Innovative Approaches */}
          <li className="flex flex-col items-center text-center fade-in-animation transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-indigo-200 mb-4 p-5 icon-animation shadow-lg">
              <FaLightbulb className="text-indigo-700 text-5xl" />
            </div>
            <span className="text-2xl font-semibold">Innovative Approaches</span>
          </li>

          {/* Experienced Team */}
          <li className="flex flex-col items-center text-center fade-in-animation transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-red-200 mb-4 p-5 icon-animation shadow-lg">
              <FaUsers className="text-red-700 text-5xl" />
            </div>
            <span className="text-2xl font-semibold">Experienced and Passionate Team</span>
          </li>

          {/* Creative and Innovative Designs */}
          <li className="flex flex-col items-center text-center fade-in-animation transform transition duration-300 hover:scale-105">
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-200 mb-4 p-5 icon-animation shadow-lg">
              <FaPalette className="text-purple-700 text-5xl" />
            </div>
            <span className="text-2xl font-semibold">Creative and Innovative Designs</span>
          </li>
        </ul>
      </section>


      <Footer />
    </>
  );
};

export default About;
