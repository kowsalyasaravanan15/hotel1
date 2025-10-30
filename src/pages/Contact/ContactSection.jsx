// components/ContactSection.jsx
import React from 'react';

// NOTE: This Header is added to match the top bar in the screenshot.
const HeaderNavbar = () => { 
  return (
    <header className="absolute top-0 left-0 right-0 z-50 p-4 lg:p-6 bg-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        
        {/* Logo */}
        <div className="text-xl font-serif text-gray-800 tracking-widest">
          COZYSTAY<span className="text-sm block tracking-normal text-gray-600">CHALET</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-800 text-sm uppercase tracking-wider">
          <a href="#" className="hover:text-gray-600">Home</a>
          <a href="#" className="hover:text-gray-600">Rooms</a>
          <a href="#" className="hover:text-gray-600">Blog</a>
          <a href="#" className="hover:text-gray-600 font-bold border-b border-gray-800">Contact</a>
        </div>

        {/* Contact & Booking Button */}
        <div className="flex items-center space-x-6 text-sm">
          <span className="hidden sm:inline text-gray-700">+41 22 565 67 88</span>
          <button className="bg-[#536E5F] text-white px-5 py-2 hover:bg-[#3D554E] transition-colors duration-200 uppercase tracking-wider">
            Reserve Now
          </button>
        </div>
      </div>
    </header>
  );
};


const ContactSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 font-sans pt-[80px]"> {/* pt-[80px] to offset fixed header */}
      <HeaderNavbar />

      {/* Map Section (Covers the top half of the screen) */}
      <div className="relative h-[50vh] w-full bg-gray-200">
        <iframe 
          title="Hotel Location Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3656.4987085738117!2d86.859825!3d23.586441!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1761631987614!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Content Container (Floats over the map area) */}
      <div className="absolute top-[20vh] left-0 right-0 z-20"> {/* Adjust 'top' to control overlap */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
          
          {/* Main Content Box with White Background and Shadow */}
          <div className="bg-white p-6 md:p-8 lg:p-10 shadow-2xl rounded-sm">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
              
              {/* Left Column: Image */}
              <div 
                className="h-80 lg:h-full w-full bg-gray-300 bg-cover bg-center rounded-sm"
                style={{ backgroundImage: "url('out.jpg')" }} // Placeholder
              ></div>
              
              {/* Right Column: Contact Info & Form */}
              <div className="p-0">
                
                {/* Contact Information */}
                <div className="mb-8 border-b border-gray-100 pb-6">
                  <h3 className="text-xl font-serif text-gray-800 mb-3">
                    Contact Information
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Address:</span> Cindolina 23, 6991 Lugano, Switzerland
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Phone Number:</span> +41 22 565 67 88
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-700">Email:</span> info@cozystay.com
                  </p>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-serif text-gray-800 mb-5">
                    Let's start a conversation
                  </h3>
                  <form className="space-y-4">
                    {/* Form fields use border-b styling to match the design */}
                    <input type="text" placeholder="Your name" className="w-full p-2 border-b border-gray-300 focus:border-[#536E5F] focus:outline-none text-sm" />
                    <input type="email" placeholder="Your email" className="w-full p-2 border-b border-gray-300 focus:border-[#536E5F] focus:outline-none text-sm" />
                    <input type="text" placeholder="Subject" className="w-full p-2 border-b border-gray-300 focus:border-[#536E5F] focus:outline-none text-sm" />
                    <textarea 
                      placeholder="Your message" 
                      rows="3" 
                      className="w-full p-2 border-b border-gray-300 focus:border-[#536E5F] focus:outline-none text-sm resize-none"
                    ></textarea>
                    
                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      className="bg-[#536E5F] text-white px-8 py-3 hover:bg-[#3D554E] transition-colors duration-200 text-sm uppercase tracking-wider font-medium mt-6"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;