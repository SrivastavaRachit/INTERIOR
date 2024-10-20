import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const [flipped, setFlipped] = useState(Array(6).fill(false)); // State to track flip status of each card

    const handleFlip = (index) => {
        const updatedFlipped = [...flipped];
        updatedFlipped[index] = !updatedFlipped[index];
        setFlipped(updatedFlipped);
    };

    return (
        <section className="py-16 px-4 bg-gray-50">
            {/* Animated Heading */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                Our Latest Projects
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        className="bg-white rounded-lg shadow-md hover:shadow-xl overflow-hidden relative cursor-pointer"
                        onClick={() => handleFlip(index)}
                        style={{ perspective: 1000 }}
                    >
                        <motion.div
                            className="relative w-full h-60"
                            style={{
                                transformStyle: 'preserve-3d',
                                transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                transition: 'transform 0.8s ease-in-out',
                            }}
                        >
                            {/* Front side of the card (Image) */}
                            <div
                                className="absolute inset-0"
                                style={{
                                    backfaceVisibility: 'hidden',
                                }}
                            >
                                <img
                                    src={project.imgSrc}
                                    alt={`Project ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Back side of the card (Content) */}
                            <div
                                className="absolute inset-0 bg-white flex items-center justify-center text-center p-4"
                                style={{
                                    transform: 'rotateY(180deg)',
                                    backfaceVisibility: 'hidden',
                                }}
                            >
                                <p className="text-gray-700 text-xl font-semibold">{project.content}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
