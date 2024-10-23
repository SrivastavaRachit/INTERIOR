import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const OurWork = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Array of work items
    const works = [
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
            imgSrc: 'https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118842.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
            title: 'Home Harmony',
        },
        {
            imgSrc: 'https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-2256.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
            title: 'Interior Delights',
        },
        {
            imgSrc: 'https://img.freepik.com/free-photo/luxury-modern-apartment-with-elegant-home-decor-generated-by-ai_188544-21219.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
            title: 'Living Elegance',
        },
    ];

    const totalItems = works.length;

    // Set itemsToShow based on screen size
    const getItemsToShow = () => {
        if (window.innerWidth >= 1280) return 4; // Show 4 items for large screens (desktop)
        if (window.innerWidth >= 768) return 3; // Show 3 items for medium screens (tablets)
        return 2; // Show 2 items for small screens (mobile)
    };

    const [itemsToShow, setItemsToShow] = useState(getItemsToShow);

    // Update itemsToShow on window resize
    window.addEventListener('resize', () => {
        setItemsToShow(getItemsToShow());
    });

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex + itemsToShow) % totalItems
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            (prevIndex - itemsToShow + totalItems) % totalItems
        );
    };

    return (
        <section className="py-12 md:py-16 px-4 bg-gray-50">
            {/* Animated Heading with lines on both sides */}
            <motion.div
                className="flex flex-col items-center mb-8"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                <div className="flex items-center justify-center space-x-2">
                    {/* Bold Lines on Both Sides */}
                    <span className="block w-12 h-1 bg-black"></span>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mx-4">Our Work</h2>
                    <span className="block w-12 h-1 bg-black"></span>
                </div>
            </motion.div>

            {/* Swiper Container */}
            <div className="relative overflow-hidden">
                <div className="flex space-x-4 py-8">
                    {works.slice(currentIndex, currentIndex + itemsToShow).map((work, index) => (
                        <motion.div
                            key={index}
                            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0"
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.img
                                src={work.imgSrc}
                                alt={work.title}
                                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            />
                            <div className="text-center mt-4">
                                <h3 className="text-lg sm:text-xl font-semibold text-black">
                                    {work.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Prev and Next Buttons */}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2 mt-8">
                {Array.from({ length: Math.ceil(totalItems / itemsToShow) }).map((_, index) => (
                    <span
                        key={index}
                        onClick={() => setCurrentIndex(index * itemsToShow)}
                        className={`h-2 w-2 rounded-full cursor-pointer transition-colors ${
                            Math.floor(currentIndex / itemsToShow) === index
                                ? 'bg-gray-800'
                                : 'bg-gray-400'
                        }`}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default OurWork;
