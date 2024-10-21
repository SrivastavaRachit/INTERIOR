import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered card index

    return (
        <section className="py-16 px-4 bg-gray-200">
            {/* Animated Heading with lines on both sides */}
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

            {/* Project Cards in Single Line with Scrollable Overflow */}
            <div className="flex overflow-x-auto space-x-6 px-4 py-4 no-scrollbar">
                {[
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
                ].map((project, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden cursor-pointer transition-all duration-500 transform hover:scale-105 w-80"
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        {/* Image */}
                        <img
                            src={project.imgSrc}
                            alt={`Project ${index + 1}`}
                            className="w-full h-48 object-cover rounded-t-lg"
                        />

                        {/* Hover content box */}
                        {hoveredIndex === index && (
                            <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                                <p className="text-white text-xl text-center px-4">
                                    {project.content}
                                </p>
                            </div>
                        )}

                        {/* Project Title */}
                        <div className="p-4">
                            <h3 className="text-xl text-center font-semibold animate-bounce">Project {index + 1}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
