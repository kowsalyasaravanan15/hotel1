// components/MenuHeroSection.jsx
import React from 'react';

const MenuHeroSection = () => {
  return (
    <section
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center text-white p-4"
      // Placeholder for the food background image
      style={{ backgroundImage: "url('/menu1.webp')" }} 
    >
      {/* Dark Overlay to make the text pop */}
      <div className="absolute inset-0 bg-black opacity-60"></div> 

      {/* Content */}
      <div className="relative z-10 text-center max-w-xl mx-auto">
        <p className="uppercase tracking-[0.3em] text-xs sm:text-sm mb-4 opacity-80">
          A LA CARTE MENU
        </p>
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif font-light leading-none mb-6">
          Our Menu
        </h1>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Monday—Sunday, 10am–11pm
        </p>
      </div>
    </section>
  );
};

export default MenuHeroSection;