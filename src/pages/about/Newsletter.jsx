// components/NewsletterAndSocialSection.jsx
import React from 'react';
import { Mail, Check } from 'lucide-react'; // Using Lucide icons for the mail and checkbox

const NewsletterAndSocialSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Newsletter Signup Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20">
          
          {/* Left Text Content */}
          <div className="max-w-md lg:max-w-none mb-8 lg:mb-0 lg:mr-12">
            <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">
              Stay tuned with Kingsukh Guest House
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 leading-snug">
              Sign up for our newsletter to receive our news, deals and special offers.
            </h2>
          </div>

          {/* Right Form */}
          <form className="w-full lg:w-96 flex flex-col space-y-3">
            <div className="relative border-b border-gray-400 focus-within:border-[#536E5F]">
              <input 
                type="email" 
                placeholder="Your Email Address" 
                className="w-full pb-2 bg-transparent focus:outline-none text-gray-800 placeholder-gray-500 text-sm"
              />
              <Mail className="absolute right-0 top-0 w-4 h-4 text-gray-500" />
            </div>
            
            <div className="flex items-center pt-2">
              {/* Custom Checkbox Design */}
              <label htmlFor="privacy-check" className="flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  id="privacy-check" 
                  className="hidden" // Hide default checkbox
                />
                <div className="w-4 h-4 border border-gray-400 flex items-center justify-center mr-2 relative">
                  {/* Custom checked indicator (using Tailwind classes for simplicity) */}
                  <Check className="w-3 h-3 text-white absolute opacity-0 peer-checked:opacity-100 transition-opacity duration-100" />
                  {/* Style the container when checked */}
                  <style jsx>{`
                    input[type="checkbox"]:checked + div {
                      background-color: #536E5F;
                      border-color: #536E5F;
                    }
                  `}</style>
                </div>
                <span className="text-xs text-gray-600">
                  I agree to the Privacy Policy
                </span>
              </label>
              
              {/* The "Subscribe" button is implied by the mail icon being on the form line in the design, 
                 but for functionality, it's often a separate button. I'll omit it here to strictly follow the visual layout 
                 which relies on the text input being the main element. */}
            </div>
          </form>
        </div>

        {/* Social Gallery Section */}
        <div className="flex flex-col items-center">
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full">
            {/* Image 1 */}
            <div 
              className="h-48 md:h-64 bg-gray-200 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/social-1.jpg')" }} // Placeholder
            ></div>
            {/* Image 2 */}
            <div 
              className="h-48 md:h-64 bg-gray-200 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/social-2.jpg')" }} // Placeholder
            ></div>
            {/* Image 3 */}
            <div 
              className="h-48 md:h-64 bg-gray-200 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/social-3.jpg')" }} // Placeholder
            ></div>
            {/* Image 4 */}
            <div 
              className="h-48 md:h-64 bg-gray-200 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/social-4.jpg')" }} // Placeholder
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

export default Newsletter;