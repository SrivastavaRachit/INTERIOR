import React from 'react';
import { FaPencilRuler, FaCouch, FaTree, FaPaintBrush } from 'react-icons/fa';

const Whatwedo = () => {
    return (
        <section className="py-16 px-4 bg-gray-100">
            <div className="container mx-auto">
                {/* Animated Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 animate-bounce">
                    What We Do
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side: Image */}
                    <div className="w-full">
                        <img
                            src="https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119032.jpg"
                            alt="What We Do"
                            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="border p-6 rounded-lg shadow-md bg-white hover:bg-blue-50 transition-colors duration-300 transform hover:-translate-y-3 hover:scale-105">
                            <div className="flex items-center space-x-4">
                                <FaPencilRuler className="text-3xl text-blue-500" />
                                <h3 className="text-xl font-bold">Planning</h3>
                            </div>
                            <p className="text-gray-700 mt-2">We help you plan the layout and design to match your preferences and lifestyle.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md bg-white hover:bg-green-50 transition-colors duration-300 transform hover:-translate-y-3 hover:scale-105">
                            <div className="flex items-center space-x-4">
                                <FaCouch className="text-3xl text-green-500" />
                                <h3 className="text-xl font-bold">Interior</h3>
                            </div>
                            <p className="text-gray-700 mt-2">Our interior design services bring elegance and functionality to your space.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md bg-white hover:bg-yellow-50 transition-colors duration-300 transform hover:-translate-y-3 hover:scale-105">
                            <div className="flex items-center space-x-4">
                                <FaTree className="text-3xl text-yellow-500" />
                                <h3 className="text-xl font-bold">Exterior</h3>
                            </div>
                            <p className="text-gray-700 mt-2">We enhance the beauty of the exterior with designs that stand out.</p>
                        </div>
                        <div className="border p-6 rounded-lg shadow-md bg-white hover:bg-red-50 transition-colors duration-300 transform hover:-translate-y-3 hover:scale-105">
                            <div className="flex items-center space-x-4">
                                <FaPaintBrush className="text-3xl text-red-500" />
                                <h3 className="text-xl font-bold">Decoration</h3>
                            </div>
                            <p className="text-gray-700 mt-2">Our decoration services add finishing touches to create a complete look.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Whatwedo;
