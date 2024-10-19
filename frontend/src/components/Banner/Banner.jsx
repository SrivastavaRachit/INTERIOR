import React from 'react'

const Banner = () => {
    return (
        <section
            className="relative w-full h-96 md:h-[500px] lg:h-[600px] bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: `url('https://img.freepik.com/free-photo/digital-lavender-style-interior-design_23-2151561236.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid')`,
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>
            {/* Banner Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-8 lg:px-16">
                <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-wide mb-4 animate-fade-in-up">
                    Home
                </h1>

            </div>
        </section>
    )
}

export default Banner