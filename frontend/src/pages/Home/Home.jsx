import React, { useState } from 'react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { motion } from 'framer-motion';


const Home = () => {
    const [flipped, setFlipped] = useState(Array(6).fill(false)); // State to track flip status of each card

    const handleFlip = (index) => {
      const updatedFlipped = [...flipped];
      updatedFlipped[index] = !updatedFlipped[index];
      setFlipped(updatedFlipped);
    };

  return (
    <>
      {/* Navbar */}
      <div>
        <Navbar />
      </div>

      {/* Banner Section */}
      <section
        className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/digital-lavender-style-interior-design_23-2151561236.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
        {/* Banner Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-4 animate-fade-in-up">
           Home
          </h1>
        
        </div>
      </section>

      {/* What We Do Section */}
<section className="py-16 px-4">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Side: Image */}
      <div className="w-full">
        <img
          src="https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119032.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
          alt="What We Do"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Right Side: Content */}
      <div className="flex flex-col justify-center space-y-6">
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Planning</h3>
          <p className="text-gray-700">We help you plan the layout and design to match your preferences and lifestyle.</p>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Interior</h3>
          <p className="text-gray-700">Our interior design services bring elegance and functionality to your space.</p>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Exterior</h3>
          <p className="text-gray-700">We enhance the beauty of the exterior with designs that stand out.</p>
        </div>
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold">Decoration</h3>
          <p className="text-gray-700">Our decoration services add finishing touches to create a complete look.</p>
             </div>
      </div>
    </div>
  </div>
</section>

{/* Our Latest Projects Section */}
  
<section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Our Latest Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            imgSrc: 'https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050945.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905',
            content: 'Modern and stylish living space with contemporary design elements.'
          },
          {
            imgSrc: 'https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050971.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905',
            content: 'Traditional house interior with rich textures and warm colors.'
          },
          {
            imgSrc: 'https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263555.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905',
            content: 'Photorealistic wooden house with natural furnishings.'
          },
          {
            imgSrc: 'https://img.freepik.com/free-photo/atmospheric-woodland-imagery-living-room_1409-4728.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905',
            content: 'Atmospheric woodland-themed living room with a rustic vibe.'
          },
          {
            imgSrc: 'https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050932.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905',
            content: 'Modern house interior with sleek and minimalistic design.'
          },
          {
            imgSrc: 'https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050926.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905',
            content: 'Elegant interior design with a blend of contemporary and traditional elements.'
          }
        ].map((project, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden relative"
            onClick={() => handleFlip(index)}
            initial={false}
            animate={{ rotateY: flipped[index] ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              className="relative w-full h-60"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front side of the card (Image) */}
              <div className="absolute inset-0 backface-hidden">
                <img
                  src={project.imgSrc}
                  alt={`Project ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
              </div>

              {/* Back side of the card (Content) */}
              <motion.div
                className="absolute inset-0 bg-white flex items-center justify-center text-center p-4 rotate-y-180 backface-hidden"
                style={{ rotateY: 180 }}
              >
                <p className="text-gray-700 text-lg">{project.content}</p>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  s



      {/* Our Work Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
        <div className="flex overflow-x-scroll space-x-4">
          {/* Work items in carousel style */}
          <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
            <img src="https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050938.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">Modern Loft Living</h3>
          </div>
          <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
            <img src="https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050928.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">Modern Loft Living</h3>
          </div>
          <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
            <img src="https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119022.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">Modern Loft Living</h3>
          </div>
          <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
            <img src="https://img.freepik.com/free-photo/beautiful-natural-autumn-scene_23-2151854313.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">Modern Loft Living</h3>
          </div>
          <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
            <img src="https://img.freepik.com/free-photo/christmas-celebration-with-decorated-tree_23-2151834376.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-xl font-bold">Modern Loft Living</h3>
          </div>
          {/* Repeat for other work items */}
        </div>
      </section>

      {/* Meet Our Clients Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Client logos */}
          <div className="flex justify-center">
            <img src="client-logo1.jpg" alt="Client 1" className="h-16 object-contain" />
          </div>
          {/* Repeat for other clients */}
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Team Member */}
          <div className="text-center p-4 rounded-lg shadow-md">
            <img src="team-member1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">Nikola Dickens</h3>
            <p className="text-gray-700">Founder</p>
          </div>
          {/* Repeat for other team members */}
        </div>
      </section>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
