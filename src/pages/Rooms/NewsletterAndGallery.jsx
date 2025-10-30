// components/NewsletterAndSocialSection.jsx
import React from 'react';
import { Send, Check } from 'lucide-react'; // Using Lucide icons for the send button and checkbox

const NewsletterAndSocialSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Newsletter Signup Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20">
          
          {/* Left Text Content */}
          <div className="max-w-md lg:max-w-none mb-8 lg:mb-0 lg:mr-12">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">
              Stay tuned with Cozystay
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 leading-snug">
              Sign up for our newsletter to receive our news, deals and special offers.
            </h2>
          </div>

          {/* Right Form */}
          <form className="w-full lg:w-[400px] flex flex-col space-y-3">
            {/* Email Input with Subscribe Button */}
            <div className="relative border-b border-gray-400 focus-within:border-[#536E5F] pb-1">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full pr-10 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 text-sm"
              />
              <button type="submit" className="absolute right-0 bottom-0 p-1 text-gray-500 hover:text-[#536E5F] transition-colors duration-200">
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            {/* Privacy Policy Checkbox */}
            <div className="flex items-center pt-2">
              <label htmlFor="privacy-check" className="flex items-center cursor-pointer">
                {/* Custom Hidden Checkbox */}
                <input 
                  type="checkbox" 
                  id="privacy-check" 
                  className="hidden peer" // Add peer for styling siblings
                />
                {/* Custom Checkbox Visual */}
                <div className="w-4 h-4 border border-gray-400 flex items-center justify-center mr-2 transition-all duration-100 peer-checked:bg-[#536E5F] peer-checked:border-[#536E5F]">
                  <Check className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-100" />
                </div>
                <span className="text-xs text-gray-600">
                  I agree to the Privacy Policy
                </span>
              </label>
            </div>
          </form>
        </div>

        {/* Social Gallery Section */}
        <div className="flex flex-col items-center">
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full">
            {/* Image 1 */}
            <div 
              className="h-48 md:h-64 bg-gray-200 bg-cover bg-center rounded-sm"
              style={{ backgroundImage: "url('/boot.png')" }} // Placeholder
            ></div>
            {/* Image 2 */}
            <div 
              className="h-48 md:h-64 bg-gray-200 bg-cover bg-center rounded-sm"
              style={{ backgroundImage: "url('/boot2.png')" }} // Placeholder
            ></div>
            {/* Image 3 */}
            <div 
              className="h-48 md:h-64 bg-gray-200 bg-cover bg-center rounded-sm"
              style={{ backgroundImage: "url('/boot3.png')" }} // Placeholder
            ></div>
            {/* Image 4 */}
            <div 
              className="h-48 md:h-64 bg-gray-200 bg-cover bg-center rounded-sm"
              style={{ backgroundImage: "url('/header.jpg')" }} // Placeholder
            ></div>
          </div>

          {/* Follow Button */}
          <button className="bg-[#536E5F] text-white px-8 py-3 hover:bg-[#3D554E] transition-colors duration-200 text-sm uppercase tracking-wider font-medium">
            Follow Us on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterAndSocialSection;