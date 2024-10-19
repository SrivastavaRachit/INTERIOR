import React from 'react'

const OurWork = () => {
    return (
        <section className="py-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Work</h2>
            <div className="flex overflow-x-scroll space-x-4">
                {/* Work items in carousel style */}
                <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
                    <img src="https://img.freepik.com/free-photo/contemporary-house-interior-design_23-2151050938.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-bold">Modern Loft Living</h3>
                </div>
                <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
                    <img src="https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050928.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-bold">Modern Loft Living</h3>
                </div>
                <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
                    <img src="https://img.freepik.com/free-photo/cozy-lively-home-interior-design_23-2151119022.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-bold">Modern Loft Living</h3>
                </div>
                <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
                    <img src="https://img.freepik.com/free-photo/beautiful-natural-autumn-scene_23-2151854313.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-bold">Modern Loft Living</h3>
                </div>
                <div className="w-80 flex-shrink-0 p-4 rounded-lg shadow-md">
                    <img src="https://img.freepik.com/free-photo/christmas-celebration-with-decorated-tree_23-2151834376.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905" alt="Work 1" className="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 className="text-xl font-bold">Modern Loft Living</h3>
                </div>
                {/* Repeat for other work items */}
            </div>
        </section>
    )
}

export default OurWork