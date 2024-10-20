import React from 'react';
import { motion } from 'framer-motion';

const OurWork = () => {
    return (
        <section className="py-16 px-4 bg-gray-50">
            {/* Animated Heading */}
            <motion.h2
                className="text-3xl md:text-4xl font-bold text-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                Our Work
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Work items in grid style */}
                {[
                    {
                        imgSrc: 'https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050938.jpg',
                        title: 'Modern Loft Living',
                    },
                    {
                        imgSrc: 'https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050928.jpg',
                        title: 'Classic Interior Design',
                    },
                    {
                        imgSrc: 'https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119022.jpg',
                        title: 'Cozy Living Space',
                    },
                    {
                        imgSrc: 'https://img.freepik.com/free-photo/beautiful-natural-autumn-scene_23-2151854313.jpg',
                        title: 'Nature-Inspired Design',
                    },
                    {
                        imgSrc: 'https://img.freepik.com/free-photo/christmas-celebration-with-decorated-tree_23-2151834376.jpg',
                        title: 'Festive Decoration',
                    },
                    {
                        imgSrc: 'https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050940.jpg',
                        title: 'Elegant Home Interior',
                    },
                ].map((work, index) => (
                    <motion.div
                        key={index}
                        className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="relative">
                            <motion.img
                                src={work.imgSrc}
                                alt={`Work ${index + 1}`}
                                className="w-full h-64 object-cover rounded-t-lg"
                                whileHover={{ scale: 1.1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-bold text-gray-800">{work.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default OurWork;
