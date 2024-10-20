import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const HomeDesign = () => {
    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div>
              <br />
            <br />
      {/* Banner Section */}
<section className="relative w-full h-96 md:h-120 lg:h-[32rem] bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694017.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905')` }}>
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center banner-animation">
    <h1 
      className="text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-float transition-transform duration-500 ease-in-out hover:scale-110 responsive-animation" 
    >
      Home Design
    </h1>
  </div>
</section>

            {/* Project Gallery */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example project items */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896700.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 1"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Artistic Wall Treatments</h2>
                            <p className="text-sm">Bring your walls to life with captivating textures, colors, and patterns.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/3d-model-residential-building_23-2150761206.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 2"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Sustainable Interior Design
                            </h2>
                            <p className="text-sm">Choose eco-friendly materials and practices for a greener home.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/house-with-green-roof-black-roof_1340-32104.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 3"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Customized Home Offices</h2>
                            <p className="text-sm">Boost productivity with a well-designed home office that inspires creativity.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 4"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Living Room Design</h2>
                            <p className="text-sm">Modern interior design with elegant touches.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799711.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 5"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Elegant Living Spaces</h2>
                            <p className="text-sm">Transform your living room with style and comfort for a welcoming atmosphere.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694124.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905://img.freepik.com/free-photo/house-with-red-car-front-it_1340-32084.jpg?
                            =R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 6"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Inviting Outdoor Spaces</h2>
                            <p className="text-sm">Turn your patio or garden into an outdoor haven with bespoke landscaping.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799777.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 7"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Cozy Sitting Room</h2>
                            <p className="text-sm">Warm and inviting interior with contemporary art.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/ai-generated-house-design_23-2150666425.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                            alt="Project 8"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Innovative Storage Solutions</h2>
                            <p className="text-sm">Maximize space with smart storage designs that keep your home clutter-free.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694070.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                            alt="Project 9"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Eco-Friendly Interior Solutions</h2>
                            <p className="text-sm">Design sustainable and stylish interiors that are kind to the planet.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302668.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                            alt="Project 10"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Outdoor Living Makeovers</h2>
                            <p className="text-sm">Extend your living space outdoors with beautifully designed patios and gardens.</p>
                        </div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/photorealistic-wooden-house-with-timber-structure_23-2151302621.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 11"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Lighting that Sets the Mood</h2>
                            <p className="text-sm">Illuminate your home with lighting solutions that complement every room.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/3d-rendering-abstract-building_23-2150896724.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 12"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Playful Kids' Room Interiors</h2>
                            <p className="text-sm">Design fun and vibrant spaces that grow with your child’s changing needs.</p>
                        </div>
                    </div>
                    {/* Repeat project items for more projects */}
                </div>
            </div>
        </div>


        <div>
            <Footer/>
        </div>
        </>
    )
}

export default HomeDesign