import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'

const Consultations = () => {
    return (
        <>
        <div>
            <Navbar/>
        </div>
        <div>
    return (
        <>
        <div>
        <br />
            <br />
          
      {/* Banner Section */}
<section className="relative w-full h-96 md:h-120 lg:h-[32rem] bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/medium-shot-friends-planning-trip-table_23-2148925829.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905')` }}>
  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center banner-animation">
    <h1 
      className="text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-float transition-transform duration-500 ease-in-out hover:scale-110 responsive-animation" 
    >
      Consultations
    </h1>
  </div>
</section>

            {/* Project Gallery */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Example project items */}
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/interior-designer-working-with-young-couple-lovely-family-professional-designer-architector-discussing-conept-future-interior-working-with-colour-palette-room-drawings-modern-office_155003-25485.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 1"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">From Vision to Reality</h2>
                            <p className="text-sm">Your Interior Design Consultation.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/great-opportunity-selling-our-projects_329181-9636.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 2"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Creating Your Dream Home</h2>
                            <p className="text-sm">Expert Design Consultations.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/male-coworkers-office-with-lunch_273609-6308.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Unleash Your Style</h2>
                            <p className="text-sm">Personalized Interior Design Guidance.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/design-architecture-teamwork-concept-beautiful-mature-female-engineer-having-inspired-look-while-discussing-new-residential-housing-project-with-her-creative-skillful-young-man-coworker_344912-1857.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 4"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Crafting Unique Spaces</h2>
                            <p className="text-sm">Interior Design Consultation Services.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/middle-aged-couple-meeting-with-interior-designer_74855-2977.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 5"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Design Your Perfect Space</h2>
                            <p className="text-sm">Customized Interior Design Consultations.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/real-estate-agents-waiting-with-plans-front-door_23-2147653368.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid"
                            alt="Project 6"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Bringing Your Design Vision to Life</h2>
                            <p className="text-sm"> Expert Consultations.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/young-man-his-wife-examining-housing-plans-with-real-estate-agent-meeting-office_637285-2810.jpg?t=st=1729408023~exp=1729411623~hmac=10723bddfde019a7ef562c306f07853bb702e2583bc8f50ccd16708002705319&w=740"
                            alt="Project 7"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold"> Your Path to a Stunning Interior Starts Here</h2>
                            <p className="text-sm">Book a Consultation.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/meeting-engineers_1098-14159.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                            alt="Project 8"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Find Your Style</h2>
                            <p className="text-sm">Custom Interior Design Consultation Services.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/hand-businesswoman-signing-contract-meeting-room-close-up-image_482257-25801.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                            alt="Project 9"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">From Concept to Completion</h2>
                            <p className="text-sm">Your Design Consultation Awaits.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/cheerful-office-workers-doing-paperwork_23-2147727644.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                            alt="Project 10"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Redefine Your Space</h2>
                            <p className="text-sm">Professional Design Consultations.</p>
                        </div>
                    </div>
                    
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/female-real-estate-agent-talking-business-showing-house-gay-couple_23-2150164736.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                            alt="Project 11"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">Crafting Interiors You’ll Love</h2>
                            <p className="text-sm">Consultation Services.</p>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg shadow-lg group">
                        <img
                            src="https://img.freepik.com/free-photo/colleagues-having-discussion-about-project-planning-marketing-strategy-working-together-business-man-woman-doing-teamwork-with-laptop-papers-design-presentation_482257-40028.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                            alt="Project 12"
                            className="w-full h-64 object-cover transition-transform duration-300 transform group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <h2 className="text-lg font-semibold">From Inspiration to Reality</h2>
                            <p className="text-sm">From Inspiration to Reality.</p>
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
        </div>
        </>
    )
}

export default Consultations