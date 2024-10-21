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
                <p className="mt-4 text-xl text-black">Our esteemed clients trust us to deliver outstanding projects.</p>
            </div>

            {/* Client Icons Section */}
            <div className="flex flex-wrap justify-center gap-8">
                {clients.map((client, index) => (
                    <div
                        key={index}
                        className="w-1/4 md:w-1/6 text-center p-4 hover:shadow-xl hover:bg-white rounded-lg transition-shadow duration-300"
                    >
                        <div className="text-5xl mb-4">{client.icon}</div>
                        <h3 className="text-lg font-bold">{client.title}</h3>
                        <p className="text-gray-700 text-md">{client.tagline}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MeetOurClients;
