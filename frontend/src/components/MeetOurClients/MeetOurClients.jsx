import React from 'react';

const clients = [
    { icon: '🏠', title: 'Home Design', tagline: 'Exquisite Spaces' },
    { icon: '🏢', title: 'Office Design', tagline: 'Modern Workspaces' },
    { icon: '🛋️', title: 'Furniture', tagline: 'Comfort & Style' },
    { icon: '🌳', title: 'Outdoor', tagline: 'Natural Beauty' },
    { icon: '🏗️', title: 'Construction', tagline: 'Innovative Structures' },
    { icon: '🏛️', title: 'Heritage', tagline: 'Historical Touch' },
    { icon: '🖼️', title: 'Art & Decor', tagline: 'Creative Inspirations' },
    { icon: '🚪', title: 'Doors & Windows', tagline: 'Elegant Openings' },
    { icon: '🔨', title: 'Renovation', tagline: 'Revamping Spaces' },
    { icon: '🖥️', title: 'Technology', tagline: 'Smart Solutions' },
    { icon: '🛠️', title: 'DIY Projects', tagline: 'Create Your Own' },
    { icon: '💡', title: 'Lighting', tagline: 'Illuminate Your Space' },

];

const MeetOurClients = () => {
    return (
        <section className="py-16 px-4 bg-gray-300">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <div className="flex items-center justify-center space-x-2">
                    <span className="block w-16 h-1 bg-black"></span>
                    <h2 className="text-3xl font-bold mx-4">Meet Our Clients</h2>
                    <span className="block w-16 h-1 bg-black"></span>
                </div>
                <p className="mt-4 text-lg md:text-xl text-black">
                    Our esteemed clients trust us to deliver outstanding projects.
                </p>
            </div>

            {/* Client Icons Section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8">
                {clients.map((client, index) => (
                    <div
                        key={index}
                        className="text-center p-4 hover:shadow-xl hover:bg-white rounded-lg transition-shadow duration-300"
                    >
                        <div className="text-4xl mb-4">{client.icon}</div>
                        <h3 className="text-md sm:text-lg font-bold">{client.title}</h3>
                        <p className="text-gray-700 text-sm sm:text-md">{client.tagline}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetOurClients;
