// components/DessertsAndNewsletterSection.jsx
import React from 'react';
import { Send, Check } from 'lucide-react'; // For the newsletter form

// Data for the Desserts & Drinks Menu
const dessertsDrinksData = [
  // Left Column Data
  [
    { name: "Chocoklate Torte", price: 16, description: "Dark choco mousse, ganache and almond" },
    { name: "Tiramisu Glass", price: 18, description: "Ladyfinger, cofee, kahlua, mascarpone, chocolate" },
    { name: "Baked Pear Pie", price: 19, description: "Crispy all butter crust, cream cheese" },
    { name: "Butter Cake", price: 16, description: "Rich vanilla pound cake, ganache" },
  ],
  // Right Column Data
  [
    { name: "Cocktail Mojito", price: 16, description: "White rum, lime juice, pineapple, soda" },
    { name: "Pineapple Whisky Cup", price: 16, description: "Whisky, vanilla bean, lemon juice, ginger" },
    { name: "Lemon Gin", price: 17, description: "Gin, lemon juice, strawberry, mint" },
    { name: "Red Tea Latte", price: 16, description: "Steamed milk and tea" },
  ],
];

const DessertsAndNewsletterSection = () => {

  const MenuItem = ({ name, price, description }) => (
    <div className="mb-6">
      <div className="flex justify-between items-end pb-1">
  <span className="text-gray-800 text-lg md:text-xl font-medium font-serif">{name}</span>
  <div className="flex-grow border-b border-dotted border-gray-300 mx-2"></div>
  <span className="text-gray-800 text-lg md:text-xl font-bold">${price}</span>
</div>
<p className="text-sm md:text-base text-gray-500 mt-1">{description}</p>

    </div>
  );

  return (
    <div className="font-sans">
      
      {/* 1. Desserts & Drinks Menu Section */}
      <section className="bg-white py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-4">
            FROM OUR KITCHEN
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-800 leading-tight mb-16">
            Desserts & Drinks
          </h2>
          
          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 text-left">
            
            {/* Left Column */}
            <div className="w-full">
              {dessertsDrinksData[0].map((item, index) => (
                <MenuItem key={`dessert-${index}`} {...item} />
              ))}
            </div>

            {/* Right Column */}
            <div className="w-full">
              {dessertsDrinksData[1].map((item, index) => (
                <MenuItem key={`drink-${index}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Newsletter & Social Gallery Section (using previously defined design structure) */}
      <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Newsletter Signup Area */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-20">
            
            {/* Left Text Content */}
            <div className="max-w-md lg:max-w-none mb-8 lg:mb-0 lg:mr-12">
              <p className="text-xs uppercase tracking-widest text-gray-600 mb-2">
                STAY TUNED WITH COZYSTAY
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-800 leading-snug">
                Sign up for our newsletter to receive our new, deals and special offers.
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
                <label htmlFor="privacy-check-2" className="flex items-center cursor-pointer">
                  <input type="checkbox" id="privacy-check-2" className="hidden peer" />
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
              <div className="h-48 md:h-64 bg-gray-200 bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/boot.png')" }}></div>
              {/* Image 2 */}
              <div className="h-48 md:h-64 bg-gray-300 bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/boot2.png')" }}></div>
              {/* Image 3 */}
              <div className="h-48 md:h-64 bg-gray-400 bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/boot3.png')" }}></div>
              {/* Image 4 */}
              <div className="h-48 md:h-64 bg-gray-500 bg-cover bg-center rounded-sm" style={{ backgroundImage: "url('/header.jpg')" }}></div>
            </div>

            {/* Follow Button */}
            <button className="bg-[#536E5F] text-white px-8 py-3 hover:bg-[#3D554E] transition-colors duration-200 text-sm uppercase tracking-wider font-medium">
              Follow Us on Instagram
            </button>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default DessertsAndNewsletterSection;