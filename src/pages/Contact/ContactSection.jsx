"use client";
import React from "react";

const ContactSection = () => {
  return (
    <div className="relative min-h-screen bg-gray-100 font-sans pt-[80px]">
      {/* Map Section */}
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

      {/* Floating Contact Section */}
      <div className="absolute top-[20vh] left-0 right-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 md:pb-20">
          <div className="bg-white p-6 md:p-10 shadow-2xl rounded-md">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              
              {/* Left Column: Image */}
              <div
                className="h-72 md:h-96 lg:h-full w-full bg-gray-300 bg-cover bg-center rounded-md"
                style={{ backgroundImage: "url('out.jpg')" }}
              ></div>

              {/* Right Column: Contact Info & Form */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="border-b border-gray-200 pb-6">
                  <h3 className="text-xl font-serif text-gray-800 mb-3">
                    Contact Information
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Address:</span>{" "}
                    Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium text-gray-700">Phone:</span>{" "}
                    +91 9007062180
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium text-gray-700">Email:</span>{" "}
                    kkghosh0099@gmail.com
                  </p>
                </div>

                {/* Contact Form */}
                <div>
                  <h3 className="text-xl font-serif text-gray-800 mb-6">
                    Let's start a conversation
                  </h3>

                  <form className="flex flex-col space-y-4">
  <input
    type="text"
    placeholder="Your name"
    className="w-full p-3 border border-gray-300 rounded-sm 
               focus:border-[#536E5F] focus:ring-0 focus:outline-none 
               text-sm text-gray-800 placeholder:text-gray-500"
  />
  <input
    type="email"
    placeholder="Your email"
    className="w-full p-3 border border-gray-300 rounded-sm 
               focus:border-[#536E5F] focus:ring-0 focus:outline-none 
               text-sm text-gray-800 placeholder:text-gray-500"
  />
  <input
    type="text"
    placeholder="Subject"
    className="w-full p-3 border border-gray-300 rounded-sm 
               focus:border-[#536E5F] focus:ring-0 focus:outline-none 
               text-sm text-gray-800 placeholder:text-gray-500"
  />
  <textarea
    placeholder="Your message"
    rows="4"
    className="w-full p-3 border border-gray-300 rounded-sm 
               focus:border-[#536E5F] focus:ring-0 focus:outline-none 
               text-sm text-gray-800 resize-none placeholder:text-gray-500"
  ></textarea>

  <button
    type="submit"
    className="w-full bg-[#536E5F] text-white py-3 rounded-sm 
               hover:bg-[#3D554E] transition-colors text-sm font-medium"
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
