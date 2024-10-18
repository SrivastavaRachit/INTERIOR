import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Project = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <br />
            <br />
          
      {/* Banner Section */}
<section className="relative w-full h-96 md:h-120 lg:h-[32rem] bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/luxury-modern-apartment-with-elegant-home-decor-generated-by-ai_188544-21219.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid')` }}>
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center banner-animation">
    <h1 
      className="text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-float transition-transform duration-500 ease-in-out hover:scale-110 responsive-animation" 
    >
      Projects 
    </h1>
  </div>
</section>

            {/* Project Gallery */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example project items */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/view-house-lamp-with-futuristic-design_23-2151037467.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 1"
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
                            src="https://img.freepik.com/free-photo/interior-room-design-with-armchair-potted-plants_23-2149427990.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 2"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Dining Area</h2>
                            <p className="text-sm">Luxurious dining area with modern furnishings.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 3"
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
                            src="https://img.freepik.com/free-photo/modern-apartment-with-comfortable-sofa-decor-generated-by-ai_188544-38495.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 4"
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
                            src="https://img.freepik.com/free-photo/bangkok-thailand-august-12-2016-beautiful-luxury-living-room_1203-2344.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 5"
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
                            src="https://img.freepik.com/free-photo/tidy-hall-with-two-pictures-wall_1203-1487.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 6"
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
                            src="https://img.freepik.com/free-photo/3d-room-interior-with-classic-design-furniture_23-2150895587.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
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
                            src="https://img.freepik.com/free-photo/realistic-interior-design-with-furniture_23-2151439745.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 8"
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
                            src="https://img.freepik.com/free-photo/living-room-with-red-chair-white-chair_1340-39394.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 9"
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
                            src="https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151118945.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 10"
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
                            src="https://img.freepik.com/free-photo/interior-decoration-inspired-by-mexican-folklore_23-2150711319.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 11"
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
                            src="https://img.freepik.com/free-photo/interior-decoration-inspired-by-mexican-folklore_23-2150711269.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 12"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Cozy Sitting Room</h2>
                            <p className="text-sm">Warm and inviting interior with contemporary art.</p>
                        </div>
                    </div>
                    {/* Repeat project items for more projects */}
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </>
    );
}

export default Project;
