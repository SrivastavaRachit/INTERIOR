import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">About Us</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec.</p>
            </div>
            <div className="mb-4 md:mb-0">
                <h4 className="text-lg font-semibold mb-2">Get In Touch</h4>
                <p>Email: interiorimpression@gmail.com</p>
                <p>Phone: (+92 224367957)</p>
            </div>
            <div>
                <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                <ul>
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                    <li><a href="#" className="hover:underline">Blog</a></li>
                </ul>
            </div>
        </div>
    </footer>
    )
}

export default Footer