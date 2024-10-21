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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left Side: Image */}
                    <div className="w-full">
                        <img
                            src="https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119032.jpg"
                            alt="What We Do"
                            className="w-full h-full object-cover rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    {/* Right Side: Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 py-3">
                        {/* Each service box */}
                        <div className="border p-4 md:p-6 rounded-lg shadow-md bg-gray-200 transition-colors duration-300 transform hover:-translate-y-2 hover:scale-105 min-h-[250px] flex flex-col items-center">
                            <FaPencilRuler className="text-4xl text-blue-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Planning</h3>
                            <p className="text-black text-lg text-center">
                                We help you plan the layout and design to match your preferences and lifestyle.
                            </p>
                        </div>
                        <div className="border p-4 md:p-6 rounded-lg shadow-lg bg-gray-200 transition-colors duration-300 transform hover:-translate-y-2 hover:scale-105 min-h-[250px] flex flex-col items-center">
                            <FaCouch className="text-4xl text-green-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Interior</h3>
                            <p className="text-black text-lg text-center">
                                Our interior design services bring elegance and functionality to your space.
                            </p>
                        </div>
                        <div className="border p-4 md:p-6 rounded-lg shadow-md bg-gray-200 transition-colors duration-300 transform hover:-translate-y-2 hover:scale-105 min-h-[250px] flex flex-col items-center">
                            <FaTree className="text-4xl text-yellow-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Exterior</h3>
                            <p className="text-black text-lg text-center">
                                Our interior design services focus on transforming your space.
                            </p>
                        </div>
                        <div className="border p-4 md:p-6 rounded-lg shadow-md bg-gray-200 transition-colors duration-300 transform hover:-translate-y-2 hover:scale-105 min-h-[250px] flex flex-col items-center">
                            <FaPaintBrush className="text-4xl text-red-500 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Decoration</h3>
                            <p className="text-black text-lg text-center">
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
