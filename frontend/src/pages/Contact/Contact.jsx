import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    const whatsappMessage = `*Contact Details*:%0A%0A*Name*: ${name}%0A*Email*: ${email}%0A*Phone*: ${phone}%0A*Subject*: ${subject}%0A*Message*: ${message}`;

    const whatsappURL = `https://api.whatsapp.com/send?phone=918840775386&text=${whatsappMessage}`;

    window.open(whatsappURL, '_blank');
    toast.success('Message sent successfully!');

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };

  return (
    <>
      <Navbar />
      <section
        className="relative w-full h-96 md:h-120 lg:h-[32rem] bg-cover bg-center"
        style={{
          backgroundImage: `url('https://img.freepik.com/free-photo/traditional-house-interior-design_23-2151050973.jpg?uid=R167672705&ga=GA1.1.1165456550.1728109905')`
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center banner-animation">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold shadow-lg animate-float hover:scale-110">
            Contact Us
          </h1>
        </div>
      </section>

      <div className="bg-white py-12 px-4">
        <div className="container mx-auto flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6">
          {/* Left Side - Contact Information */}
          <div className="w-full md:w-5/12 space-y-6">
            {[
              { icon: faPhoneAlt, label: "Phone Number", value: "+91 8840775386", link: "tel:+918840775386" },
              { icon: faEnvelope, label: "Email Address", value: "hexagonsservices@gmail.com", 
              link: "mailto:hexagonsservices@gmail.com" },
              { icon: faMapMarkerAlt, label: "Location", value: "Aminabad, Lucknow", link: "#" }
            ].map((info, index) => (
              <a
                key={index}
                href={info.link}
                className="bg-gray-100 shadow-lg rounded-lg p-6 flex items-center
                          space-x-4 transition-transform transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-12 h-12 shadow-md bg-gray-200 rounded-full">
                  <FontAwesomeIcon icon={info.icon} className="text-2xl text-gray-700" />
                </div>
                <div>
                  <p className="text-lg font-medium">{info.label}</p>
                  <p className="text-black">{info.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full md:w-2/3">
            <div className="bg-gray-100 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full md:w-1/2 p-4 border border-gray-400 rounded-md bg-gray-100"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full md:w-1/2 p-4 border border-gray-400 rounded-md bg-gray-100"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full md:w-1/2 p-4 border border-gray-400 rounded-md bg-gray-100"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full md:w-1/2 p-4 border border-gray-400 rounded-md bg-gray-100"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full p-4 border border-gray-400 rounded-md bg-gray-100"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <button
                  type="submit"
                  className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto block py-2 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold hover:scale-105"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Map Section */}
        <section className="bg-white mt-12 px-4 pb-6">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-4 pt-4 text-center w-full">Find Us on Google Map</h2>
            <div className="w-full md:w-3/4 lg:w-2/3 h-64 bg-gray-200 rounded-md flex items-center justify-center overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.2554530577294!2d82.9747433150029!3d26.846708083153245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd77d06d9a63%3A0x8e87ba85c8d9fddd!2sAminabad%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1602273026045!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Contact;
