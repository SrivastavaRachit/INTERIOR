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
                                <p className="text-gray-700 text-lg">{project.content}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
