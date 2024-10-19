import React from 'react'

const ClientTeam = () => {
    return (
        <>
            {/* Meet Our Clients Section */}
            <section className="py-16 px-4 bg-gray-50">
                <h2 className="text-3xl font-bold text-center mb-8">Meet Our Clients</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {/* Client logos */}
                    <div className="flex justify-center">
                        <img src="client-logo1.jpg" alt="Client 1" className="h-16 object-contain" />
                    </div>
                    {/* Repeat for other clients */}
                </div>
            </section>

            {/* Our Team Section */}
            <section className="py-16 px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Team</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Team Member */}
                    <div className="text-center p-4 rounded-lg shadow-md">
                        <img src="team-member1.jpg" alt="Team Member 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-bold">Nikola Dickens</h3>
                        <p className="text-gray-700">Founder</p>
                    </div>
                    {/* Repeat for other team members */}
                </div>
            </section>
        </>
    )
}

export default ClientTeam