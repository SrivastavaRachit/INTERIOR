import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const OfficeDesign = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <br />
                <br />

                {/* Banner Section */}
                <section className="relative w-full h-96 md:h-120 lg:h-[32rem] bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/modern-home-office-with-wooden-desk-shelves-large-window_9975-33114.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid')` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center banner-animation">
                        <h1
                            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-float transition-transform duration-500 ease-in-out hover:scale-110 responsive-animation"
                        >
                            Office Design
                        </h1>
                    </div>
                </section>

                {/* Project Gallery */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example project items */}
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/room-interior-design_23-2148899442.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 1"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Collaborative Workspace Setups</h2>
                                <p className="text-sm">Encourage teamwork with areas specifically designed for group projects.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/modern-home-office-with-wooden-desk-large-window-city-view_9975-33105.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 2"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Acoustic Solutions for Quiet Spaces</h2>
                                <p className="text-sm">Reduce noise and enhance concentration with effective soundproofing solutions.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/modern-minimalist-office_23-2151780733.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 3"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Modern Workspace Designs</h2>
                                <p className="text-sm">Transform your office into a productive and inspiring environment.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/view-modern-office_1170-1969.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
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
                                src="https://img.freepik.com/free-vector/lift-lobby-realistic-interior_1284-21903.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 5"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Innovative Lighting Design</h2>
                                <p className="text-sm">Improve the ambiance and functionality with strategic office lighting.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/modern-office-space-with-futuristic-decor-furniture_23-2151797655.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 6"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Reception Area Impressions</h2>
                                <p className="text-sm">Make a great first impression with a welcoming and modern reception area.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/business-meeting-room-high-rise-office-building-with-colorful-decor-furnture_105762-1678.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 7"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Private Office Retreats</h2>
                                <p className="text-sm">Design quiet, enclosed spaces for focused work and privacy.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/meeting-room-interior-modern-office-with-long-wooden-table-chairs-around-it_181624-21722.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 8"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Inspiring Creative Zones</h2>
                                <p className="text-sm">Encourage innovation with designated areas for brainstorming and ideation.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/empty-chairs-table-office_1170-755.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 9"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Sustainable Office Interiors</h2>
                                <p className="text-sm">Incorporate eco-friendly materials and practices for a green workspace.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/innovative-futuristic-classroom-students_23-2150906242.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 10"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Ergonomic Furniture Solutions</h2>
                                <p className="text-sm">Choose ergonomic furniture that supports comfort and enhances productivity.</p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/view-futuristic-classroom-students_23-2150906170.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 11"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Dynamic Conference Room Designs</h2>
                                <p className="text-sm">Upgrade your meeting spaces with technology-friendly and stylish designs.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/business-meeting-working-room-office-building_105762-1712.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                                alt="Project 12"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Open-Plan Office Concepts</h2>
                                <p className="text-sm">Foster collaboration and flexibility with open and spacious office layouts.</p>
                            </div>
                        </div>
                        {/* Repeat project items for more projects */}
                    </div>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </>
    )
}

export default OfficeDesign