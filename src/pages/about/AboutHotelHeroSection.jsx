// components/AboutHotelHeroSection.jsx
import React from 'react';

const AboutHotelHeroSection = () => {
  return (
    <section
      className="relative h-[80vh] md:h-screen w-full bg-cover bg-center flex items-center justify-center text-white p-4"
      // In a real Next.js app, use the `next/image` component for optimized images
      style={{ backgroundImage: "url('/service.jpg')" }} // Placeholder for the background image
    >
      {/* Overlay to darken the image slightly for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <p className="uppercase tracking-widest text-xs sm:text-sm mb-3 opacity-80">
          AN ICONIC HOTEL SINCE 1998
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light leading-snug mb-6">
          About The Hotel
        </h1>
        <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
          The finest haven of warmth, tranquility and restoration
        </p>
      </div>
    </section>
  );
};

export default AboutHotelHeroSection;