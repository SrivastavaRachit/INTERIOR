import React from 'react';
import { FaPencilRuler, FaCouch, FaTree, FaPaintBrush } from 'react-icons/fa';

const Whatwedo = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col items-center mb-8">
                    {/* Heading with Bold Decorative Lines */}
                    <div className="flex items-center w-full justify-center mb-4">
                        <div className="flex-grow border-t-4 border-gray-800 max-w-[50px]" />
                        <h2 className="text-3xl md:text-4xl font-bold text-center mx-4">
                            What We Do
                        </h2>
                        <div className="flex-grow border-t-4 border-gray-800 max-w-[50px]" />
                    </div>
                </div>
                
                {/* Flex Container for Responsive Layout */}
                <div className="flex flex-col md:flex-row justify-between items-start md:gap-8 gap-4">
                    {/* Centered Image for Tablet View */}
                    <div className="w-full md:w-5/12 mb-8">
                        <img
                            src="https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119032.jpg"
                            alt="What We Do"
                            className="w-full h-auto object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    
                    {/* Description Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:w-7/12 px-4 md:px-0 py-3">
                        {/* Each service box */}
                        <div className="border p-4 md:p-6 rounded-lg shadow-lg bg-gradient-to-br from-blue-200 to-blue-500 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center">
                            <FaPencilRuler className="text-4xl md:text-5xl text-blue-700 mb-4" />
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white text-center">Planning</h3>
                            <p className="text-white text-sm sm:text-base md:text-lg text-center">
                                We help you plan the layout and design to match your preferences and lifestyle.
                            </p>
                        </div>
                        <div className="border p-4 md:p-6 rounded-lg shadow-lg bg-gradient-to-br from-green-200 to-green-500 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center">
                            <FaCouch className="text-4xl md:text-5xl text-green-700 mb-4" />
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white text-center">Interior</h3>
                            <p className="text-white text-sm sm:text-base md:text-lg text-center">
                                Our interior design services bring elegance and functionality to your space.
                            </p>
                        </div>
                        <div className="border p-4 md:p-6 rounded-lg shadow-lg bg-gradient-to-br from-yellow-200 to-yellow-500 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center">
                            <FaTree className="text-4xl md:text-5xl text-yellow-700 mb-4" />
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white text-center">Exterior</h3>
                            <p className="text-white text-sm sm:text-base md:text-lg text-center">
                                We focus on transforming your outdoor space into something beautiful.
                            </p>
                        </div>
                        <div className="border p-4 md:p-6 rounded-lg shadow-lg bg-gradient-to-br from-red-200 to-red-500 transition-all duration-300 transform hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center">
                            <FaPaintBrush className="text-4xl md:text-5xl text-red-700 mb-4" />
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white text-center">Decoration</h3>
                            <p className="text-white text-sm sm:text-base md:text-lg text-center">
                                Our decoration services add finishing touches to create a complete look.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Whatwedo;
