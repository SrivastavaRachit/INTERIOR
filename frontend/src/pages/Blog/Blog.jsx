import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
// Import Font Awesome for icons
import { FaCalendarAlt, FaUser } from 'react-icons/fa';


const Blog = () => {

    const blogPosts = [

        {
            id: 1,
            title: 'Interior Design Inspiration and Ideas',
            date: 'July 20, 2023',
            author: 'admin',
            image: 'https://img.freepik.com/free-photo/life-style_1122-1800.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
            content: 'Step into the world of interior design with our blogs that offer endless inspiration and practical advice. Discover expert tips on styling your spaces, explore trending decor ideas, and learn how to make your home truly yours.'
        },
        {
            id: 2,
            title: 'Transform Your Hall Room',
            date: 'July 21, 2023',
            author: 'admin',
            image: 'https://img.freepik.com/free-photo/woman-using-laptop-minimal-decorated-room_23-2150407595.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
            content: 'Discover how to turn your hall room into a stunning space with our interior design blogs. From layout ideas and lighting solutions to furniture choices and decorative accents, we share expert advice and trending styles that can elevate the look of your hall room.'
        },
        {
            id: 3,
            title: 'Color Psychology in Interior Design',
            date: 'July 22, 2023',
            author: 'admin',
            image: 'https://img.freepik.com/free-photo/3d-contemporary-living-room-interior-modern-furniture_1048-8649.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
            content: 'Learn how different colors can impact mood and energy in a room. Get advice on selecting the perfect hues to create a calming bedroom, an inspiring home office, or a lively kitchen.'
        },
        {
            id: 4,
            title: 'The Art of Small Space Decoration',
            date: 'July 22, 2023',
            author: 'admin',
            image: 'https://img.freepik.com/free-vector/realistic-lounge-interior-3d-design_1284-20209.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid',
            content: 'Living in a small apartment? No problem! Learn how to make the most of your space with smart storage solutions, multifunctional furniture, and creative layouts that maximize both style and functionality.'
        },
        {
            id: 5,
            title: 'Modern Living Room Makeovers',
            date: 'July 22, 2023',
            author: 'admin',
            image: 'https://img.freepik.com/free-photo/view-futuristic-bedroom-with-furniture_23-2151152056.jpg?uid=R167672705&ga=GA1.2.1165456550.1728109905&semt=ais_hybrid',
            content: 'Discover the latest trends in living room makeovers that can bring a touch of modern elegance to your home. From minimalist furniture to bold color schemes, learn how to transform your space with expert tips and stunning ideas.'
        },
        {
            id: 6,
            title: 'Sustainable Interior Design',
            date: 'July 22, 2023',
            author: 'admin',
            image: 'https://img.freepik.com/free-photo/cinematic-shot-yellow-sofa-modern-interior-room_1409-7575.jpg?uid=R167672705&ga=GA1.2.1165456550.1728109905&semt=ais_hybrid',
            content: 'Embrace sustainability in your home decor by incorporating eco-friendly materials, vintage furniture, and energy-efficient designs. Discover ways to create a beautiful, green living space that reflects your commitment to the environment.'
        },
    ];

    return (
        <>
            <Navbar />
            <br />
            <br />
            {/* Banner Section */}
            <section className="relative w-full h-96 md:h-120 lg:h-[32rem] bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-photo/modern-styled-entryway_23-2150695915.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905&semt=ais_hybrid')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center banner-animation">
                    <h1
                        className="text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-float transition-transform duration-500 ease-in-out hover:scale-110 responsive-animation"
                    >
                        Blog
                    </h1>
                </div>
            </section>


            <br />

            <div className="bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8">
                        {blogPosts.map((post, index) => (
                            <div
                                key={post.id}
                                className={`bg-white rounded-lg overflow-hidden flex flex-col md:flex-row  transform transition duration-500 hover:scale-105 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Separate div for the image */}
                                <div className="md:w-1/2 overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-64 object-cover md:h-full hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                {/* Content Box */}
                                <div className="p-8 md:w-2/3 lg:w-1/2 flex flex-col justify-center mx-auto bg-white min-h-[150px]">
                                    <div className="w-full max-w-md mx-auto">
                                        <h3 className="text-2xl font-bold mb-4 hover:text-blue-500 transition-colors duration-300">{post.title}</h3>
                                        <div className="flex items-center text-gray-600 mb-4">
                                            <FaCalendarAlt className="mr-2" />
                                            <span className="mr-4 text-base">{post.date}</span>
                                            <FaUser className="mr-2" />
                                            <span className="text-base">{post.author}</span>
                                        </div>
                                        <p className="text-gray-700 text-base mb-6">
                                            {post.content}
                                        </p>
                                        {/* <button
                                            onClick={() => navigate(`/blog/${post.id}`)}
                                            className="bg-blue-600 text-white text-base px-5 py-3 rounded hover:bg-blue-700 transition duration-300"
                                        >
                                            Read More
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <br />
                <br />
                <Footer />
            </div>
        </>
    );
};

export default Blog;

