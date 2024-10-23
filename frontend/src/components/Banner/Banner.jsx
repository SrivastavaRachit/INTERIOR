import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <section
            className="relative w-full h-[60vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table-counter_105762-2105.jpg?t=st=1729714480~exp=1729718080~hmac=74dc905cf91cace17c40efbca7b8394c849526daaafd96879de4685c53e4131e&w=1380')`,
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

            {/* Banner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                <motion.h1
                    className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-wider mb-4"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >
                    Home
                </motion.h1>
            </div>
        </section>
    );
};

export default Banner;
