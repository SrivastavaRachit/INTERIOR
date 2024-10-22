import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './style.css';

const Projects = () => {
    const [selectedCard, setSelectedCard] = useState(null);
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const projects = [
        {
            imgSrc: 'https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050945.jpg',
            content: 'Modern and stylish living space with contemporary design elements.',
        },
        {
            imgSrc: 'https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050971.jpg',
            content: 'Traditional house interior with rich textures and warm colors.',
        },
        {
            imgSrc: 'https://img.freepik.com/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263555.jpg',
            content: 'Photorealistic wooden house with natural furnishings.',
        },
        {
            imgSrc: 'https://img.freepik.com/free-photo/atmospheric-woodland-imagery-living-room_1409-4728.jpg',
            content: 'Atmospheric woodland-themed living room with a rustic vibe.',
        },
        {
            imgSrc: 'https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050932.jpg',
            content: 'Modern house interior with sleek and minimalistic design.',
        },
        {
            imgSrc: 'https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050926.jpg',
            content: 'Elegant interior design with a blend of contemporary and traditional elements.',
        },
    ];

    // Handle card click to display content
    const handleCardClick = (index) => {
        setSelectedCard(selectedCard === index ? null : index);
    };

    return (
        <section className="py-16 px-4 bg-gray-200 relative">
            {/* Blurred edges on left and right sides */}
            <div className="absolute top-0 left-0 bottom-0 w-16 bg-gradient-to-r from-gray-200 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 bottom-0 w-16 bg-gradient-to-l from-gray-200 to-transparent z-10 pointer-events-none"></div>

            {/* Heading */}
            <motion.div
                className="flex items-center justify-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                <span className="h-1 w-16 bg-black inline-block"></span>
                <h2 className="text-3xl md:text-4xl font-bold text-center px-4">Our Latest Projects</h2>
                <span className="h-1 w-16 bg-black inline-block"></span>
            </motion.div>

            {/* Scrollable container */}
            <div
                className={`flex overflow-hidden space-x-6 px-4 py-4 slide-track no-scrollbar ${isHovered ? 'pause' : ''}`}
                ref={scrollRef}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Duplicate the cards to create an infinite scroll illusion */}
                {projects.concat(projects).map((project, index) => (
                    <motion.div
                        key={index}
                        className={`relative bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform w-80 ${
                            selectedCard === index ? 'scale-105' : 'scale-100 opacity-75'
                        }`}
                        onClick={() => handleCardClick(index)}
                    >
                        {/* Image */}
                        <img
                            src={project.imgSrc}
                            alt={`Project ${index + 1}`}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />

                        {/* Show content only when clicked */}
                        {selectedCard === index && (
                            <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                                <p className="text-white text-xl text-center px-4">
                                    {project.content}
                                </p>
                            </div>
                        )}

                        {/* Project Title */}
                        <div className="p-4">
                            <h3 className="text-xl text-center font-semibold">
                                Project {index + 1}
                            </h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
