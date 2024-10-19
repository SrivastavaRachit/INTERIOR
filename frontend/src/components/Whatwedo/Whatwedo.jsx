import React from 'react'

const Whatwedo = () => {
    return (
        <section className="py-16 px-4">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-8">What We Do</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Side: Image */}
                    <div className="w-full">
                        <img
                            src="https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119032.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905"
                            alt="What We Do"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="border p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">Planning</h3>
                            <p className="text-gray-700">We help you plan the layout and design to match your preferences and lifestyle.</p>
                        </div>
                        <div className="border p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">Interior</h3>
                            <p className="text-gray-700">Our interior design services bring elegance and functionality to your space.</p>
                        </div>
                        <div className="border p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">Exterior</h3>
                            <p className="text-gray-700">We enhance the beauty of the exterior with designs that stand out.</p>
                        </div>
                        <div className="border p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-bold">Decoration</h3>
                            <p className="text-gray-700">Our decoration services add finishing touches to create a complete look.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whatwedo