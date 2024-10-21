import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const CustomFurniture = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div>
                <br />
                <br />

                {/* Banner Section */}
                <section className="relative w-full h-96 md:h-120 lg:h-[32rem] bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/luxury-modern-apartment-with-elegant-home-decor-generated-by-ai_188544-21219.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid')` }}>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center banner-animation">
                        <h1
                            className="text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-float transition-transform duration-500 ease-in-out hover:scale-110 responsive-animation"
                        >
                            Customer Furniture
                        </h1>
                    </div>
                </section>

                {/* Project Gallery */}
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Example project items */}
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/guy-standing-showing-his-living-room_23-2148306622.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 1"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Bespoke Sofa Creations</h2>
                                <p className="text-sm">Design the perfect sofa tailored to your style and comfort preferences.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/colleagues-looking-charts-sofa_23-2147707738.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 2"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Custom-Made Office Desks</h2>
                                <p className="text-sm">Design a desk that matches your workflow and office style.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/authentic-scene-young-person-undergoing-psychological-therapy_23-2150161907.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 3"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Handcrafted Accent Chairs</h2>
                                <p className="text-sm">Elevate your decor with a chair designed to reflect your personal style.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/girl-showing-diagrams-coworkers_23-2147668827.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 4"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Tailored Home Office Storage</h2>
                                <p className="text-sm">Organize your workspace with storage solutions designed to fit your specific needs.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/full-shot-smiley-people-sitting-indoors_23-2149637973.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                                alt="Project 5"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Custom Dining Tables</h2>
                                <p className="text-sm">Create a unique dining table that suits your space and family needs.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/caucasian-famiy-face-masks-gloves-isolated-home-with-coronavirus-respiratory-symptoms-such-as-fever-headache-cough-mild-condition-healthcare-medicine-quarantine-treatment-concept_155003-39941.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                                alt="Project 6"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Handcrafted Coffee Tables</h2>
                                <p className="text-sm">Add character to your living room with a one-of-a-kind coffee table.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/young-woman-clenching-her-fist-with-joy-looking-his-boyfriend-shrugging-while-playing-chess_23-2148049351.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                                alt="Project 7"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Custom Patio Furniture Sets
                                </h2>
                                <p className="text-sm">Craft outdoor furniture sets designed to withstand the elements and suit your space.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/parent-kid-talking-psychologist_23-2149305225.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                                alt="Project 8"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Customized Children’s Furniture </h2>
                                <p className="text-sm">Create functional and fun furniture designed to grow with your child.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/young-man-teasing-her-girlfriend-after-winning-game_23-2148049103.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                                alt="Project 9"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">One-of-a-Kind TV Units</h2>
                                <p className="text-sm">Create a stylish and functional entertainment center tailored to your needs.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/parents-kid-doing-therapy_23-2149305229.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                                alt="Project 10"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Live in Comfort, Designed by You </h2>
                                <p className="text-sm">Bespoke furniture that merges comfort with custom design.</p>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/sibling-playing-video-games-living-room_23-2147781887.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                                alt="Project 11"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Made-to-Order Nightstands</h2>
                                <p className="text-sm">Add a personal touch to your bedroom with custom-designed nightstands.</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden rounded-lg shadow-lg group">
                            <img
                                src="https://img.freepik.com/free-photo/young-couple-sitting-sofa-playing-chess-game-living-room_23-2148049345.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                                alt="Project 12"
                                className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <h2 className="text-lg font-semibold">Luxury Living, Tailored to You</h2>
                                <p className="text-sm">Custom furniture that fits your life, not the other way around.</p>
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

export default CustomFurniture